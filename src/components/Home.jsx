import React, { useRef } from 'react'
import laika from '../LAIKA-color.png'
import software from '../software.png'
import tecnologia from '../tecnologia.png'
import './Home.css'

function Home({ laikaRef, softwareRef, tecnologiaRef }) {
    const executeScroll = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' })

    return (
        <div className="HomeContainer col" style={window.screen.width <= 600 ? {paddingTop: "300px"}: {paddingTop: "15vw"}}>
            <div className="col logoContainer btn" onClick={() => executeScroll(laikaRef)}>
                <img alt="Logo LAIKA" src={laika} />
                <h1>Software LAIKA</h1>
            </div>
            <div className="row ContenedorSecundarioLogos">
                <div className="col logoContainer btn" onClick={() => executeScroll(softwareRef)}>
                    <img alt="Logo LAIKA" className="st" src={software} />
                    <h1>Software a medida</h1>
                </div>
                <div className="col logoContainer btn" onClick={() => executeScroll(tecnologiaRef)}>
                    <img alt="Logo LAIKA" className="st" src={tecnologia} />
                    <h1>Soluciones tecnológicas</h1>
                </div>
            </div>
            <div className="col textos" ref={laikaRef}>
                <h1>SOFTWARE LAIKA</h1>
                <p>Laika es un software empresarial con incrementos de funcinalidad constantes y actualizaciones al sistema base cada tres meses, siendo correcciones y cambios incrementales sin cambiar lógicas ni formas de uso previas. La estabilidad y el enfoque en el usuario son fundamentales para nuestros desarrollos.<br />
                    Laika puede expandirse por medio de desarrollos a medida y permite la interección con dispositivos y otros sistemas.<br />
                    Se comercializa tanto en Software como Servicio como en Software como Producto.<br />
                    Posee una interfaz de usuario web y aplicaciones móviles y de escritorio para algunas funcionalidades, emplea una base de datos PosgreeSQL, está desarrollado sobre el framework OpenORM basado en python y JS.<br />
                    Permite disponer DataWarehose para los clientes que lo requieran.<br />
                    <h3>
                        Funcinalidades del sistema:<br />
                    </h3>
                    <h5>
                        1. CRM – Gestión Comercial<br />
                    </h5>
                    &nbsp;&nbsp;&nbsp;&nbsp;a) Basandose en conceptos de inteligencia comercial, gestiona el vinculo de personas con organizaciones, de organizaciones con Razones Sociales (CUIT), y el vinculo de la Empresa con estas organizaciones. Contempla que en algunos territorios o circunstancias la persona que genera el vinculo con una organización o grupo de organizaciones es un tercero y en otros casos es parte de nuestra empresa.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;b) Permite gestionar estados de las organizaciones dependiendo de la metodología comercial empleada por la Empresa (puede emplearse el esquema Suspectos, Prospectos, Clientes u otra segmentación).<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;c) Premite gestionar Oportunidades comerciales valorizadas.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;d) Permite controlar la eficacia y eficiencia de los cargos comerciales, tanto en su capacidad para generar nuevos contactos con organizaciones, generar nuevas oportunidades y su capacidad para convertir dichas oportunidades en negocios.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;e) Envío de mensajes por Mail, Whatsapp y Telegram para manejo de comunidad, avisos de deuda, envío de facturas, envío de remitos.<br />
                    <h5>
                        2. PM – Gestión de Proyectos<br />
                    </h5>
                    &nbsp;&nbsp;&nbsp;&nbsp;a) Pernite definir Proyectos, Entregables, Acciones y Tareas.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;b) Permite compartir Acciones entre Proyectos.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;c) Permite asignar Gastos a Proyectos<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;d) Permite liquidar horas trabajadas por usuario en cada proyecto<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;e) Permite gestionar tareas personales y laborales en To Do (Pendientes del día) como forma de gestión individual del tiempo. (Vinculado a Aplicación Móvil – To Do)<br />
                    <h5>
                        3. AFIP - Facturación e IVA<br />
                    </h5>
                    &nbsp;&nbsp;&nbsp;&nbsp;a) Emite facturas por talonarios pudiendo ser Facturación Electrónica o por Impresor Fiscal (o talonarios no vinculados que reflejen facturación manual)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;b) Permite controlar la cantidad de facturas emitidas por tipo de factura<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;c) Permite generar configuraciones fiscales (configuraciones tributarias para aplicar a los producots reales)<br />
                    <h5>
                        4. HWyS – Hardware y Servicios y Externos<br />
                    </h5>
                    &nbsp;&nbsp;&nbsp;&nbsp;a) Permite gestionar dispositivos externos mediate hardware proxy.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;b) Actualmente, en el sistema báse, se emplea para manejo de impresoras e impresores fiscales.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;c) Puede emplearse en desarrollos a medida para gestión de sensores y actuadores así como cualquier otro dispositivo que posea interfáz de control.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;d) Permite generar puestos asignables a usuarios (configuraciones de acceso a dispositivos externos y cajas)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;e) Gestión de acciones automáticas recurrentes.<br />
                    <h5>
                        5. APP - Aplicaciones Móviles<br />
                    </h5>
                    &nbsp;&nbsp;&nbsp;&nbsp;a) Permite gestionar los permisos de uso de la aplicación móvil desde el Backoffice, activando o desactivando usuarios o funcionalidades para usuarios puntuales.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;b) Interfaz con impresor bluetuth portatil para impresión de remitos y recibos.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;c) Posee las siguientes funcionalidades sincrónicas:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▪ To Do: Gestión de tareas para gestión del tiempo y cumplimiento de tareas asignadas o generadas. Laborales o Personales.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▪ Tablero IVA: Indicacdor de balance de IVA por mes<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▪ Tablero CC: Indicador de Balance de Cuentas Corrientes y estado de deuda con clientes y proveedores<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▪ Contactos: Permite ver organizaciones y personas, así como disparar llamadas y ver su ubicación en el mapa.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▪ Pedidos: Permite levantar pedidos de productos desde el celular o tablet y presupuestar acorde a la lista de precios asignada el pedido antes de generarlo.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▪ Compras: Permite registrar facturas de compras desde el celular o tablet. Especialmente útil para viajantes, comerciales y técnicos que operan en campo.<br />
                    <h5>
                        6. U$D – Divisas<br />
                    </h5>
                    &nbsp;&nbsp;&nbsp;&nbsp;a) Permite generar divisas y asignarles un valor cambiario a los pesos argentinos (Dolar, Euro, Dolar proveedor X, Dolar proveedor Y)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;b) Permite visualizar el histórico de cotizaciones de esa divisa<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;c) Permite automatizar la actualización de la cotización del dólar acorde a banco nación.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;d) Permite valorizar productos en divisas y que estos productos se pesifiquen a la hora de facturar.<br />
                    <h5>
                        7. PRD – Producto<br />
                    </h5>
                    &nbsp;&nbsp;&nbsp;&nbsp;a) Permite Generar productos y realizar la trazabilidad de los mismos.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;b) Permite productos sin trazabilidad, con trazabilidad por lote y por identificiación única.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;c) Permite controlar unidades y kilogramos en almacen.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;d) Permite organizar despachos desde multiples almacenes a distintas sucursales o destinos de una organización cliente.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;e) Permite generar transferencias de productos entre alamcenes propios.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;f) Permite Facturar y Remitir los despachos realizados.<br />
                    <h5>
                        8. CEI – Cobranzas e Intereses<br />
                    </h5>
                    &nbsp;&nbsp;&nbsp;&nbsp;a) Permite gestionar las deudas de clientes, aplicarles intereses simples con tasas individuales por cliente y gestionar las cobranzas pudiendo perdonar o negociar los intereses.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;b) Permite transferir deuda entre organizaciones independientemetne de la relación fiscal entre deuda y CUIT (esta funcionalidad puede ser de utilidad para clientes que pertenecen a grupos empresarios o cooperativas de consumo o comerciales)<br />
                    <h5>
                        9. MC – Multiples Cajas:<br />
                    </h5>
                    &nbsp;&nbsp;&nbsp;&nbsp;a) Permite gestionar multiples cajas para representar cajas físicas, cuentas bancarias y cajas simbólicas. <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;b) Permite gestionar permisos para que cobranzas y pagos solo se realicen desde las cajas asignadas al usuario.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;c) Permite generar transferencias entre cajas y que estas queden en espera de verificación/autorización de la caja destino (por el usuario dueño de la caja destino)<br />
                    <h5>
                        10. Próximamente:<br />
                    </h5>
                    &nbsp;&nbsp;&nbsp;&nbsp;a) Estilos estéticos para la interfáz del sistema (Junio 2020)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;b) Contabilidad Etápa 1: Libro diario (Diciembre 2021)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;c) Contabilidad Etapa 2: Mayores y Balances (Febrero 2022)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;d) SGM - Gestión del Mantenimiento (Noviembre 2021)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;e) Control de presenteismo con lectura biométrica (Marzo 2022)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;f) Agregado de planes de pago a Cobranzas (Abril 2022)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;g) Agregado de dependencias y gráficos Gantt a Gestión de Proyectos (Octubre 2021)</p>
            </div>
            <div className="col textos" ref={softwareRef}>
                <h1>SOFTWARE A MEDIDA</h1>
                <p>Hemos optimizado los procesos de desarrollo a medida para extensiones del sistema Laika para funciones específicas, pudiendo tener interacción con aplicaciones móviles y sistemas distribuidos (interfaces web masivas, interacción con servicios de terceros (AFIP, Mercado Pago (u otros), Software de terceros con webservice o API documentadas).<br />
                    Para estos desarrollos se emplean las tecnologías OpenORM, python, MySQL, SQL, PostgreeSQL, entornos web React, GoogleMaps, OpenStreetMaps, Kotlin y boostrap.</p>
            </div>
            <div className="col textos" ref={tecnologiaRef}>
                <h1>SOLUCIONES TECNOLÓGICAS</h1>
                <p>Somos capaces de realizar desarrollos a medida integrando tecnologías cercanas al hardware, aplicaciones de escritorio y la realización de proyectos con otros proveedores. Estos desarrollos pueden ser desarrollo de drivers, controladores de hardware para automatización industrial, telemetria, automatizaciones para el manejo de software de terceros, biometría, procesamiento de video, procesamiento de imagenes para identificación de personas y números, traducción de voz a texto y texto a voz, manejo de Mapas y otros.</p>
            </div>
        </div>
    )
}

export default Home
