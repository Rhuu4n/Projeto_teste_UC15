import Link from "next/link";

const page = () => {
    return (  
        <div id="login" >
            <div>
                <h1 className="bg-slate-200 text-orange-600">Página de login</h1>
                <Link href={"../"}>Voltar para Home</Link>
            </div>
        </div>
    );
}
 
export default page;