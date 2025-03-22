import React, { useEffect, useState } from "react";
import "./ContadorDeSegundos.css"

const ContadorDeSegundos = () => {

	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() =>{
			setSeconds((prevSeconds) => prevSeconds +1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

const FormatoDeSegundos = seconds.toString().padStart(6, "0").split("");

	return (
		<>
			<div className="box">
				<div className="contador"><i className="fa-regular fa-clock p-4 rounded-3 shadow-lg"></i></div>
				{FormatoDeSegundos.map((digito, index) => (
					<div key={index} className="contador">{digito}</div>
				))}
			</div>
		</>
	);
};

export default ContadorDeSegundos;