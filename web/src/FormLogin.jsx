import React, { useState } from "react";
import { useEffect } from "react";
import { login } from "./utills";
// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsDisabled(true);

    await login({ email, password })
      .then((res) => {
        alert(res);
      })
      .catch((res) => {
        setError(res);
      })
      .finally(() => setIsDisabled(false));
  };

  useEffect(() => {
    if (email.length > 0) {
      setError("");
    }
  }, [email]);

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="errorMessage">
            <p>{error}</p>
          </div>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            onClick={handleSubmit}
            disabled={email === "" || password.length < 6 || isDisabled}
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
