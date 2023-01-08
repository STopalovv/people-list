export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    const paths = data.map(person => {
        return {
            params: {id: person.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await response.json()

    return {
        props: {person: data}
    }
}

const Details = ({person}) => {
  return (
    <div>
        <h2>Informatinon about candidate:</h2>
        <h3>{person.name}</h3>
        <p>Email: {person.email}</p>
        <p>Personal website: {person.website}</p>
        <p>Lives on: {person.address.street}, {person.address.city}</p>
        <p>Comes from "{person.company.name}" company and had main responsibility to {person.company.bs}.</p>
    </div>
  )
}

export default Details