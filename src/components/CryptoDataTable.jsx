import * as React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import CryptoData from "../CryptoData"
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const columns = [
  {
    field: 'image',
    headerName: 'Icon',
    renderCell: (params) => <img src={params.value} className={ 'icon icon--s' } />,
  },
  { field: 'name', headerName: 'Name' },
  { field: 'current_price', headerName: 'Price', type: 'number' },
  {
    field: 'market_cap',
    headerName: 'Market cap',
    type: 'number',
    width: 130,
  },
  {
    field: 'ath',
    headerName: 'All time high',
    width: 130,
  },
  {
    field: 'circulating_supply',
    headerName: 'Circulating supply',
    type: 'number',
    width: 130,
  },
]

const CryptoDataTable = (props) => {
  const [data, setData] = useState(null)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(25)

  const handleRowClick = (clickedId, symbol, currentPrice, marketCap, circulatingSupply, allTimeHigh) => {
    const combinedArray = {
      id: clickedId,
      symbol: symbol,
      currentPrice: currentPrice,
      marketCap: marketCap,
      circulatingSupply: circulatingSupply,
      allTimeHigh: allTimeHigh,
      cryptoList: data }
    props.onSelect(combinedArray)
  }

  useEffect(() => {
    axios
      .request(CryptoData)
      .then(response => {
        // Mapped data for the crypto data table
        const filteredData = response.data.map(item => ({
          id: item.id,
          image: item.image,
          name: item.name,
          symbol: item.symbol,
          current_price: item.current_price,
          market_cap: item.market_cap,
          ath: item.ath,
          circulating_supply : item.circulating_supply,
        }))
        setData(filteredData)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <div className="component flex flex--center width--full">
    {data ?
      <Paper className='cryptoList-table__container' sx={{ width: '100%', overflow: 'hidden', boxShadow: 'initial' }}>
        <TableContainer className="crypto-data-table__table-container">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.field}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.headerName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                          {columns.map((column) => {
                            const value = row[column.field]
                            return (
                              <TableCell key={column.field} align={column.align} onClick={() => handleRowClick(row.symbol, row.id, row.current_price, row.market_cap, row.circulating_supply, row.ath)}>
                                {/* <NavLink key={row.symbol} to={row.symbol} onClick={() => handleRowClick(row.symbol)} > */}
                                  {column.renderCell
                                    ? column.renderCell({ value })
                                    : value}
                                {/* </NavLink> */}
                              </TableCell>
                            )
                          })}
                      </TableRow>
                    )
                  })
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      : <div><Box><CircularProgress size={75} sx={{ color: '#66b2ff' }} /></Box></div>
    }
  </div>
  )
}

export default CryptoDataTable
