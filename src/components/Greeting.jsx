import {useState} from "preact/hooks";

const Greeting = ({messages}) => {
    const randomMessage = () => messages[Math.floor(Math.random()*messages.length)]

    const [greeting, setGreeting] = useState(messages[0])

    return <div className="sm:text-center p-4">
        <h3 className="font-bold mb-3 text-2xl">{greeting}! Thank you for visiting!</h3>
        <button className="rounded-full border-2 py-1 px-4 m-4 font-bold border-blue-500 hover:bg-blue-900 hover:text-slate-400  hover:border-slate-400" onClick={() => setGreeting(randomMessage())}>
            New greeting
        </button>
    </div>
}
export default Greeting