import {gql} from "@apollo/client";

export const GET_CONTINENTS = gql`
    query GetContinents {
        continents {
            code
            name
            countries {
                code
            }
        }
    }
`;

export const GET_COUNTRIES = gql`
    query GetCountries($code: ID!) {
        continent(code: $code) {
            name
            countries {
                code
                name
                emoji
                capital
            }
        }
    }
`;

export const GET_COUNTRY = gql`
    query GetCountry($code: ID!) {
        country(code: $code) {
            name
            native
            phone
            emoji
            emojiU
            capital
            currency
            languages {
                code
                name
            }
            continent {
                code
                name
            }
            states {     
                code
                name 
            }
        }
}
`;