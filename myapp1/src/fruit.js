import react,{component} from 'react';
import food from './food';
import {choice,remove} from "./helper";
class Fruits extends component {
    render()
    {
        let fruit = choice(foods);
        let remaining = remove(foods,fruit);
        return(
            <div>
                <p>Total fruits : {foods.length}</p>
                <p>They are : {fruit.join()}</p>
                <p>choosen fruit is : {fruit}</p>
                <p>remaining fruits are :{remaining.length}</p>
                <p>They are : {remaining.join()}</p>
            </div>
        );
    }
}
export default Fruits;