import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { addedPost } from "../features/post/postSlice"

export const AddPost = () => {
    const dispatch = useDispatch()
    const initialValues = {
        author: "",
        title: "",
        content: ""
    }


    return( 
        <div className="" style={{width: "300px"}}>
        <h4 className="text-white">ADD POST</h4>
        <Formik 
            initialValues = {initialValues}
            onSubmit={async(values)=> {
                dispatch(addedPost(values))
              
                
            }}
        >
            <Form>
                <div className="grid gap-2 mb-2 md:grid-cols-1">
                    <div>
                        <Field type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Author" name="author" />
                    </div>
                    <div>
                        <Field type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" name="title" />
                    </div>
                    <div>
                        <Field as = "textarea" type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Content" name="content" />
                    </div>
                </div>
              
                
                <button type="onSubmit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </Form>
        </Formik>
    </div>
    )
}