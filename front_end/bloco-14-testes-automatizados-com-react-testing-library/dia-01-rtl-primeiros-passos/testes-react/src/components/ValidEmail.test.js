import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER }/>);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja vazio.', () => {
  const EMAIL_VAZIO = '';
  render(<ValidEmail email={ EMAIL_VAZIO } />);
  const elementVazio = screen.queryByTestId('id-is-email-valid');
  expect(elementVazio).not.toBeInTheDocument();
});

test('Testando se o componente possui texto verde ao ser digitado um email válido.', () => {
  const EMAIL_USER = 'email@email.com';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  expect(isValidText).toHaveAttribute('class', 'green-text');
});

test('Testando se o componente possui texto vermelho ao ser digitado um email inválido.', () => {
  const EMAIL_USER = 'emailerrado';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  expect(isValidText).toHaveAttribute('class', 'red-text');
});