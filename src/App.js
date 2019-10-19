import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './hooks/useLocation';

const  App=()=>{
  const [lat,errorMessage] = useLocation();
  let content;
  if(lat){
      content = <SeasonDisplay lat={lat}/>;
  }else if(errorMessage){
     content = <div>Error: {this.state.errorMessage}</div>;
  } else{
      content=<Spinner message="Please accept location request" />;
  }
    return (<div className="border red">{content}</div>);

  }


export default App;
