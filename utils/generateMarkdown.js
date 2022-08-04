// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
class markDown1 {

    static renderLicenseBadge(license) {
     const badge = {
       None:'', 
       Apache_License_2: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
       GNU_General_Public_License_v3:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
       MIT_License:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
       BSD_2_Clause_Simplified_License:'[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)', 
       BSD_3_Clause_New_or_revised_License:'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
       Boost_Software_License_1:'[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', 
       Creative_Commons_Zero_v1_Universal:'[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)', 
       Eclipse_Public_License_2:'[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
       GNU_Affero_General_Public_License_v3:'[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)', 
       GNU_General_Public_License_v2:'[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)', 
       GNU_Lesser_General_Public_License_v3:'[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
       Mozilla_Public_License_2:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 
       The_Unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
   
     }
     return badge[license]
   }
   
   // TODO: Create a function that returns the license link
   // If there is no license, return an empty string
    static renderLicenseLink(license) {
     const links = {
       None:'', 
       Apache_License_2: '[Apache](https://opensource.org/licenses/Apache-2.0)', 
       GNU_General_Public_License_v3:'[GNU](https://www.gnu.org/licenses/gpl-3.0)',
       MIT_License:'[MIT](https://opensource.org/licenses/MIT)', 
       BSD_2_Clause_Simplified_License:'[BSD-2](https://opensource.org/licenses/BSD-2-Clause)', 
       BSD_3_Clause_New_or_revised_License:'[BSD-3](https://opensource.org/licenses/BSD-3-Clause)',
       Boost_Software_License_1:'[Boost](https://www.boost.org/LICENSE_1_0.txt)', 
       Creative_Commons_Zero_v1_Universal:'[Creative Commons](http://creativecommons.org/publicdomain/zero/1.0/)', 
       Eclipse_Public_License_2:'[Eclipse 2.0](https://opensource.org/licenses/EPL-1.0)',
       GNU_Affero_General_Public_License_v3:'[GNU gnpl 3.0](https://www.gnu.org/licenses/agpl-3.0)', 
       GNU_General_Public_License_v2:'[GNU gnpl 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)', 
       GNU_Lesser_General_Public_License_v3:'[GNU lgpl 3.0](https://www.gnu.org/licenses/lgpl-3.0)',
       Mozilla_Public_License_2:'[Mozilla public 2.0](https://opensource.org/licenses/MPL-2.0)', 
       The_Unlicense: '[Unlicense](http://unlicense.org/)'
   
     }
     return links[license]
   };
   
   // TODO: Create a function that returns the license section of README
   // If there is no license, return an empty string
   static renderLicenseSection(license) {
     if(license) {
       return `Licensed under the ${this.renderLicenseLink(license)} license`
     } else {
       return ''
     }
   }
   
   // TODO: Create a function to generate markdown for README
   static generateMarkdown(data) {
     return `# ${data.title}
   
     ${this.renderLicenseBadge(data.license)}
   
   ## Table of contents
   - [Description](#Description)
   - [Usage](#Usage)
   - [Install](#Install)
   - [Contribution](#Contribution)
   - [Test](#Test)
   - [Questions](#Questions)
   - [License](#License)
   
   ## Description
   ${data.description}
   
   ## Usage
   ${data.usage}
   
   ## Installation
   ${data.install}
   
   ## Contributions
   ${data.contribution}
   
   ## Test
   ${data.test}
     
   ## Questions
   ${data.github}
   ${data.email}
   
   ## Licenses
   ${this.renderLicenseSection(data.license)}
     
   
   `;
   }
   }
   
   module.exports = markDown1;