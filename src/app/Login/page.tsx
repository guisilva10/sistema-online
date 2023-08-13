"use client"

import Head from "next/head";
import styles from "../../styles/Login.module.scss"

import { collection, db, getDoc, doc } from "../../store/firebase";
import { GetServerSidePropsContext } from "next";
import { getDocs } from "firebase/firestore";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading/Index.component";

interface Login {
  id: string;
  Login: string;

  Senha: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [teste, setTeste] = useState<Login[]>([]);
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const dbCollection = collection(db, "Login");
      const loginSnapshot = await getDocs(dbCollection);
      const loginList = loginSnapshot.docs.map((doc) => {
        const data = doc.data();
        const login: Login = {
          id: doc.id,
          Login: data.Login,
          Senha: data.Senha,
        };
        return login;
      });
      setTeste(loginList);
      console.log(loginList);
    };
    fetchData();
  }, []);

  const [userId, setUserId] = useState("");

  const handleLogin = (e: FormEvent) => {
    setIsLoading(true)
    e.preventDefault();

    const user = teste.find(
      (user) => user.Login === email && user.Senha === password
    );

    if (user) {
      setUserId(user.id);
      localStorage.setItem('userId', user.id);
      router.push("/Home");
    } else {
      setError("Email ou senha incorretos");
      setIsLoading(false)
    }
  };

  return (
    <>

      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
        `}</style>
      </Head>

      {isLoading && <Loading />}

      <div className={styles.Container}>
        <div className={styles.LoginContainer}>
          <div className={styles.Login}>
            <p className={styles.title}>Olá, Admin!</p>
            <p className={styles.subtitle}>Informe seu acesso para entrar</p>

            <p className={styles.label}>Email</p>
            <input
              id="email"
              className={styles.field}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className={styles.label}>Senha</p>
            <input
              id="senha"
              className={styles.field}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <a className={styles.forget} href="">
              Esqueci minha senha
            </a>

            {error && <p className={styles.erro}>{error}</p>}

            <button className={styles.button} onClick={handleLogin}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}