import {useRouteError} from "react-router-dom";

function ErrorPage() {
    const error = useRouteError()
    console.log(error)

    return(
        <div className="h-screen flex justify-center items-center text-white w-full bg-blue-900">
            <div className="flex flex-col gap-4">
                <h1 className="text-xl">Oops!</h1>
                <p>Sorry, an unexpected error has occurred!</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}

export default ErrorPage;