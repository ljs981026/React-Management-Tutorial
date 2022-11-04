import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { CircularProgress, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { render } from '@testing-library/react';
import React, { Component } from 'react';

/*
react lifecycle
1) constructor()

2) componentWillMount()

3) render()

4) componentDidMount()

props or state가 변경되면 shouldComponentUpdate()를 불러와서 화면을 갱신해준다.
*/

class App extends Component {
  // 변경될 수 있는 데이터 처리 
  state = {
    customers: "",
    completed: 0,
  }

  // api를 받아올때 사용
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const res = await fetch('/api/customers');
    const body = await res.json();
    return body;
  }

  progress = () => {
    const { completed } =this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

  render() {
    return (
        <Paper>
          <Table>
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
              }) : 
              <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress variant="indeterminate" value={this.state.completed} />
              </TableCell>
              </TableRow>
            }
            </TableBody>
          </Table>
        </Paper>
    );
  }
}

export default App;
