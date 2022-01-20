import "./userlist.css"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { DeleteOutline } from "@material-ui/icons"
import { DataGrid } from "@material-ui/data-grid"
import { getMembers, deleteMembers } from "../../redux/authRedux"

function UserList() {
  const dispatch = useDispatch()
  const members = useSelector((state) => state.member.members)

  const columns = [
    {field: "user", headerName: "User", width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
            {params.row.username}
          </div>
        )}
      },
    {field: "_id", headerName: "ID", width: 200},
    {field: "email", headerName: "Email", width: 200},
    {field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row._id)}/>
          </>
        )}
      }
    ]

    const handleDelete = (id) => deleteMembers(id, dispatch)
    useEffect(() => {getMembers(dispatch)}, [dispatch])

  return (
    <div className="userList">
      <div className="product-header">
        <h1 id="productHeaderTitle">USERS</h1>
        <Link to="/newUser">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <DataGrid getRowId={(row) => row._id} rows={members} columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection disableSelectionOnClick />
    </div>
  )
}
export default UserList