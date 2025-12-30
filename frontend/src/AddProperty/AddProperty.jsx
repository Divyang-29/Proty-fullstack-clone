import PropertyAgentInfo from "./PropertyAgentInfo";
import PropertyFloors from "./PropertyFloors";
import PropertyInformation from "./PropertyInformation";
import PropertyPriceInfo from "./PropertyPriceInfo";
import UploadMedia from "./UploadMedia";

export default function AddProperty(){
    return(
        <>
        <UploadMedia/>
        <PropertyInformation/>
        <PropertyPriceInfo/>
        <PropertyFloors/>
        <PropertyAgentInfo/>
        </>
    )
}