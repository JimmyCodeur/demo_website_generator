import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Input, Button, Spinner } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { loginUser } from "../firebase/AuthServices";


export function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    setError("");
    setIsLoading(true);
    
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      const token = await user.getIdToken();
      console.log("🔥 Token Google généré :", token);
  
      await setDoc(doc(db, "sessions", user.email), { token });
      console.log("📁 Token enregistré dans Firestore pour :", user.email);
  
      localStorage.setItem("sessionToken", token);
  
      navigate("/dashboard");
    } catch (error) {
      console.error("❌ Erreur Google Auth :", error);
      setError("Une erreur est survenue lors de la connexion avec Google.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("🚀 Bouton 'Se connecter' cliqué !");
  
    setError("");
  
    try {
      const user = await loginUser(email, password);
      console.log("✅ Utilisateur connecté :", user.email);
      navigate("/dashboard");
    } catch (error) {
      console.error("❌ Erreur Firebase :", error.message);
      setError("Connexion échouée. Vérifiez vos identifiants.");
    }
  };
  

  return (
    <section className="grid text-center h-screen items-center p-8 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-md mx-auto">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Connexion
        </Typography>
        <Typography className="mb-8 text-gray-600 font-normal text-[18px]">
          Entrez votre email et mot de passe pour vous connecter
        </Typography>
        {error && <Typography color="red" className="mb-4">{error}</Typography>}
        <form onSubmit={handleLogin} className="text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Votre email
              </Typography>
            </label>
            <Input
              id="email"
              aria-label="Email"
              color="gray"
              size="lg"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Mot de passe
              </Typography>
            </label>
            <Input
              id="password"
              aria-label="Mot de passe"
              size="lg"
              placeholder="********"
              type={passwordShown ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={
                <i onClick={togglePasswordVisibility}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5 cursor-pointer" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 cursor-pointer" />
                  )}
                </i>
              }
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
          <Button
            color="indigo"
            size="lg"
            className="mt-6 flex items-center justify-center"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Spinner className="h-5 w-5" /> : "Se connecter"}
          </Button>
          <div className="!mt-4 flex justify-end">
            <Typography
              as="a"
              onClick={() => navigate("/forgot-password")}
              color="blue-gray"
              variant="small"
              className="font-medium hover:text-blue-600"
            >
              Mot de passe oublié ?
            </Typography>
          </div>
        </form>

        <Typography
          variant="small"
          color="gray"
          className="!mt-4 text-center font-normal"
        >
          Pas encore inscrit ?{" "}
          <button
            onClick={() => navigate("/register")}
            className="font-medium text-blue-600 hover:underline"
          >
            Créez un compte
          </button>
        </Typography>

        {/* Bouton pour se connecter avec Google */}
        <div className="mt-8">
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg py-3 text-gray-600 font-medium shadow-sm hover:shadow-md hover:bg-gray-100 transition duration-200"
          >
            {isLoading ? (
              <Spinner className="h-5 w-5" />
            ) : (
              <>
                <img
                  src=""
                  alt="Google Logo"
                  className="h-5 w-5"
                />
                <span>Se connecter avec Google</span>
              </>
            )}
          </button>
        </div>

        {/* Bouton de retour à la page d'accueil */}
        <div className="mt-8 flex justify-center">
          <Button
            variant="text"
            color="blue-gray"
            size="lg"
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 hover:text-blue-600"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Retour
          </Button>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
