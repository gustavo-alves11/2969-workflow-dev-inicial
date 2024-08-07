import {
    describe, expect, it,
  } from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo evento', () => {
    const objetoevento = {
      nome: 'evento teste',
      descricao: 'Descrição do evento',
      data: '2024-05-05',
      autor_id: 1,
    };
  
    it('Deve instanciar um novo evento', () => {
      const evento = new Evento(objetoevento);
  
      expect(evento).toEqual(
        expect.objectContaining(objetoevento),
      );
    });
});
