import logo from './logo.svg';
import './App.css';
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles"
import { useEffect, useState } from 'react';

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
};

function App() {

  const [customers, setCustomers] = useState("");

  const callApi = async () => {
    const response = await fetch('api/customers');
    const body = await response.json();
    return body;
  }

  useEffect(() => {
    callApi()
      .then(res =>
        setCustomers(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            customers ? customers.map(c => {
              return <Customer key={c.id} {...c} />
            }) : ""
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
