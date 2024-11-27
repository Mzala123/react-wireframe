import Sidebar from './Sidebar.jsx';
import AppBar from "./AppBar.jsx";
import {useEffect, useRef, useState} from "react";
import InputField from "../form/InputField.jsx";
import FormBuilder from "../form/FormBuilder.jsx";

function Layout() {

    const [isOpen, setIsOpen] = useState(false);
    const sideBarRef = useRef(null);


    function handleToggleMenu(){
        setIsOpen(!isOpen);
    }

    function handleClickOutside(e){
        if (sideBarRef.current && !sideBarRef.current.contains(e.target)){
          setIsOpen(false);
        }
    }

    useEffect(() => {
        if(isOpen){
            document.addEventListener("mousedown", handleClickOutside);
        }else{
            document.addEventListener("mousedown", handleClickOutside);
        }
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen]);


    const fields = [
        {
            name: "firstname",
            label: "First name",
            type: "text",
            placeholder: "firstname",
            required: true,
            value:""
        },
        {
            name: "lastname",
            label: "Last name",
            type: "text",
            placeholder: "lastname",
            required: false,
            value:""
        }
    ]

    function handleSubmit(record){
        console.log("lay out", record);
    }

    return(
        <div className="flex w-full relative bg-gray-100">
            <div ref={sideBarRef}>
                <Sidebar onClose={handleToggleMenu} isOpen={isOpen}/>
            </div>
            <div className="flex flex-col w-full">
                <AppBar onOpen={handleToggleMenu}/>
                <div className="transition-all p-3 relative top-16 h-screen lg:ml-72">
                    <FormBuilder
                        onSubmit={handleSubmit}
                        fields={fields}
                        title="Hie"
                    />

                </div>
            </div>
        </div>
    )
}

export default Layout;