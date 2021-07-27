import {Table} from 'antd';
import './App.css';
export const supportsCSS = (attribute, value) => {
  if (window.CSS && window.CSS.supportsCSS) {
    if (typeof value === 'undefined') return window.CSS.supportsCSS(attribute)
    return window.CSS.supportsCSS(attribute, value)
  }

  const elem = document.createElement('div')
  if (attribute in elem.style) {
    elem.style[attribute] = value
    return elem.style[attribute] === value
  }
  return false
}
// if (!supportsCSS("position", "sticky")) {
//   if (!document.querySelector('#antd-hack-for-table')) {
//     let sty = document.createElement('style')
//     sty.id = 'antd-hack-for-table'
//     sty.innerText = `.ant-table .ant-table-cell-fix-left,.ant-table .ant-table-cell-fix-right {left: 0!important}`
//     document.body.appendChild(sty)
//   }
// }
function App() {
  const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    { title: 'Column 1', dataIndex: 'address', key: '1' },
    { title: 'Column 2', dataIndex: 'address', key: '2' },
    { title: 'Column 3', dataIndex: 'address', key: '3' },
    { title: 'Column 4', dataIndex: 'address', key: '4' },
    { title: 'Column 5', dataIndex: 'address', key: '5' },
    { title: 'Column 6', dataIndex: 'address', key: '6' },
    { title: 'Column 7', dataIndex: 'address', key: '7' },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a href='http://www.baidu.com'>action</a>,
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
  ];
  
  return (
    <div className="App">
      <Table columns={columns} dataSource={data} scroll={{ x: 4300 }} />
    </div>
  );
}

export default App;
