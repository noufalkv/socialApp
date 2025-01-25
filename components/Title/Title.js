import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Title = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};
export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
