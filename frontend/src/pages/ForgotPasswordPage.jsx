import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Input, Button } from "@material-tailwind/react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { resetPassword } from "../firebase/AuthServices";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Ajoute un état de chargement
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsLoading(true);

    try {
      await resetPassword(email);
      setMessage("Un e-mail de réinitialisation a été envoyé. Vérifiez votre boîte de réception !");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("L'adresse e-mail est invalide. Veuillez vérifier le format.");
          break;
        case "auth/user-not-found":
          setError("Aucun utilisateur trouvé avec cette adresse e-mail.");
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
          Mot de passe oublié
        </Typography>
        <Typography className="mb-8 text-gray-600 font-normal text-[18px]">
          Entrez votre email pour recevoir un lien de réinitialisation
        </Typography>

        {/* Message de succès */}
        {message && <Typography color="green" className="mb-4">{message}</Typography>}

        {/* Message d'erreur */}
        {error && <Typography color="red" className="mb-4">{error}</Typography>}

        <form onSubmit={handleResetPassword} className="text-left">
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
          <Button
            color="blue"
            size="lg"
            className="mt-6 flex items-center justify-center"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Envoi en cours..." : "Envoyer le lien de réinitialisation"}
          </Button>
        </form>
        <div className="mt-8 flex justify-center">
          <Button
            variant="text"
            color="blue-gray"
            size="lg"
            onClick={() => navigate("/auth")}
            className="flex items-center justify-center gap-2 hover:text-blue-600"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Retour à la connexion
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ForgotPasswordPage;
