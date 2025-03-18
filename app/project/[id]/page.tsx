// import { useParams } from "next/navigation";
import CardDetail from './_components/cardDetail';


export default async function ProductDetail({ params }: { params: { id: any } }) {
    const res = await fetch(`http://localhost:3001/projects/${params.id}`)
    const projectdetail = await res.json()

    return (
        <>
            <CardDetail projectDetails={projectdetail} />
        </>
    )
}