import {
    faPhoneVolume,
    faMapMarkerAlt,
    faHandPaper,
    faSnowflake,
    faSkullCrossbones
} from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faTwitter,
    faFacebookF
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(
        faPhoneVolume,
        faMapMarkerAlt,
        faHandPaper,
        faSnowflake,
        faSkullCrossbones,
        faInstagram,
        faTwitter,
        faFacebookF
    )
}

export default Icons