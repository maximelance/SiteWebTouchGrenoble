/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*adresse mail du type : prenom.nom@reste
 */

function genereadresse(prenom,nom,reste) {
  document.write("<a href=" + "mail" + "to:" + reste  + "@" + nom + "." + prenom + ">" + reste  + "@" + nom + "." + prenom + "</a>");
}

/*adresse mail du type : prenom@reste
 */

function genereadresse2(prenom,reste) {
  document.write("<a href=" + "mail" + "to:" + reste + "@" + prenom + ">" + reste + "@" + prenom + "</a>");
}


