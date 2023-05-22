import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import {useNavigate} from "react-router-dom";

export default function BackButton() {

    const router = useNavigate();
    const goBack = () => {
        router(-1);
    }

    return (
        <button
            type="button"
            className="absolute m-5 top-1 inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={goBack}
        >
            <ArrowLeftIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Back
        </button>
    );
}