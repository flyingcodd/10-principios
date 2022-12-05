
/* Tabla Ordenar y seleccionar  */
import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha , styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Container } from '@mui/material';
import HomeCarousel from "../components/HomeCarousel";

function createData(procedure, date, condition, details) {
  return {
    procedure, date, condition, details
  };
}

const rows = [
  createData('Constancia de Matrícula','10-12-2022','Proceso','ver mas' ),
  createData(),
  createData(),
  /*createData('Cupcake', 305, 3.7, 67),
  createData('Donut', 452, 25.0, 51),
  createData('Eclair', 262, 16.0, 24),
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Gingerbread', 356, 16.0, 49),
  createData('Honeycomb', 408, 3.2, 87),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Jelly Bean', 375, 0.0, 94),
  createData('KitKat', 518, 26.0, 65),
  createData('Lollipop', 392, 0.2, 98),
  createData('Marshmallow', 318, 0, 81),
  createData('Nougat', 360, 19.0, 9),
  createData('Oreo', 437, 18.0, 63),*/
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
    id: 'procedure',
    numeric: false,
    disablePadding: true,
    label: 'Procedure',
  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'condition',
    numeric: true,
    disablePadding: false,
    label: 'Condition',
  },
  {
    id: 'details',
    numeric: true,
    disablePadding: false,
    label: 'Details',
  }
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
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
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Lista de tickets pagados 
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Edit">
          <IconButton>
            <EditIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>

          </IconButton>
        </Tooltip>
      ) }

{numSelected > 0 ? (
        <Tooltip title="delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon /> 
          </IconButton>
        </Tooltip>
      ) }
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const StyledRoot = styled('div')(({theme}) => ({
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(7, 1),
  [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 0),
  },
}));

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.procedure);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, procedure) => {
    const selectedIndex = selected.indexOf(procedure);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, procedure);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (procedure) => selected.indexOf(procedure) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <StyledRoot>
      <HomeCarousel/> 
      <Container>
        <Box gap={{xs: 3, lg: 10}}
            display="grid"
            alignItems="center"
            gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(1, 1fr)',
            }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar numSelected={selected.length} />
              <TableContainer>
                  <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? 'small' : 'medium'}
                  >
                  <EnhancedTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={rows.length}
                  />
                  <TableBody>
                      {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                      rows.sort(getComparator(order, orderBy)).slice() */}
                      {stableSort(rows, getComparator(order, orderBy))
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                          const isItemSelected = isSelected(row.procedure);
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                          <TableRow
                              hover
                              onClick={(event) => handleClick(event, row.procedure)}
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.procedure}
                              selected={isItemSelected}
                          >
                              <TableCell padding="checkbox">
                              <Checkbox
                                  color="primary"
                                  checked={isItemSelected}
                                  inputProps={{
                                  'aria-labelledby': labelId,
                                  }}
                              />
                              </TableCell>
                              <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              padding="none"
                              >
                              {row.procedure}
                              </TableCell>
                              <TableCell align="right">{row.date}</TableCell>
                              <TableCell align="right">{row.condition}</TableCell>
                              <TableCell align="right">{row.details}</TableCell>
                          </TableRow>
                          );
                      })}
                      {emptyRows > 0 && (
                      <TableRow
                          style={{
                          height: (dense ? 33 : 53) * emptyRows,
                          }}
                      >
                          <TableCell colSpan={6} />
                      </TableRow>
                      )}
                  </TableBody>
                  </Table>
              </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </Box>
      </Container>
    </StyledRoot>
  );
}


/* =========================Tablas Simple ======================== */

/* 
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(procedure, date, condition, details, action) {
  return { procedure, date, condition, details, action };
}

const rows = [
  createData(),
  createData(),
  createData(),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Procedure</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Condition</TableCell>
            <TableCell align="right">Details</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.procedure}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.procedure}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.condition}</TableCell>
              <TableCell align="right">{row.details}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

*/