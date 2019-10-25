import React, { Component } from 'react';

import { Subject } from 'rxjs';

import { debounceTime } from 'rxjs/operators';

const onSearch$ = new Subject().pipe(debounceTime(300));

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      debounced: '',
    };
  }

  componentDidMount() {
    this.subscription = onSearch$.subscribe((debounced) => this.setState({ debounced }));
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSearch(e) {
    const search = e.target.value;
    this.setState({ search });
    onSearch$.next(search);
  }

  render() {
    const { search, debounced } = this.state;
    return (
      <div>
        <input type="text" value={search} onChange={this.onSearch} />
        <div>debounced value: {debounced}</div>
      </div>
    );
  }
}
