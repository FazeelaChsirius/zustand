import { Table } from "antd"
import { useStudent } from "../zustand"

const Students = () => {
  const { students } = useStudent((state) => state)

  const columns = [
    {
      title: "Fullname",
      dataIndex: "fullname",
      key: "fullname"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    }
  ]

  return (
    <div className="py-16 w-7/12 mx-auto">
      <Table 
        columns={columns}
        dataSource={students}
      />
    </div>
  )
}

export default Students