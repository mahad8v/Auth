import { NavBar } from "./NavBar"
import { AddPost } from "./AddPost"
import { Login } from "./LogIn"
import { UpdatePost } from "./Update"
import { useEffect, useState } from "react"
import { getAllPost } from "../Service/postApi"

export const Home = () => {
  const [post, setPost] = useState()

  useEffect(()=> {
    const fetchuser = async () => {
        try {
            const response = await getAllPost()
            await setPost(response)
            console.log("POST:", post)
        } catch (error) {
            console.log(error)
        }
    }
    fetchuser()
  },[])
  
  return (
    <>
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
                        {[0.1,2,3,4,5,7,8,9,10,11].map((item, index) => {
                            return(
                            // eslint-disable-next-line react/jsx-key
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index+1}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                
                                <td className="px-6 py-4 text-right cursor-pointer">
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
    </>

  )
}
