import Link from 'next/link'
import styles from '../../styles/People.module.css'

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: {people: data}
  }
}

const Index = ({people}) => {
  return (
    <div>
      <h1>All people</h1>
      {people.map(person => (
        <Link href={'/people/' + person.id} key={person.id}>
          <a className={styles.single}>
            <h3>{person.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Index