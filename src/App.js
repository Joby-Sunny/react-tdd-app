import React, {useState} from 'react';

function App() {
    const nameState = useState('Larry');
    return (
        <h3 className='text-red-600' data-test='app-component'>
      Hello, I am {nameState[0]}
        </h3>
    );
}

export default App;
