import { NavBar } from "./NavBar"
import { AddPost } from "./AddPost"
import { useDispatch, useSelector } from "react-redux"
import { UpdatePost } from "./Update"
import { useCallback, useEffect, useState } from "react"
import { deletePost, retrievePosts } from "../features/post/postSlice"


export const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    console.log(posts)
  
    const initFetch = useCallback(() => {
    }, [dispatch]);
    
    useEffect(() => {
    dispatch(retrievePosts());
      initFetch();
    }, [initFetch]);


    const handleDeletePost = (id) => {
        console.log("id from home",id)
        dispatch(deletePost(id))
    }
  
  return (
    <div>
        <div className="mb-2">
            <NavBar/>
        </div>
        <div className="flex justify-around py-10 bg-[#111827] rounded">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                        <th className="px-6 py-3">
                                <span className="">#</span>
                            </th>
                            <th className="px-6 py-3">
                                Author
                            </th>
                            <th className="px-6 py-3">
                                Title
                            </th>
                            <th className="px-6 py-3">
                                Description
                            </th>
                            <th className="px-6 py-3">
                                <span className="sr-only">delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((item, index) => {
                            return(
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index+1}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.author}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.title}
                                    </td>
                                    <td className="px-6 py-4 text-ellipsis overflow-hidden ">
                                        {item.description}
                                    </td>
                                    
                                    <td className="px-6 py-4 text-right cursor-pointer" onClick={() => handleDeletePost(item.id)}>
                                        <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">delete</div>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <div className="bg-[#111827] p-4  rounded-sm">
                    <AddPost/>
                </div>
                <div className="bg-[#111827] p-4  rounded-sm">
                    <UpdatePost/>
                </div>
            </div>

        </div>
        {/* <Login/> */}
    </div>

  )
}
