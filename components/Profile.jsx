import PromptCard from "./PromptCard"
import { Suspense } from "react"

const Profile = ({ name, desc, data, handleEdit, handdleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left max-w-xl mt-5">
        {desc}
      </p>
      <div className='mt-10 prompt_layout'>
      {data.map((post) => (
        <PromptCard 
          key={post._id}
          post={post}
          handleEdit={() => handleEdit && handleEdit(post)}
          handleDelete={() => handdleDelete && handdleDelete(post)}
        />
      ))}
    </div>
    </section>
  )
}

export default Profile