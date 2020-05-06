import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse} from 'reactstrap';

const SidebarLeft = () => {
    const [isOpenP, setIsOpenP] = useState(false);
    const toggleP = () => setIsOpenP(!isOpenP);

    const [isOpenN, setIsOpenN] = useState(false);
    const toggleN = () => setIsOpenN(!isOpenN);

    return (
        <React.Fragment>
            <input type="checkbox" id="nav-check" />
            <label htmlFor="nav-check">
                <i className="fa fa-bars" id="nav-btn" />
            </label>
            <div className="sidebar-left">
                <ul>
                    <li><Link onClick={toggleP}><i className="fa fa-user mr-2" />Profile</Link>
                        <Collapse isOpen={isOpenP}>
                            <ul className="ml-2">
                                <li><Link to="/profile/settings"><i className="fa fa-cog mr-2" />Settings</Link></li>
                                <li><Link to="/profile/notification"><i className="fa fa-bell-slash mr-2" />Notification</Link></li> 
                            </ul>
                        </Collapse>
                    </li>
                    <hr />
                    <li><Link onClick={toggleN}><i className="fa fa-list-ol mr-2" />My Tasks</Link>
                        <Collapse isOpen={isOpenN}> 
                            <ul className="ml-2">
                                <li><Link to="/mytasks"><i className="fa fa-tasks mr-2" />Task 1</Link></li>
                                <li><Link to="#"><i className="fa fa-tasks mr-2" />Task 2</Link></li>
                            </ul>
                        </Collapse>    
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default SidebarLeft;
