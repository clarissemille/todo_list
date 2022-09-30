

import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck, faCircleQuestion, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons';


const ToDo = ({ toDo, markDone, setUpdateData, deleteTask  }) => {
    return(
        <>
        {toDo && toDo
            .sort((a, b)=> a.id > b.id ? 1 : -1)
            .map( (task, index) => {
              return (
                <React.Fragment key={task.id}>
                  <div className='col taskBg'>
                    <div className={task.status ? 'done' : ''}>
                      <span className="taskNumber">{index + 1}</span>
                      <span className="taskText">{task.title}</span>
      
                    </div>
                    <div className='iconsWrap'>
                      <span title="Complété / Non complété"
                      onClick={(e) => markDone(task.id)}
                      >
                        <FontAwesomeIcon icon={faCircleCheck} /></span>

                      {task.status ? null : (
                        <span title="Modifier"
                        onClick={() => setUpdateData(task)}
                        >
                          <FontAwesomeIcon icon={faPen} /></span>
      
                      )}
                      <span title="Détails"><FontAwesomeIcon icon={faCircleQuestion} /></span>
                      <span title="Supprimer"
                        onClick={() => deleteTask(task.id)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} /></span>
      
                    </div>
      
                  </div>
      
                </React.Fragment>
              )
            })
            }
</>
    )
}

export default ToDo;