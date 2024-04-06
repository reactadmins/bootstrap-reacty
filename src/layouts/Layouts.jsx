import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "@/assets/scss/Layouts.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbars/Navbar";
import { useDashboardDataContext } from "../context/dashboardDataContext";

const Layouts = () => {
    const [selectSize, setSelectSize] = useState(null);
    const { sidebarMini } = useDashboardDataContext();
    return (
        <div className={styles.layout_wrapper}>
            <Sidebar selectSize={selectSize} setSelectSize={setSelectSize} />
            <div
                className={`${styles.content} p-4`}
                style={{
                    width: `${
                        sidebarMini ? "calc(100% - 80px)" : "calc(100% - 280px)"
                    }`,
                }}
            >
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Layouts;

