import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { COLUMNS } from './columns';
import { useTable } from 'react-table';
import '../styles/table.scss'

function VisitorInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([1, 2, 3]);

  useEffect(() => {
    Axios.get('http://localhost:5000/admin/visits').then((res) => {
    setData(res.data);
    setIsLoading(false);
    })
  }, [])

  // const columns = useMemo(() => COLUMNS, [])
  // const info = useMemo(() => data, [data])

  const tableInstance = useTable({
    columns: COLUMNS,
    data: [...data]
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance

  if (isLoading) {
    return <div> Loading ...</div>
  }
  return (
    <div className='table-container'>
      <table {...getTableProps()}>
              <thead>
                {
                  headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {
                        headerGroup.headers.map(column => (
                          <th {...column.getHeaderProps}>{column.render('Header')}</th>
                        ))
                      }
                    </tr>
                  ))
                }

              </thead>
              <tbody {...getTableBodyProps()}>
                {
                  rows.map((row) => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {
                          row.cells.map(cell => {
                          return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                          })
                        }
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
    </div>
  );
}

export default VisitorInfo