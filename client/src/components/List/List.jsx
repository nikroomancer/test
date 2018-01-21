import React, { Component } from 'react';
import Filter from './Filter/Filter';
import ListContent from './ListContent/ListContent';
import Navbar from '../Navbar/Navbar';

export default class List extends Component {
  render() {
    return (
      <div>
        <Navbar icon="options" title="Hår" backIcon="arrow-left" backLink="/" />
        <Filter />
        <ListContent />
      </div>
    );
  }
}
