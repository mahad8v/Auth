import  http  from "../utils/httpCommon"

export const getAllPost = async () => {
    try {
        const response = await http.get("posts")
        return (response.data)
    } catch (error) {
        console.log(error)
    }
}