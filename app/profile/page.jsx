'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'    
import { useRouter, usePathname } from 'next/navigation'

import Profile from '@components/Profile'

const MyProfile = () => {

    const { data: session } = useSession()
    const Router = useRouter()

    const [posts, setPosts] = useState([])

    useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();
        setPosts(data);
      };

      if (session?.user.id) fetchPosts();
    }, []);


    const handleEdit = (post) => {
      Router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
      const hasConfirmed = confirm("Are you sure you want to delete this prompt?")

      if (hasConfirmed) {
        try {
          await fetch(`/api/prompt/${post._id}`, {
            method: 'DELETE'
          })

          const filteredPosts = posts.filter((p) => p._id !== post._id)
          setPosts(filteredPosts)
        } catch (error) {
          console.log(error)
        }
      }
    }

  return (
    <Profile 
        name="My"
        desc="Welcome to your personalized profile page. Explore your own personalized profile page, where you can find all your posts and the tags you have created. Feel free to edit or delete any of your posts as you see fit. This is your space to showcase your creativity and share your thoughts with the world."
        data={posts}
        handleEdit={handleEdit}
        handdleDelete={handleDelete}
    />
  )
}

export default MyProfile