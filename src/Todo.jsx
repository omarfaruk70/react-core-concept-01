//       *** ALL ABOUT SHORTCUT OF  CONDITIONAL RENDERING IN JS OR JSX ***
// 
// system 1
// export default function Todo({task, isDone}){
//     console.log(task, isDone)
//     if(isDone){ // isDone === true;
//     return  <h5>Finished {task}</h5>
//     }
    // return <h5>work on {task} </h5>  // avoid else block. its autometic generate
// }

// system 2 - using ternary operator
// export default function Todo({task, isDone}){
//     console.log(task, isDone);
//     return (
//    <h5>{isDone ?  'finished' : 'Unfinished' } {task}</h5>
// )
// }


// system 3 with &&(and operator)  // etar mane holo bam paser condition fullfill hole tahole run korbe
// export default function Todo({task, isDone}){
//     console.log(task, isDone);
//     return (
//    <h5>{isDone && 'Task is done'} {task}</h5>
// )
// }


// system 4  with (||) or operator // etar mane holo bam paser condition ta sotto na hole run korbe
// export default function Todo({task, isDone}){
//     console.log(task, isDone);
//     return (
//    <h5>{isDone || 'Task not done'} </h5>
// )
// }