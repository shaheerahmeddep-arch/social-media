import { Form, redirect } from "react-router-dom"

const Createpost = () => {
 

  const handleonsubmit = (e) => {
   
  }


  return (
   
    <>
    <Form method="POST" className='creat-post' >
  <div className="mb-3">



    <label for="userid" className="form-label">Enter your user id</label>
    <input type="text" className="form-control" name="userid" id="userid" placeholder='Tell us about your user id'/>
    <label for="title" className="form-label">Post title</label>
    <input type="text" className="form-control" name="title" id="title" placeholder='How are you feeling today ...'/>
  </div>
  <div className="mb-3">
    <label for="body" className="form-label">Post Content</label>
    <textarea type="text" className="form-control" name="body"  rows={4} id="body" aria-rowspan={4} placeholder='Tell use about you ...'/>
  </div>
    <label for="reactions" className="form-label">Reaction</label>
    <input type="text" className="form-control" name="reaction"  id="reaction" placeholder='How many people reacted'/>
    <label for="tags" className="form-label">tags</label>
    <input type="text" className="form-control" name="tags" id="tags" placeholder='Enter your Hastags here'/>
  
  <button type="submit" className="btn btn-primary">Post</button>
</Form>
    </>
  )
}
 export async function createpostaction(data){
 const formData = await data.request.formData();
const postdata = Object.fromEntries(formData);  
 postdata.tags = postdata.tags.split(" ") 
  fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify (postdata)
    })
    .then(res => res.json())
    // CORRECTED: Server response ko direct bhejne ke bajaye aapki local variables ko addpost ke mutabiq bheja hai
    .then((post) => {
      addpost(post);

    });

    return redirect("/")
 }
export default Createpost
