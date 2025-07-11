import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);
  console.log(favorito)

  return (
    <FavoritosContext.Provider
      value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  )
}

export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      setFavorito(novaLista);
      console.log('Favoritos atualizados:', novaLista);
      return novaLista;
      
    }

    novaLista.splice(novaLista.indexOf(novoFavorito), 1);
    setFavorito(novaLista)
    console.log('Favoritos atualizados:', novaLista);
    return novaLista;
  }
  return {
    favorito,
    adicionarFavorito
  }
}