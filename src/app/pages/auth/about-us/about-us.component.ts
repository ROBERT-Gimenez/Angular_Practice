import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  viewInfo:boolean = false
  selectedUser: any;
  users = [
    {
      name: 'Facundo Ortega',
      photoUrl: 'https://media.licdn.com/dms/image/C4D03AQGlZseB99madw/profile-displayphoto-shrink_400_400/0/1659461230437?e=1682553600&v=beta&t=WkxvWMMrNKlP-IzecQhJDW6PmrybGs2YBG4KEl9lGNQ',
      info: 'Holaa buenas a todos, Me presento, Me llamo Facundo Ortega.Soy un apasionado por la programación y a la tecnología, me gusta mucho mantener un código limpio y legible. Actualmente mis conocimientos se basan principalmente en front-end con angular. Dentro del framework se utilizar RXJS e implementar NRGX.Actualmente me encuentro estudiando programación web en la universidad de la matanza , en paralelo fui elegido por Finnegans y Alkemy para poder participar en su Bootcamp, donde nos encontramos desarrollando una wallet digital.',
      linkedin:"https://www.linkedin.com/in/facu-ortega/",
      github:"https://github.com/Facu02"
    },
    {
      name: 'Tamara savoini ',
      photoUrl: 'https://media.licdn.com/dms/image/C4E03AQHVmmgRvmQE7g/profile-displayphoto-shrink_800_800/0/1612061300829?e=1682553600&v=beta&t=R_aXx4Vsk4S2gV2nF9sykxaWkZnjna-dYHn4XpxjTY0',
      info: "Estudiante de Licenciatura en Sistemas 📚 y Desarrolladora Full Stack💻 .Poseo experiencia en desarrollo frontend con Angular🅰️ React 🌐, backend con Nodejs 🖥️, CI/CD con Gitlab 🦊 y Docker 🐳Entusiasta del aprendizaje continuo 😊.",
      linkedin:"https://www.linkedin.com/in/tamara-savoini-lavarda/",
      github:"https://github.com/TamaraSavoiniLavarda"
    },
    {
      name: 'Lucas Alegre ',
      photoUrl: 'https://media.licdn.com/dms/image/D4D35AQG3nem9RsC_Ww/profile-framedphoto-shrink_400_400/0/1672882471282?e=1677639600&v=beta&t=HGgAV7z_MS7WTLjLtYxFDw-uWuJ_1dQ2esV9tLCScgQ',
      info: '👋 Buenas! Soy Lucas, un estudiante de la Licenciatura en Informática de la Universidad Nacional del Oeste',
      linkedin:"https://www.linkedin.com/in/lucas-agustin-tolosa-47671a221/",
      github:"https://github.com/Lucas-Tolosa"
    },
    {
      name: 'Luciano Aguilar ',
      photoUrl: 'https://media.licdn.com/dms/image/C5603AQENZ5ru2jSk8A/profile-displayphoto-shrink_800_800/0/1635217536782?e=1682553600&v=beta&t=yO0Rv0MjQK74JZDKUH-f30Zbt1IB1IdfOsrVqF_vfvs',
      info: '¡Hola! Soy estudiante de Lic. de Sistemas en la Universidad Nacional de Entre Ríos, actualmente estoy cursando el tercer año.Tengo conocimientos en tecnologías como Javascript, Java, SQL, HTML5, CSS.Soy una persona responsable, motivado siempre a mejorar y aprender tecnologías nuevas.Mi objetivo es formarme como Programador Web Full Stack.',
      linkedin:"https://www.linkedin.com/in/luciano-aguilar-4bbb4a200/",
      github:"https://github.com/LucianoAguilar21"
    },
    {
      name: 'Robert Gimenez ',
      photoUrl: 'https://media.licdn.com/dms/image/C4D03AQGDVhprfnT6bQ/profile-displayphoto-shrink_400_400/0/1655420056858?e=1682553600&v=beta&t=C03nAu1aqe6EZ3p_YSfrwRfZev8tg8N_pFRzRfhgSXc',
      info: '👋 Buenas!Me llamo Robert , soy Programador web Full Stack💻.Me mantengo Activo siempre con ganas de crecer , capacitándome constantemente y aprendiendo nuevas tecnologías y lenguajes , soy una persona autodidacta y sin miedo a los desafios.',
      linkedin:"https://www.linkedin.com/in/robert-gimenez-32b87b229/",
      github:" https://github.com/ROBERT-Gimenez"
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  showUserInfo(user:any) {
    this.selectedUser = user;
  }
  hideUserInfo() {
    this.selectedUser = null;
  }
}
