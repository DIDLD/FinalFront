import "../../../css/acercade.css";

export function Acercade() {
    return (
        <div className="acercade-page bg-dark text-light" >
            <section className="container my-5 " >
                <div className="row">
                    <div className="col-12 col-md-8 align-self-center">
                        <h2 className="text-golden">¿Qué somos?</h2>
                        <p className="text-light">
                            Transformamos la forma en que gestionas tu dinero.
                            En Expense, nos apasiona ayudarte a tener un control total sobre tus finanzas personales. Aunque estamos en constante evolución, nuestra misión es brindarte herramientas poderosas, pero fáciles de usar, que te permitan tomar decisiones más inteligentes con tu dinero.
                        </p>
                        <p className="text-light">
                            A través de nuestra aplicación, buscamos facilitarte el seguimiento de tus gastos y ayudarte a tomar el control de tu futuro financiero. Nuestro equipo está comprometido en seguir mejorando, añadiendo características como presupuestos inteligentes, gráficos dinámicos y alertas personalizadas.
                        </p>
                        <h3 className="text-golden">Nuestra visión</h3>
                        <p className="text-light">
                            En un mundo donde los gastos pueden acumularse rápidamente, queremos ofrecerte una forma de simplificar el proceso de control financiero. Expense no solo es una herramienta, sino un compañero en tu camino hacia la libertad financiera.
                        </p>
                    </div>
                    <div className="col-12 col-md-4">
                        <img 
                            src="../../../../src/assets/img/12.png" 
                            alt="foto"
                            className="img-fluid rounded shadow-lg"
                        />
                    </div>
                </div>
            </section>
            
            <footer className="bg-dark text-light text-center py-4">
                <p>&copy; 2024 Expense. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
