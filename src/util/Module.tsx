import React, { ReactNode } from 'react';
import { Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import history from '../history';

// TODO: Properly type the Props
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default abstract class Module extends React.Component<any, any> {
  private section: string;

  static propTypes: {
    match: PropTypes.Requireable<
      PropTypes.InferProps<{ path: PropTypes.Requireable<string> }>
    >;
  };

  constructor(props: Readonly<{ match: { path: string } }>) {
    super(props);
    this.section = props.match.path;
  }

  abstract find(): JSX.Element;

  abstract view(): JSX.Element;

  abstract create(): JSX.Element;

  render(): ReactNode {
    return (
      <Router history={history}>
        <Navbar />
        <Route path={`${this.section}/find`} render={this.find} />
        <Route path={`${this.section}/view`} render={this.view} />
        <Route path={`${this.section}/create`} render={this.create} />
      </Router>
    );
  }
}

Module.propTypes = { match: PropTypes.shape({ path: PropTypes.string }) };
