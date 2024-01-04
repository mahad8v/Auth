import { NavBar } from "./NavBar"
import { Adduser } from "./Form"
import { Login } from "./LogIn"

export const Home = () => {
  return (
    <>
        <div className="mb-2">
            <NavBar/>
        </div>
        <div className="flex justify-around p-4 bg-[#111827] rounded">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">
                                Product name
                            </th>
                            <th className="px-6 py-3">
                                Color
                            </th>
                            <th className="px-6 py-3">
                                Category
                            </th>
                            <th className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                            <th className="px-6 py-3">
                                <span className="sr-only">update</span>
                            </th>
                            <th className="px-6 py-3">
                                <span className="sr-only">delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {[0.1,2,3,4,5,7,8,9].map(item => {
                            return(
                            // eslint-disable-next-line react/jsx-key
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                                    <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</div>
                                </td>
                                <td className="px-6 py-4 text-right cursor-pointer">
                                    <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">update</div>
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
            
            <div className="bg-[#111827] p-4  rounded-sm">
                <Adduser/>
            </div>

        </div>
        {/* <Login/> */}
    </>

  )
}
