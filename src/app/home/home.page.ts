import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public alertController: AlertController;
  
  constructor(alert: AlertController) {
    this.alertController = alert;
  }

  // Método assíncrono que retorna uma promisse do tipo void (não retorna nada) que cria e exibe um alerta quando o botão for clicado
  async presentAlert(): Promise<void> {
    // Cria o alerta e define suas propriedades.
    const alerta = await this.alertController.create({
      header: 'Teste de alerta criado com promise!',
      message: 'Alerta exibido com sucesso... E olha que eu nem esperei tanto assim. :)',
      buttons: ['fechar']
    });

    // Exibe o alerta quando o método principal for chamado
    alerta.present();
  }

}
