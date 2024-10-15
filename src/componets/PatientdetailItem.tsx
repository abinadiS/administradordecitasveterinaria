type PatientDetailsItemProps = {
    label: string,
    data: string
}

const PatientdetailItem = ({ label, data }: PatientDetailsItemProps) => {
    return (
        <p className="font-bold mb-3 text-gray-700 uppercase">{label} {''}
            <span className=" font-normal normal-case">{data}</span>
        </p>



    )
}

export default PatientdetailItem
