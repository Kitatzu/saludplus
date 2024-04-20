import "./not-found-style.css"
import Link from 'next/link'
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className='Main'>
        <div className='Text'>
        <h1>Error</h1>
        <h2>404!</h2>

        <p>
            Lo sentimos, no se pudo encontrar <br/>
            la pagina que solicitó. <br/>
            Por favor, regresa a la página de inicio
        </p>

        <Link href="/" className="Button">
          Regresar al inicio
        </Link>

        </div>

        <div className='Imagen'>
            <Image
              src='/images/Ilustracion-error.png'
              alt='error ilustration'
              width={500}
              height={500}
            />
        </div>
    </div>
  );
}
