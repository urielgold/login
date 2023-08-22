import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectAccessToken } from "../../store/slices/user/userSelector";

export default function DashboardLayout() {
  const accessToken = useSelector(selectAccessToken);

  if (!accessToken) return <Navigate to="/login" />;

  return (
    <Box sx={{ display: "flex", height: "100vh", alignItems: "center" }}>
      <Outlet />
    </Box>
  );
}
