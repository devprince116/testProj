import { Router } from "express";
import userRoutes from "./users/user.route";
import companyRoutes from "./company/company.route";
const router = Router();

router.use("/users", userRoutes);
router.use("/company", companyRoutes);

export default router;
