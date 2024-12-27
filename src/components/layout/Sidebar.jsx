import { PanelRight} from "lucide-react";
import PropTypes from "prop-types";
import InputField from "../form/InputField.jsx";
import Button from "../form/Button.jsx";

function Sidebar({onClose, isOpen}){





    return(
        <div className={`fixed z-20 shadow-md w-72 border-r border-gray-200 h-screen  bg-white flex flex-col transition-all ${isOpen ? "left-0" : "-left-72"} lg:left-0 lg:shadow-none`}>
            <div className="flex items-center justify-between h-16 pl-3 border-b">
                <div className="">UnCharted UI</div>
                <div>
                    <PanelRight onClick={onClose} className="size-6 hover:cursor-pointer lg:hidden"/>
                </div>
            </div>
            <div className="flex flex-col-reverse flex-1 justify-between px-3 py-3">
                <h1 className="font-semibold">React Router Contacts</h1>
                <div className="flex flex-col">
                    <form id="search-form" role={"search"} className="flex gap-2 items-center mb-4">
                        <InputField type="search" id="search" placeholder="Search"/>
                        <Button>New</Button>
                    </form>
                     <nav>
                         <ul className="flex flex-col gap-2">
                             <li>
                                 <a href={`/contacts/1`}>Your Name</a>
                             </li>
                             <li>
                                 <a href={`/contacts/2`}>Your Friend</a>
                             </li>

                         </ul>
                     </nav>
                </div>
            </div>

        </div>
    )
}

Sidebar.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
}

export default Sidebar;