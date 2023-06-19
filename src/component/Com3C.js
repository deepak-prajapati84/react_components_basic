import { Com4C } from "./Com4C";

export default function Com3C(){

    let data=({
        name:"Deepak",
        surname:"Prajpati"
    })

    console.log("Data--->"+data.name);

   return <div>Com3C pages <Com4C data={data[data.surname]} /> </div>
}