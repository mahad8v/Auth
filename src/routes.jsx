import { Route, Routes } from "react-router-dom"

export const AppRoute = () => {
    return(
        <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    )
}