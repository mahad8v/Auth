import  http  from "../utils/httpCommon"

export const getAllPost = () => {
    return http.get("post")
}
