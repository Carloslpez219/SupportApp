/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

const ticket = environment.ticket;
const util = environment.utilUrl;
const agregarFoto = environment.agregarFoto;
const agregarFirma = environment.agregarFirma;
const utilUrl = environment.utilUrl;

@Injectable({
  providedIn: 'root'
})
export class BPMService {

  datosUsuario;

  constructor( private http: HttpClient, private storage: Storage ) {}

  async conteoTickets<T>(fini, ffin, sede){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${ticket}conteo_ticket&usuario=${this.datosUsuario.codigo}&fini${fini}&ffin${ffin}&sede=${sede}`);
    return this.http.get<T>(`https://pruebas.disatel.app${ticket}conteo_ticket&usuario=${this.datosUsuario.codigo}&fini${fini}&ffin${ffin}&sede=${sede}`);
  }

  async listadoTickets<T>(status, fini, ffin, sede){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${ticket}listado_tickets_status&usuario=${this.datosUsuario.codigo}&status=${status}&fini${fini}&ffin${ffin}&sede=${sede}`);
    return this.http.get<T>(`https://pruebas.disatel.app${ticket}listado_tickets_status&usuario=${this.datosUsuario.codigo}&status=${status}&fini${fini}&ffin${ffin}&sede=${sede}`);
  }

  async getTicket<T>(codigo){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${ticket}ticket&codigo=${codigo}`);
    return this.http.get<T>(`https://pruebas.disatel.app${ticket}ticket&codigo=${codigo}`);
  }

  async getTicketsAsignados<T>(status, fini, ffin, prioridad, incidente, categoria){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${ticket}asignados&usuario=${this.datosUsuario.codigo}&categoria=${categoria}&incidente=${incidente}&prioridad=${prioridad}&status=${status}&fini=${fini}&ffin=${ffin}`);
    return this.http.get<T>(`https://pruebas.disatel.app${ticket}asignados&usuario=${this.datosUsuario.codigo}&categoria=${categoria}&incidente=${incidente}&prioridad=${prioridad}&status=${status}&fini=${fini}&ffin=${ffin}`);
  }

  async getMisTickets<T>(status, fini, ffin, prioridad, incidente, categoria){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${ticket}mis_tickets&usuario=${this.datosUsuario.codigo}&categoria=${categoria}&incidente=${incidente}&prioridad=${prioridad}&status=${status}&fini=${fini}&ffin=${ffin}`);
    return this.http.get<T>(`https://pruebas.disatel.app${ticket}mis_tickets&usuario=${this.datosUsuario.codigo}&categoria=${categoria}&incidente=${incidente}&prioridad=${prioridad}&status=${status}&fini=${fini}&ffin=${ffin}`);
  }

  async getSedes<T>(){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${util}lista_sedes&usuario=${this.datosUsuario.codigo}`);
    return this.http.get<T>(`https://pruebas.disatel.app${util}lista_sedes&usuario=${this.datosUsuario.codigo}`);
  }

  async getSectores<T>(){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${util}lista_sector`);
    return this.http.get<T>(`https://pruebas.disatel.app${util}lista_sector`);
  }

  async getAreas<T>(sede){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${util}lista_areas&usuario=${this.datosUsuario.codigo}&sede=${sede}`);
    return this.http.get<T>(`https://pruebas.disatel.app${util}lista_areas&usuario=${this.datosUsuario.codigo}&sede=${sede}`);
  }

  async getCategorias<T>(){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${util}lista_categorias_hd`);
    return this.http.get<T>(`https://pruebas.disatel.app${util}lista_categorias_hd`);
  }

  async getPrioridades<T>(){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${util}lista_prioridad_hd`);
    return this.http.get<T>(`https://pruebas.disatel.app${util}lista_prioridad_hd`);
  }

  async getIncidentes<T>(){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${util}lista_incidentes_hd`);
    return this.http.get<T>(`https://pruebas.disatel.app${util}lista_incidentes_hd`);
  }

  async guardarTicket<T>(descripcion, incidente, prioridad, sede, sector, area){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${ticket}grabar_ticket&usuario=${this.datosUsuario.codigo}&descripcion=${descripcion}&incidente=${incidente}&prioridad=${prioridad}&sede=${sede}&sector=${sector}&area=${area}`);
    return this.http.get<T>(`https://pruebas.disatel.app${ticket}grabar_ticket&usuario=${this.datosUsuario.codigo}&descripcion=${descripcion}&incidente=${incidente}&prioridad=${prioridad}&sede=${sede}&sector=${sector}&area=${area}`);
  }

  async getStatus<T>(){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${util}lista_status_hd&usuario=${this.datosUsuario.codigo}`);
    return this.http.get<T>(`https://pruebas.disatel.app${util}lista_status_hd&usuario=${this.datosUsuario.codigo}`);
  }

  async getActivos<T>(){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${util}lista_activos&usuario=${this.datosUsuario.codigo}&sede&sector&area=&combo=1`);
    return this.http.get<T>(`https://pruebas.disatel.app${util}lista_activos&usuario=${this.datosUsuario.codigo}&sede&sector&area=&combo=1`);
  }

  /////////////////////////////////////////////////

  async comentar<T>(comentario, codTicket){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${ticket}comentario&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&comment=${comentario}`);
    return this.http.get<T>(`https://pruebas.disatel.app${ticket}comentario&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&comment=${comentario}`);
  }

  async editar<T>(codTicket, descripcion, incidente, prioridad, sede, sector, area){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${ticket}modificar_ticket&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&descripcion=${descripcion}&incidente=${incidente}&prioridad=${prioridad}&sede=${sede}&sector=${sector}&area=${area}`);
    return this.http.get<T>(`https://pruebas.disatel.app${ticket}modificar_ticket&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&descripcion=${descripcion}&incidente=${incidente}&prioridad=${prioridad}&sede=${sede}&sector=${sector}&area=${area}`);
  }

  async cambiarStatus<T>(comentario, codTicket, status){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${ticket}cambiar_status&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&status=${status}&observacion=${comentario}`);
    return this.http.get<T>(`https://pruebas.disatel.app${ticket}cambiar_status&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&status=${status}&observacion=${comentario}`);
  }

  async agregarFalla<T>(codTicket, activo, falla, situacion, fecha, hora, comentario){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app${ticket}agregar_falla&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&activo=${activo}&falla=${falla}&situacion=${situacion}&fecha=${fecha}&hora=${hora}&comentario=${comentario}`);
    return this.http.get<T>(`https://pruebas.disatel.app${ticket}agregar_falla&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&activo=${activo}&falla=${falla}&situacion=${situacion}&fecha=${fecha}&hora=${hora}&comentario=${comentario}`);
  }

  async post<T>( codticket, status, file, comentario ){
    const fd = new FormData();
    console.log(file);
    fd.append('documento', file, file.name);
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://pruebas.disatel.app/ROOT/API/API_ticket_foto.php?&ticket=${codticket}&usuario=${this.datosUsuario.codigo}&status=${status}&comentario=${comentario}`, fd);
    return this.http.post(`https://pruebas.disatel.app/ROOT/API/API_ticket_foto.php?&ticket=${codticket}&usuario=${this.datosUsuario.codigo}&status=${status}&comentario=${comentario}`, file);
  }

  /*
  async getPreguntas<T>(revision, lista){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://${this.datosUsuario.dominio}${checListUrl}preguntas&revision=${revision}&lista=${lista}`);
    return this.http.get<T>(`https://${this.datosUsuario.dominio}${checListUrl}preguntas&revision=${revision}&lista=${lista}`);
  }

  async getCategorias<T>(){
    this.datosUsuario = await this.storage.get('datos');
    console.log(`https://${this.datosUsuario.dominio}${utilUrl}categorias&usuario=${this.datosUsuario.codigo}`);
    return this.http.get<T>(`https://${this.datosUsuario.dominio}${utilUrl}categorias&usuario=${this.datosUsuario.codigo}`);
  }

  async openTask<T>(lista, programacion, fecha, hora){
    this.datosUsuario = await this.storage.get('datos');
    // eslint-disable-next-line max-len
    return this.http.get<T>(`https://${this.datosUsuario.dominio}${checListUrl}new_revision&lista=${lista}&programacion=${programacion}&usuario=${this.datosUsuario.codigo}&fecha=${fecha}&hora=${hora}`);
  }

  async files<T>(revision){
    this.datosUsuario = await this.storage.get('datos');
    // eslint-disable-next-line max-len
    return this.http.get<T>(`https://${this.datosUsuario.dominio}${checListUrl}files_revision&revision=${revision}`);
  }

  async responder<T>(revision, lista, pregunta, respuesta){
    this.datosUsuario = await this.storage.get('datos');
    // eslint-disable-next-line max-len
    return this.http.get<T>(`https://${this.datosUsuario.dominio}${checListUrl}responder&revision=${revision}&lista=${lista}&pregunta=${pregunta}&respuesta=${respuesta}`);
  }

  async cerrarRevision<T>(revision, observaciones, fecha, hora){
    this.datosUsuario = await this.storage.get('datos');
    // eslint-disable-next-line max-len
    return this.http.get<T>(`https://${this.datosUsuario.dominio}${checListUrl}cerrar&revision=${revision}&observaciones=${observaciones}&fecha=${fecha}&hora=${hora}`);
  }

  async historiales<T>( desde, hasta, categoria){
    this.datosUsuario = await this.storage.get('datos');
    // eslint-disable-next-line max-len
    console.log(`https://${this.datosUsuario.dominio}${checListUrl}historiales&usuario=${this.datosUsuario.codigo}&desde=${desde}&hasta=${hasta}&categoria=${categoria}&tipo=1`);
    return this.http.get<T>(`https://${this.datosUsuario.dominio}${checListUrl}historiales&usuario=${this.datosUsuario.codigo}&desde=${desde}&hasta=${hasta}&categoria=${categoria}&tipo=1`);
  }

  async historialesSinCategoria<T>( desde, hasta){
    this.datosUsuario = await this.storage.get('datos');
    // eslint-disable-next-line max-len
    console.log(`https://${this.datosUsuario.dominio}${checListUrl}historiales&usuario=${this.datosUsuario.codigo}&desde=${desde}&hasta=${hasta}&tipo=1`);
    return this.http.get<T>(`https://${this.datosUsuario.dominio}${checListUrl}historiales&usuario=${this.datosUsuario.codigo}&desde=${desde}&hasta=${hasta}&tipo=1`);
  }

  async addPhoto<T>(file, revision){
    const fd = new FormData();
    fd.append('image', file);
    this.datosUsuario = await this.storage.get('datos');
    return this.http.post<T>(`https://${this.datosUsuario.dominio}${agregarFoto}&revision=${revision}`, fd);
  }

  async addSign<T>(file,  revision){
    const fd = new FormData();
    fd.append('image', file);
    this.datosUsuario = await this.storage.get('datos');
    return this.http.post<T>(`https://${this.datosUsuario.dominio}${agregarFirma}&revision=${revision}`, fd);
  }

    */
}
