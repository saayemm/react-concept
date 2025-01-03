
export default function User({user}) {
    const {name, email} = user
  return (
    <div className="bg-slate-800 p-4 m-3 text-white">
        <h4>Name: {name} </h4>
        <p>Email: {email} </p>
    </div>
  )
}
