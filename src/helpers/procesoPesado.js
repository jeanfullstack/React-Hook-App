export const procesoPesado = ( iteraciones ) => {

    for( let i = 0; i < iteraciones; i++ ) {
        console.log('Running');
    }

    return `${ iteraciones } iteraciones realizadas.`;

}