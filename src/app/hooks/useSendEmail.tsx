import { message } from 'antd';
import { useState } from 'react';

const backendUrl = import.meta.env.VITE_BACKEND_URL

const useEmailSubmit = (apiUrl = backendUrl + '/api/emails') => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);


  const submitEmail = async (emailData: any) => {
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'envoi de l\'email');
      }

      setSuccess(true);
      message.success("Votre email à été envoyé avec succès")
      return data;
    } catch (err) {
        message.error((err as {message:string})?.message ?? "Une erreur est survenue pendant l'envoi du mail");
        throw err;
    } finally {
      setLoading(false);
    }
  };

  return {submitEmail, loading, success, error};
};

export default useEmailSubmit;