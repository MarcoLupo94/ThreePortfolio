import { Center } from '@react-three/drei'
import { Link } from 'react-router-dom'
import Experience from './components/Experience'

export const NotFound = () => {
    return (
        <div
            style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <h1> 404 Page Not Found :(</h1>
            <Link to="/" element={Experience}>
                <h3 style={{ background: 'white', padding: '1em' }}>Back to HomePage :)</h3>
            </Link>
        </div>
    )
}
