import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import Countries from "./routes/Countries";
import CountriesDetails from "./routes/CountriesDetails";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/:continentCode/countries",
        element: <Countries />,
    },
    {
        path: "/:continentCode/country/:countryCode",
        element: <CountriesDetails />,
    }
]);

const client = new ApolloClient({
    uri: 'https://countries.nausicaa.wilders.dev/',
    cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
  </React.StrictMode>
);