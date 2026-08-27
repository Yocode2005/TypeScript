import {useState} from "react"

interface OrderFormProps{
    onSubmit(order : {name : string; cups : number}) : void
}

export function OrderForm({onSubmit} : OrderFormProps){
    const [name,steName] = useState<string>("Masala")
    const [cups,setCups] = useState<number>(1)

    return (
        <div>OrderForm</div>
    )
}