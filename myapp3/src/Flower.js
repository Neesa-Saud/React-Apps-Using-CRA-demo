import react,{component} from 'react';
import flower from "./flower.jpg";
class Flower extends component {
    render()
    {
        return(
            <div>
                <h2>This is Flower</h2>
                <img src = {flower}/>
            </div>
        )
    }
}
export default Flower ;