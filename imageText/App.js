import React from 'react';
import FPhotoTest from './imageText/FPhotoTest';

function App(props) {
    return (
        <div>
            <FPhotoTest image = "desktop" label = "Desktop"/>
            <FPhotoTest image = "noteBook" label = "NoteBook"/>
            <FPhotoTest image = "pad" label = "Pad"/>
        </div>
    );
}

export default App;
//src/App.js에 붙여넣기