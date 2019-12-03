import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/diretory/directory.selectors.js';

import MenuItem from '../menu-item/menu-item.component.jsx';

import { DirectoryMenu } from './directory.styles.jsx';

const Directory = ({ sections }) => (
  <DirectoryMenu>
    {
      sections.map(({id, ...othersectionProps }) => (
      <MenuItem key={id} {...othersectionProps} />
      ))
    }
  </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);