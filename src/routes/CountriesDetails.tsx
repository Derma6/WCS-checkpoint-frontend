import {useParams} from "react-router-dom";

export default function CountriesDetails() {
    const {countryId} = useParams();

    return (
        <>
            <h1>Countries Details {countryId}</h1>
        </>
    );
}