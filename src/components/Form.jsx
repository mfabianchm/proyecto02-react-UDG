import "../styles-components/Form.css";

function Form() {
  return (
    <div className="form-flex-container">
      <h1 className="form-title">Contáctanos</h1>
      <form className="form-main-container">
        <h1>Nos encantaría colaborar contigo</h1>
        <h3>Envianos un mail a florerias@hotmail.com</h3>
        <label for="name">Nombre</label>
        <input type="text" id="name" placeholder="Escribe tu nombre"></input>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Escribe tu email"></input>
        <label for="phone">Email</label>
        <input type="number" id="phone" placeholder="+55 4526 7672"></input>
        <label for="message">Email</label>
        <input
          type="text"
          id="message"
          placeholder="¿En que podemos ayudarte?"
        ></input>
        <button className="form-button">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
