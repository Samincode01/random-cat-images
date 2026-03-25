import React, { use } from 'react';
import '../cats/catContainer.css'
const cats = ({catPromise}) => {
    const catData= use(catPromise)
    const catInfos = catData
    return (
        <div>
            <h1>Total Cats:{catInfos.length}</h1>
            <div className='catContainerCard'>
            {
            catInfos.map(catInfo =>  (<img key={catInfo.id} src={catInfo.url}/>))
            }
           </div>     
            
        </div>
    );
};

export default cats;

// import { use } from "react"
// const catsNew=()=>
// {
//     const catsData = use(catPromise)
//     
// return (
//     <div>
//         <h1>Total Countries:{catInfo.length}</h1>
//     </div>
// )
// }