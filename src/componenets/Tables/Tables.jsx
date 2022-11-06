import * as React from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';


import { visuallyHidden } from '@mui/utils';

function createData(Incident, Description, Priority, Severity, Consulting_Client, Assigned_to, SLA_EndTime, Status, Attachments) {
  return {
    Incident,
    Description,
    Priority,
    Severity,
    Consulting_Client,
    Assigned_to,
    SLA_EndTime,
    Status,
    Attachments
  };
}

const rows = [
  createData('INC221-1', 'Lorem ipsum dolor set amet', 1, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved', <BiDotsVerticalRounded />),
  createData('INC221-2', 'Lorem ipsum dolor set amet', 2, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved', <BiDotsVerticalRounded />),
  createData('INC221-3', 'Lorem ipsum dolor set amet', 3, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved', <BiDotsVerticalRounded />),
  createData('INC221-4', 'Lorem ipsum dolor set amet', 4, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved', <BiDotsVerticalRounded />),
  createData('INC221-5', 'Lorem ipsum dolor set amet', 5, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved', <BiDotsVerticalRounded />),
  createData('INC221-6', 'Lorem ipsum dolor set amet', 6, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved', <BiDotsVerticalRounded />),

];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'Incident',
    numeric: false,
    disablePadding: true,
    label: 'Incident',
  },
  {
    id: 'Description',
    numeric: false,
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'Priority',
    numeric: true,
    disablePadding: false,
    label: 'Priority',
  },
  {
    id: 'Severity',
    numeric: true,
    disablePadding: false,
    label: 'Severity',
  },
  {
    id: 'Consulting_Client',
    numeric: true,
    disablePadding: false,
    label: 'Consulting Client',
  },
  {
    id: 'Assigned_to',
    numeric: true,
    disablePadding: false,
    label: 'Assigned to',
  },
  {
    id: 'SLA_End_time',
    numeric: true,
    disablePadding: false,
    label: 'SLA End Time',
  },
  {
    id: 'Status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'Attachments',
    numeric: true,
    disablePadding: false,
    label: 'Attachments',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,

};


export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('Incident');
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  // Avoid a layout jump when reaching the last page with empty rows.

  return (
    <TableContainer>
      <Table>
        <EnhancedTableHead

          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {/* if you don't need to support IE11, you can replace the `stableSort` call with:
             rows.sort(getComparator(order, orderBy)).slice() */}
          {stableSort(rows, getComparator(order, orderBy))

            .map((row, index) => {

              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow>

                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    {row.Incident}
                  </TableCell>
                  <TableCell align="left">{row.Description}</TableCell>
                  <TableCell align="left">{row.Priority}</TableCell>
                  <TableCell align="left">{row.Severity}</TableCell>
                  <TableCell align="left">{row.Consulting_Client}</TableCell>
                  <TableCell align="left">{row.Assigned_to}</TableCell>
                  <TableCell align="left">{row.SLA_EndTime}</TableCell>
                  <TableCell align="left">{row.Status}</TableCell>
                  <TableCell align="center">{row.Attachments}</TableCell>
                </TableRow>
              );
            })}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
