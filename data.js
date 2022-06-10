import { v4 as uuidv4 } from "uuid";
function chillhop() {
    return [
        // {
        //     name: "",
        //     cover: "",
        //     artist: "",
        //     audio: "",
        //     color: ["", ""],
        //     id: uuidv4(),
        //     active: true,


        // },
        {
           name: "Stranger",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
            artist: "Blue Wednesday",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=24696",
            color: ["#74646B", "#8A5A67"],
            id: uuidv4(),
            active: true, 
        },
        //  {
        //    name: "Caramel",
        //     cover: "https://chillhop.com/wp-content/uploads/2022/03/d47e340cee0956dd4457620a97e4a9df7f849ddb-1024x1024.jpg",
        //     artist: "Leavv",
        //     audio: "",
        //     color: ["#CC354E", "#DDBC01"],
        //     id: uuidv4(),
        //     active: true, 
        // },
          {
           name: "Blue Moment",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/7e2c880b50c6647e59330b1c371101ce2950625f-1024x1024.jpg",
            artist: "Sugi.wa, Tom Ford",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=32978",
            color: ["#2F3C66", "#121110"],
            id: uuidv4(),
            active: false, 
        },
          
    ];
}
export default chillhop;