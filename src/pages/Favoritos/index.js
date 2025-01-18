import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import { useFavoritosContext } from "Context/Favoritos";
import Card from "components/Card";

function Favoritos() {
	const { favorito } = useFavoritosContext();
	return (
		<>
			<Banner img="favoritos" color="#AF7EAA" />
			<Titulo>
				<h1> Mis Favoritos </h1>
			</Titulo>
			<section className={styles.container}>
				{favorito.map((fav) => {
					return <Card {...fav} key={fav.id} />;
				})}
			</section>
		</>
	);
}

export default Favoritos;
