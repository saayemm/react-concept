
export default function Post({post}) {
    const {title, body} = post
  return (
    <div className="bg-slate-200 p-4 m-2">
        <h2 className="text-xl font-semibold">Title: {title}</h2>
        <p>Body: {body}</p>
    </div>
  )
}
