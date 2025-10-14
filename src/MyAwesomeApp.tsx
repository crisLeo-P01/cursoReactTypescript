import type { CSSProperties } from "react";

const firstName = "Cristian";
const lastName = "Paiva";

const favoriteGames = ['ETS2', 'Grand Thead Auto V', 'Cyberpunk']

const isActive = false

const address = {
    zipCode: 'ABC-123',
    country: 'Argentina'
}

const estado: CSSProperties = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 18,
    padding: '10px 20px',
    borderRadius: 20
}

export function MyAwesomeApp() {

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p style={{
                fontSize: 16,
                color: '#161616',
                backgroundColor: '#f1f1f1',
                padding: "5px 20px",
                borderRadius: 20
            }}>{favoriteGames.join(', ')}</p>

            <h3 style={estado}>{isActive ? 'Activo' : 'No activo'}</h3>

            <p>{JSON.stringify(address)}</p>
        </>
    )
}