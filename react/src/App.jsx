import './App.css'

const requestUrl = "http://localhost:7071/api/functions";

async function sendHttpRequest(){
  const response = await fetch(requestUrl);
  if(!response.ok){
    const errorText = await response.text();
    console.error('Error response: ', errorText);
    throw new Error(errorText || 'Request failed');
  }
  else{
    alert(response.status);
  }
};

function App() {
  return (
    <>
      <button onClick={sendHttpRequest}>
        Send Http Request
      </button>
    </>
  )
}

export default App
