import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { render } from '@testing-library/react';
import { withStyles } from '@mui/styles';
import React, { Component } from 'react';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: "50",
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

class App extends Component {
  // 변경될 수 있는 데이터 처리 
  state = {
    customers: "",
  }

  // api를 받아올때 사용
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const res = await fetch('/api/customers');
    const body = await res.json();
    return body;
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.customers ? this.state.customers.map(cust => {
            return(
              <Customer 
                // map을 이용할때 구분할 수 있는 키값을 주어야한다.
                key = {cust.id}
                id = {cust.id}
                image = {cust.image}
                name = {cust.name}
                birthday = {cust.birthday}
                gender = {cust.gender}
                job = {cust.job}
              />
            )
            }) : ""
          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
