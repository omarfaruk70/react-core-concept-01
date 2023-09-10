export default function Singer(singer){
    console.log(singer)
    return(
        <div>
            <h3>Singer: {singer.singer.name} </h3>
            <p>age: {singer.singer.age}</p>
        </div>
    )
}