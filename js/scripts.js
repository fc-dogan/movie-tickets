function TicketStore () {
  this.tickets = [];
  this.currentId = 0;
  this.currentPrice = 10
}

function Tickets(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;

}

TicketStore.prototype.addTicket = function(ticket){
  ticket.id = this.assignId();
  this.tickets.push(ticket);  
}

TicketStore.prototype.assignId = function(){
  this.currentId +=1;
  return this.currentId;
}

TicketStore.prototype.assignPrice = function() {
   
    if (18<age<60){
      if(time === "morning") {
        return this.curentPrice -= 2;
      } else if (time === "noon"){
        return this.curentPrice; 
      } else if ( time === "night"){
        return this.currentPrice +=2;
      }
    } else {
      if( time === "morning"){
        return this.curentPrice -= 3;
      }else if( time === "noon"){
        return this.currentPrice -= 1;
      } else if ( time === "night") {
        return this.currentPrice += 1;
      }
    }
    ticket.price = this.assignPrice();
}

// User Interface Logic
var ticketStore = new TicketStore();

function displayTicketDetails(ticketDetailsToDisplay){
  var ticketsList = $("#ticket-info");
  var htmlForTicketInfo = "";
  ticketDetailsToDisplay.tickets.forEach(function(ticket){
    htmlForTicketInfo + "Your movie is " + ticket.movie + " at " + ticket.time + ". The price is " + ticket.price
  });
  ticketsList.html(htmlForTicketInfo);
}

console.log(ticketStore);

$(document).ready(function() {
$("form").submit(function(event){
  event.preventDefault();

  var movie = $("#movie").val();
  var time = $("#time").val();
  var age = parseInt($("input#age").val());

  $("select#movie").val("");
  $("select#time").val("");
  $("input#age").val("");

  var newTicket = new Tickets(movie, time, age);
  ticketStore.addTicket(newTicket);
  displayTicketDetails(ticketStore);
});
});