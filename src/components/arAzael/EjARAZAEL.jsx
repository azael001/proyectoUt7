//Ejemplo de un cubo en RA
import { Canvas} from "@react-three/fiber";
import XrAza from "./xrAza";
import { ARButton, XR } from "@react-three/xr";
function EjARAZAEL(){


   
        return(
            <>
                <ARButton/>
                <Canvas>
                    <XR>
                        <XrAza />
                       
                    </XR>
                </Canvas>
            </>
    )

}

export default EjARAZAEL;