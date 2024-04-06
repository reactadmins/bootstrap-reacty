import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "@/assets/scss/Sidebar.module.scss";
import lightLogo from "@/assets/image/light-logo.png";
import lightLogoMini from "@/assets/image/light-mini.png";
import { navItem } from "../../nav";
import { useDashboardDataContext } from "../../context/dashboardDataContext";
import profile from "../../assets/image/admin.jpg";

const Sidebar = ({ selectSize, setSelectSize }) => {
    const [navIsOpen, setNavIsOpen] = useState(null);
    const routerLink = useLocation();
    const { sidebarMini, setSidebarMini, setActiveRouter } =
        useDashboardDataContext();

    let dropRef = useRef();
    useEffect(() => {
        window.onresize = function () {
            setSelectSize(window.screen.width);
        };
        if (selectSize === 1024 || selectSize > 0) {
            document.addEventListener("mousedown", (e) => {
                if (dropRef.current && !dropRef.current.contains(e.target)) {
                    setSidebarMini(false);
                }
            });
        }
    }, [selectSize, setSidebarMini]);

    return (
        <div
            ref={dropRef}
            className={`${styles.sidebar_wrapper} ${
                sidebarMini ? styles.sidebar_mini : ""
            }`}
        >
            <div className={styles.logo}>
                <Link to="/" className="d-block">
                    <img
                        className={styles.light_logo}
                        src={lightLogo}
                        alt="logo"
                    />
                    <img
                        className={styles.mini_logo}
                        src={lightLogoMini}
                        alt="logo"
                    />
                </Link>
                <div className={`${styles.search} position-relative`}>
                    <input placeholder="Search" type="text" />
                    <span className={styles.search_icon}>
                        <i className="fa-solid fa-magnifying-glass" />
                    </span>
                </div>
            </div>
            <div className={`${styles.nav_wrapper}`}>
                <ul className={`${styles.nav} d-flex flex-column `}>
                    {navItem.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={`${styles.nav_item} position-relative`}
                            >
                                {item.path && !item?.children && (
                                    <NavLink
                                        to={item.path}
                                        data-active-router={
                                            routerLink.pathname === "/" &&
                                            index === 0
                                                ? true
                                                : false
                                        }
                                        onClick={() => {
                                            setNavIsOpen(null);
                                            setActiveRouter(item.name);
                                        }}
                                    >
                                        <i className={item.icon} />
                                        <span>{item.name}</span>
                                    </NavLink>
                                )}
                                {item?.children ? (
                                    <a
                                        aria-expanded={
                                            navIsOpen === index &&
                                            item?.children
                                                ? true
                                                : false
                                        }
                                        className="d-flex align-items-center justify-content-between"
                                        onClick={() =>
                                            setNavIsOpen(
                                                navIsOpen === index
                                                    ? null
                                                    : index
                                            )
                                        }
                                    >
                                        <div className="d-flex align-items-center">
                                            <i className={item.icon} />
                                            <span>{item.name}</span>
                                        </div>
                                        <i
                                            className={`${
                                                styles.arrow
                                            } w-auto ${
                                                navIsOpen === index
                                                    ? "fa-solid fa-caret-down"
                                                    : "fa-solid fa-caret-up"
                                            }`}
                                        />
                                    </a>
                                ) : null}
                                {item.url ? (
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="nofollow"
                                    >
                                        <i className={item.icon} />
                                        <span>{item.name}</span>
                                    </a>
                                ) : null}
                                <div
                                    data-submenu-expanded={
                                        navIsOpen === index ? true : false
                                    }
                                    className={`${styles.submenu}`}
                                >
                                    {item?.children ? (
                                        <ul className="d-flex flex-column">
                                            {item?.children.map(
                                                (subItem, index) => {
                                                    return (
                                                        <li
                                                            key={index}
                                                            className={
                                                                styles.submenu_item
                                                            }
                                                        >
                                                            <NavLink
                                                                to={
                                                                    subItem.path
                                                                }
                                                                onClick={() =>
                                                                    setActiveRouter(
                                                                        subItem.name
                                                                    )
                                                                }
                                                            >
                                                                <i
                                                                    className={
                                                                        subItem.icon
                                                                    }
                                                                />
                                                                <span>
                                                                    {
                                                                        subItem.name
                                                                    }
                                                                </span>
                                                            </NavLink>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    ) : null}
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div className={styles.logout_btn}>
                    <Link className="d-flex gap-3">
                        <div className={styles.user_img}>
                            <img src={profile} alt="user-img" />
                        </div>
                        <div className={`${styles.user_email} w-100`}>
                            <div className="d-flex align-items-center justify-content-between">
                                <h4>Olivia Rhye</h4>
                                <i className="fa-solid fa-right-from-bracket" />
                            </div>
                            <span>olivia@untitledui.com</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

