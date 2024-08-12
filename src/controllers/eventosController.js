import Evento from '../models/evento.js';

class LivrosController {
  static liberaAcessoEventos = () => process.env.EVENTO_FLAG === 'true';

  // eslint-disable-next-line consistent-return
  static listarEventos = async (req, res) => {
    if (this.liberaAcessoEventos()) {
      try {
        const resultado = await Evento.pegarEventos();
        return res.status(200).json(resultado);
      } catch (err) {
        return res.status(500).json(err.message);
      }
    } else {
      return res.status(404).send();
    }
  };
}

export default LivrosController;
