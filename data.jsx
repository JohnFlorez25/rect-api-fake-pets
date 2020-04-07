{this.state.dataPet.map( (pet) => {
    return(
        <li id={`pet-${pet.id}`} key={`pet-${pet.id}`}>
            <p>Nombre: {pet.name} </p>
            <p>Edad: {pet.age}</p>
            <p>Descripción: {pet.description}</p>
            {
                pet.type === "cat" 
                ?
                <p>Tipo de Mascota: <span role="img" aria-label="cat">🐱</span></p>
                :
                <p>Tipo de Mascota: <span role="img" aria-label="dog">🐶</span></p>
            }
        </li>
    )
})}