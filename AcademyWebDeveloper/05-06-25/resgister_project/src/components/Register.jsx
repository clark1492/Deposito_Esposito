import { useForm } from 'react-hook-form';

export function RegisterSetup() {
    // Estraiamo la funzione register dal modulo useForm
    const { register, handleSubmit } = useForm();

    const handleFormSubmit = (data) => {
        // I dati contengono le chiavi registrate nei campi
        console.log("Dati del form:", data);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            {/* Registriamo l'input con la chiave 'email' */}
            <input {...register("email")} placeholder="Inserisci email" />
            <button type="submit">Conferma</button>
        </form>
    );
}