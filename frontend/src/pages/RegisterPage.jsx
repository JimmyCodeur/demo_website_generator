import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Input, Button, Spinner, Alert } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { registerUser } from "../firebase/AuthServices";

function RegisterPage() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // État pour le message de succès
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false); // Réinitialise les messages

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      setIsLoading(true);
      await registerUser(email, password); // Appelle la fonction pour créer un utilisateur
      setSuccess(true); // Affiche un message de succès
      setTimeout(() => navigate("/auth"), 3000); // Redirige après 3 secondes
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("Cette adresse e-mail est déjà utilisée.");
          break;
        case "auth/invalid-email":
          setError("L'adresse e-mail n'est pas valide. Veuillez vérifier le format.");
          break;
        case "auth/weak-password":
          setError("Le mot de passe est trop faible. Il doit contenir au moins 6 caractères.");
          break;
        default:
          setError("Une erreur inattendue s'est produite. Veuillez réessayer.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="grid text-center h-screen items-center p-8 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-md mx-auto">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          S'enregistrer
        </Typography>
        <Typography className="mb-8 text-gray-600 font-normal text-[18px]">
          Créez un compte pour commencer à utiliser notre plateforme
        </Typography>

        {/* Message de succès */}
        {success && (
          <Alert color="green" className="mb-4">
            Inscription validée ! Vous serez redirigé vers la page de connexion.
          </Alert>
        )}

        {/* Message d'erreur */}
        {error && <Typography color="red" className="mb-4">{error}</Typography>}

        <form onSubmit={handleRegister} className="text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                Adresse e-mail
              </Typography>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                Mot de passe
              </Typography>
            </label>
            <Input
              id="password"
              type={passwordShown ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              icon={
                <i onClick={togglePasswordVisibility} className="cursor-pointer">
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm-password">
              <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                Confirmez votre mot de passe
              </Typography>
            </label>
            <Input
              id="confirm-password"
              type={passwordShown ? "text" : "password"}
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              size="lg"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
          <Button
            color="blue"
            size="lg"
            className="mt-6 flex items-center justify-center"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Spinner className="h-5 w-5" /> : "S'enregistrer"}
          </Button>
        </form>
        <Typography variant="small" color="gray" className="!mt-4 text-center font-normal">
          Vous avez déjà un compte ?{" "}
          <button
            onClick={() => navigate("/auth")}
            className="font-medium text-blue-600 hover:underline"
          >
            Connectez-vous
          </button>
        </Typography>
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

export default RegisterPage;
