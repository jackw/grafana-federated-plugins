import React, { PureComponent } from 'react';
import { AppRootProps } from '@grafana/data';

export class App extends PureComponent<AppRootProps<{}>> {
  render() {
    return <div className="page-container">Hello Grafana!</div>;
  }
}
