interface GreetingProps {
    name : string;
}

const Greeting = (props: GreetingProps) => {
    const {name} = props;
    return (
        <>
            <p>Привіт, {name}!</p>
        </>
    )
}

export default Greeting;