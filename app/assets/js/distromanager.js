const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Old WesterosCraft url.
exports.REMOTE_DISTRO_URL = 'https://raw.githubusercontent.com/clementino29/skra-distribution/refs/heads/main/distribution.json'
//exports.REMOTE_DISTRO_URL = 'https://drive.google.com/uc?export=download&id=1bjSUzsHqZLgv9Ozheg4C0w6cSzELJNVj'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api