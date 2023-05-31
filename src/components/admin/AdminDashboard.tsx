import { ContactsOutlined } from "@material-ui/icons";
import { LibraryAddOutlined } from "@mui/icons-material";
import React from "react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const dashboardItem = [
  {
    name: "User Management",
    icon: <ContactsOutlined fontSize="large" style={{color:'#2F327D'}} />,
    link: "/admin/usermanagement",
  },
  {
    name: "Course Management",
    icon: <LibraryAddOutlined fontSize="large" style={{color:'#2F327D'}} />,
    link: "/admin/coursemanagement",
  },
];

const AdminDashboard = () => {
  return (
    <div className="flex flex-col ">
      <span className=" font-inter text-lg">Admin Dashboard</span>
      <div className="flex flex-row ">
        {dashboardItem.map((item, key) => (
          <ADCard name={item.name} icon={item.icon} link={item.link} key={key}/>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

interface IADCardProps {
  name: string;
  icon: ReactNode;
  link: string;
}

const ADCard = ({ name, icon, link }: IADCardProps) => {
  return (
    <Link to={link}>
      <div className=" shadow-sm w-36 h-40 hover:shadow-lg m-4 p-2 flex flex-col items-center justify-center space-y-3">
        <div>{icon}</div>
        <span className=" text-center">{name}</span>
      </div>
    </Link>
  );
};
