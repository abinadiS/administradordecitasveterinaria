import PatientdetailItem from "./PatientdetailItem"
import { usePatienStore } from "./store/store"
import { Patient } from "./types"

type PatientDetailsProps = {
    patient: Patient
}

const PatientDetails = ({ patient }: PatientDetailsProps) => {

    const deletePatient = usePatienStore((state) => state.deletePatient)
    const getPatienById = usePatienStore((state) => state.getPatienById)

    return (
        <div className=" my-10 px-5 py-10 bg-white shadow-md rounded-xl ">

            <PatientdetailItem label="ID" data={patient.id} />
            < PatientdetailItem label="Nombre" data={patient.name} />
            <PatientdetailItem label="propietario" data={patient.caretaker} />
            <PatientdetailItem label="propietario" data={patient.date.toString()} />
            <PatientdetailItem label="Email" data={patient.email} />
            <PatientdetailItem label="Sintomas" data={patient.symptoms} />

            <div className="flex max-[900px]:flex-col gap-3 justify-between mt-10">

                <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => getPatienById(patient.id)}>
                    Editar
                </button>


                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => deletePatient(patient.id)}>
                    Eliminar
                </button>

            </div>

        </div >
    )
}

export default PatientDetails
