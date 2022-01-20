import "./newuser.css"

function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="********" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="123-456-7890" />
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}
export default NewUser