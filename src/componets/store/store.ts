import { create } from "zustand"
import { v4 as uuidv4 } from 'uuid'
import { DraftPatient, Patient } from "../types"
import { devtools, persist } from 'zustand/middleware'
import { toast } from "react-toastify"


type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatienById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void

}

const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }

}


export const usePatienStore = create<PatientState>()(devtools(
    persist((set, get) => ({
        patients: [],
        activeId: '',

        addPatient: (data) => {
            const newPatient = createPatient(data)
            set((state) => ({
                patients: [...state.patients, newPatient]
            }))
        },

        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter(patient => patient.id !== id)
            }))
            toast.warning('Registro Eliminado', {
                autoClose: 700
            })
        },

        getPatienById: (id) => {
            set(() => ({
                activeId: id
            }))
        },

        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map(patient => patient.id === state.activeId ? { id: patient.id, ...data } : patient),
                activeId: '',
            }))
        }

    }), {
        name: 'patien-storage'
    })

))