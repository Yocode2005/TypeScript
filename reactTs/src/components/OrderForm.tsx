import {useState} from "react"

interface OrderFormProps{
    onSubmit(order : {name : string; cups : number}) : void
}

export function OrderForm({onSubmit} : OrderFormProps){
    const [name,steName] = useState<string>("Masala");
    const [cups,setCups] = useState<number>(1);

    return (
        <form onSubmit={handleSubmit}>
            <label>Chai Name</label>
            <input
            value={name}
            onChange={(e : React.ChangeEvent<HTMLInputElement>) =>
                steName(e.target.value)
            }
             />

        </form>
    )
}