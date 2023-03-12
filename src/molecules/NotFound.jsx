import { CoolLink } from '../atoms/CoolLink'
import Experience from './Experience'

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
            <CoolLink
                routerLink={true}
                link="/"
                element={<Experience />}
                text={'Back To Home Page :)'}
            />
        </div>
    )
}
