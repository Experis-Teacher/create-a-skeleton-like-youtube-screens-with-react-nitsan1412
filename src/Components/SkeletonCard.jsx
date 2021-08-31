import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = ({list}) => {
    return (
        <div>
            {list.items.map((item, index) => {
                {
          return (
            <section key={index}>{
            //    (index%2===0)?
               <div>
                    <SkeletonTheme color="grey" highlightColor="#444">
                    <p>
                        <Skeleton height={250} width={300} count={1} />
                    </p>
                    </SkeletonTheme>
               </div>
            //    :
            //    <div>
            //         <SkeletonTheme color="#990" highlightColor="#550">
            //         <p>
            //             <Skeleton height={250} width={300} count={1} />
            //         </p>
            //         </SkeletonTheme>
            //    </div>
                } 
            </section>
          );
        }})}
        </div>
    )
}

export default SkeletonCard
