import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
// import { withStyles } from '@mui/material/styles';
// import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import { withStyles } from '@mui/styles';
import React, { Component } from 'react';

// root: {
//   width: '100%';
//   marginTop: theme.spacing.unit * 3;
//   overflowX: "auto";
// },
// table: {
//   minWidth: 1080
// }
// const theme = createMuiTheme();

// const useStyles = makeStyles((theme) => {
//   // root: {
//   //   width: '100%',
//   //   marginTop: '50',

//   // }
// });

// const theme = createMuiTheme();
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

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생' 
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '이재석',
    'birthday': '981026',
    'gender': '남자',
    'job': '개발자' 
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',  
    'name': '심청이',
    'birthday': '945021',
    'gender': '여자',
    'job': '회사원' 
  },
]

class App extends Component {
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
          {customers.map(cust => {
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
            })
          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
