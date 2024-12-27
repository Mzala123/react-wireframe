import {Loader} from 'lucide-react'
import PropTypes from "prop-types";

function PageLoader({children, size}){
    return (
        <div className="flex justify-center items-center py-4 gap-2">
            <Loader className={`animate-spin text-gray-700 size-${size}`}/>
            <p className="text-sm font-semibold text-gray-600">{children}</p>
        </div>
    )
}

PageLoader.propTypes = {
    children: PropTypes.node,
    size: PropTypes.number
}

export default PageLoader;