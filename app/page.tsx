import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h3>Bem vindo à Dashboard do Leitor de mangás</h3>
        <Link href="/sobre">Sobre</Link>
    </div>
  );
}