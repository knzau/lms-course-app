import express from "express";
import {
	activateUser,
	deleteUserById,
	getAllUsers,
	getUserInfo,
	loginUser,
	logoutUser,
	registrationUser,
	socialAuth,
	updateAccessToken,
	updateProfilePicture,
	updateUserInfo,
	updateUserPassword,
	updateUserRole
} from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

const userRouter = express.Router();

userRouter.post("/register", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", isAuthenticated, logoutUser);
userRouter.get("/refresh-token", updateAccessToken);
userRouter.get("/user-info", isAuthenticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);
userRouter.put("/update-user-info", isAuthenticated, updateUserInfo);
userRouter.put("/update-user-password", isAuthenticated, updateUserPassword);
userRouter.put("/update-user-avatar", isAuthenticated, updateProfilePicture);
userRouter.get("/get-all-users", isAuthenticated, authorizeRoles("admin"), getAllUsers);
userRouter.put("/update-user-role", isAuthenticated, authorizeRoles("admin"), updateUserRole);
userRouter.delete("/delete-user/:id", isAuthenticated, authorizeRoles("admin"), deleteUserById);

export default userRouter;
