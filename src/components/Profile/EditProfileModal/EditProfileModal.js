import React from 'react';
import { ReactDialogBox } from 'react-js-dialog-box';
import './EditProfileModal.css';

function EditModal({ openDialog }) {
  return (
    <>
      <ReactDialogBox
        closeBox={openDialog}
        modalWidth='60%'
        headerBackgroundColor='red'
        headerTextColor='white'
        headerHeight='65'
        closeButtonColor='white'
        bodyBackgroundColor='white'
        bodyTextColor='black'
        bodyHeight='200px'
        headerText='Title'
      >
        <div>
          <h1>Dialog Content</h1>
        </div>
      </ReactDialogBox>
    </>
  )
}
export default EditModal;