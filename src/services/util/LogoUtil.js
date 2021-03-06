const LogoUtil = {
    getLogoByName(university) {
        switch (university) {
            case "ТГУ" :
                return "images/tsu_logo.png"
            case "ТПУ" :
                return "images/tpu_logo.jpg"
            case "ТУСУР" :
                return "images/tusur_logo.jpg"
            default:
                return ""
        }
    },
    getSmallLogoByName(university) {
        switch (university) {
            case "ТГУ" :
                return "images/tsu_logo_small.png"
            case "ТПУ" :
                return "images/tpu_logo_small.jpg"
            case "ТУСУР" :
                return "images/tusur_logo_small.jpg"
            default:
                return ""
        }
    },
};

export default LogoUtil;
