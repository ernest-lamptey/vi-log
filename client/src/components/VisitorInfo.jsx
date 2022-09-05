import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { COLUMNS } from './columns';
import { useTable } from 'react-table';
import '../styles/table.scss'

function VisitorInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const [visitData, setVisitData] = useState([1, 2, 3]);
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    Axios.get("/admin/employees").then((res) => { setEmployeeData(res.data)});
    Axios.get('http://localhost:5000/admin/visits').then((res) => {
    res.data.forEach((item) => {
      employeeData.forEach((employee) => {
        if (item.host_id === employee.id){
          item.host_id = `${employee.f_name} ${employee.l_name}`
        }
      })
      if (item.sign_out === null){
        item.sign_out = '-';
      }
    })
    setVisitData(res.data);
    setIsLoading(false);
    })
  }, [employeeData])

  const tableInstance = useTable({
    columns: COLUMNS,
    data: [...visitData]
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