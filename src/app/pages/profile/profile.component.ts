import { Component } from '@angular/core';

@Component({
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  infoDresseur: any = {
    nom: 'LY',
    prenom: 'Khun',
    photo: 'https://scontent.fcrl2-1.fna.fbcdn.net/v/t1.18169-1/14881_10153911130430456_1858040691_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mUNskCz54lcAX9Qd5Yv&_nc_ht=scontent.fcrl2-1.fna&oh=00_AfBwwHrAxI4zjaW_wDZtSaUhDNnPOSqnageSEz3UM66NMA&oe=66223A2C',
    dateNaissance: '1982-05-06',
    profession: 'developpeur',
    badges: [
      'https://www.pokepedia.fr/images/a/ab/Badge_Roche_Kanto_LGPE.png',
      'https://www.pokepedia.fr/images/6/67/Badge_Cascade_Kanto_LGPE.png',
      'https://www.pokepedia.fr/images/9/97/Badge_Foudre_Kanto_LGPE.png',
    ]
  } 
}
