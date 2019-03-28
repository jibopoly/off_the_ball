/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import TableRowHeading from './TableRowHeading';
import TableRow from './TableRow';

const Table = (props) => {
  const { session, increaseSuccessFullPassCount, increaseFailedPassCount } = props;
  return (
    <View style={{ marginTop: 50, paddingLeft: 1, paddingRight: 1 }}>
      <TableRowHeading
        text1="Skill"
        text2="Success"
        text3="Fail"
        backgroundColor="#5CC4B7"
        textColor="white"
      />
      <TableRow
        text1="Passing"
        text2={props.session.passesCompleted}
        text3={props.session.passesFailed}
        backgroundColor={''}
      />
      <TableRow
        text1="Dribble"
        text2={props.session.passesCompleted}
        text3={props.session.passesFailed}

      />
      <TableRow
        text1="Tackle"
        text2={props.session.passesCompleted}
        text3={props.session.passesFailed}
        tableRowBottom
      />
    </View>
  );
};

Table.propTypes = {
  session: PropTypes.object.isRequired,
  increaseSuccessFullPassCount: PropTypes.func.isRequired,
  increaseFailedPassCount: PropTypes.func.isRequired,
};

export default Table;
