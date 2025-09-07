// Greet component should render and display Hello text
// Incase of any name as param it should render Hello and name with space inbtn
type Iprops = {
    name?: string
}

const Greet = (props: Iprops) => {
    return <div>
        <p>{`Hello ${props.name ?? ''}`}</p>
    </div>
}

export default Greet