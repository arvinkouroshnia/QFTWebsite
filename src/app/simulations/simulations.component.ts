import { Component } from '@angular/core';

@Component({
  selector: 'app-simulations',
  templateUrl: './simulations.component.html',
  styleUrls: ['./simulations.component.scss'],
})
export class SimulationsComponent {
  diagram = {
    title: 'T-channel Bhabha scattering',
    width: 500,
    height: 500,
    lang: 'latex',
    diagram: [
      'fmftop{i1,i2}',
      'fmfbottom{o1,o2}',
      'fmf{fermion}{i2,v1,i1}',
      'fmf{fermion}{o2,v2,o1}',
      "fmf{photon,labelx=-10,label=$\\underline{D_{\\mu\\nu}^\\gamma}$}{v1,v2}",
      'fmf{photon}{v1,v2}',
      'fmfdot{v1,v2}',
      "fmflabel{i2,labelx=0,labely=-20}{$v_4,e^+$}",
      "fmflabel{i1,labely=-23,labelx=-27}{$\\overline{u_1},e^-$}",
      'fmflabel{o2}{$\\overline{v}_2,e^+$}',
      'fmflabel{o1,labelx=-27,labely=-4}{$u_1,e^-$}',
    ],    
}

diagram2={
  "title"      : "S-channel Bhabha scattering",
  "width"      : 500,
  "height"     : 500,
  diagram: [
    'fmfleftn{2}',
      'fmfrightn{2}',
      'fmf{fermion}{o1,v4, o2}',
      'fmf{fermion}{i2,v3, i1}',
      'fmf{photon}{v3,v4}',
      'fmf{photon,labelx=-10,label=$\\underline{D_{\\mu\\nu}^\\gamma}$}{v3,v4}'

  ],
}
diagram3={
  "title"      : "S-channel Bhabha scattering",
  "width"      : 500,
  "height"     : 500,
  diagram: [
    'fmfleftn{2}',
      'fmfrightn{2}',
      'fmf{fermion}{o1,v4, o2}',
      'fmf{fermion}{i2,v3, i1}',
      'fmf{photon}{v3,v4}',
      'fmf{photon,labelx=-10,label=$\\underline{D_{\\mu\\nu}^\\gamma}$}{v3,v4}'

  ],
}





}
