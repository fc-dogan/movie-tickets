function TicketStore () {
  this.tickets = [];
  this.currentId = 0;
}

function Ticket(movie, time, age) {
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

var ticketPrice = function(){
  if (18<age<60){
    if(time === "morning") {
      return "$8"
    } else if (time === "noon"){
      return "$10"
    } else if ( time === "night"){
      return "$12"
    }
  } else {
    if( time === "morning"){
      return "$7"
    }else if( time === "noon"){
      return "$9"
    } else if ( time === "night") {
      return "$11"
    }
  }
}

// User Interface Logic
var ticketStore = new TicketStore();

function displayTicketDetails(ticketDetailsToDisplay){
  var ticketsList = $("#ticket-info").append("your movie is " + tickets.movie + " at " + tickets.time + ". The price is " + ticketPrice);
}

console.log(ticketStore);

$(document).ready(function() {
$("form").submit(function(event){
  event.preventDefault();

  var movie = $("select#movie").val();
  var time = $("select#time").val();
  var age = parseInt($("input#age").val());

  $("select#movie").val("");
  $("select#time").val("");
  $("input#age").val("");

  var newTicket = new Ticket(movie, time, age);
  ticketStore.addTicket(newTicket);
  displayTicketDetails(ticketStore);
});
});