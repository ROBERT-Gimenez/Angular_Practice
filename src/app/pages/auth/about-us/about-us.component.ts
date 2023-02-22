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
      info: 'Facundo Ortega',
      linkedin:"",
      github:""
    },
    {
      name: 'Tamara savoini ',
      photoUrl: 'https://media.licdn.com/dms/image/C4E03AQHVmmgRvmQE7g/profile-displayphoto-shrink_800_800/0/1612061300829?e=1682553600&v=beta&t=R_aXx4Vsk4S2gV2nF9sykxaWkZnjna-dYHn4XpxjTY0',
      info: 'Tamara savoini',
      linkedin:"",
      github:""
    },
    {
      name: 'Lucas Alegre ',
      photoUrl: 'https://media.licdn.com/dms/image/D4D35AQErQv1uQlKdEQ/profile-framedphoto-shrink_400_400/0/1672354621317?e=1677636000&v=beta&t=vK4KiOAcSc4IbjHDMDeHW7hAHMhfyMYiB88KBQhWtDM',
      info: 'Lucas Alegre',
      linkedin:"",
      github:""
    },
    {
      name: 'Luciano Aguilar ',
      photoUrl: 'https://media.licdn.com/dms/image/C5603AQENZ5ru2jSk8A/profile-displayphoto-shrink_800_800/0/1635217536782?e=1682553600&v=beta&t=yO0Rv0MjQK74JZDKUH-f30Zbt1IB1IdfOsrVqF_vfvs',
      info: 'Luciano Aguilar',
      linkedin:"",
      github:""
    },
    {
      name: 'Robert Gimenez ',
      photoUrl: 'https://media.licdn.com/dms/image/C4D03AQGDVhprfnT6bQ/profile-displayphoto-shrink_400_400/0/1655420056858?e=1682553600&v=beta&t=C03nAu1aqe6EZ3p_YSfrwRfZev8tg8N_pFRzRfhgSXc',
      info: 'Robert Gimenez',
      linkedin:"",
      github:""
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
