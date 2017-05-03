import React, { PropTypes } from 'react'
import {InstantSearch, Hits, SearchBox} from 'react-instantsearch/dom'
import {connectHits} from 'react-instantsearch/connectors'
import { renderToString } from 'react-dom/server'

function Product({hit}) {
  return (
    <div>
      {hit.name}
    </div>
  );
};

// I'm passing an initialResultState:
// - Displayed if searchResults is undefined only

const Search = ({resultsState}) => {
  console.log('updated234');
  return (
    <InstantSearch
      appId="latency"
      apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
      indexName="bestbuy"
      resultsState={resultsState}
    >
      <SearchBox/>
      <Hits hitComponent={Product}/>
    </InstantSearch>
  )
}

export default Search
