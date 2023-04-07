import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ajouter ici la logique d'authentification avec votre backend
    // Si l'authentification est réussie, rediriger l'utilisateur vers la page de son choix
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-medium text-gray-800">Are you a content creator ?</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-full mt-6">
          {error && (
            <p className="mb-4 text-red-500" role="alert">
              {error}
            </p>
          )}
          <label htmlFor="email" className="mb-2 text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <label htmlFor="password" className="mb-2 text-gray-800">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
