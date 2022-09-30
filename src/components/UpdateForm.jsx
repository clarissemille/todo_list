const UpdateForm = ({ updateData, changeHolder, updateTask, cancelUpdate}) => {
    return(
        
<>
      <div className='row'>
        <div className='col'>
          <input 
          value={ updateData && updateData.title}
          onChange={(e) => changeHolder(e)}
          className='form-control form-control-lg' />
        </div>
        <div className='col-auto'>
          <button 
            onClick={updateTask}
            className='btn btn-lg  mr-20'>Modifier</button>
          <button 
          onClick={cancelUpdate}
          className='btn btn-lg  mr-20'>Annuler</button>
        </div>
      </div>
  
</>
    )
}

export default UpdateForm;