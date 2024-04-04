import events from "events";
var eventEmitter = new events.EventEmitter();

//Create an event handler:
eventEmitter.on("notify", () => {
  console.log("Notification will be sent now");
});

eventEmitter.on("sendEmail", () => {
  console.log("Email will be sent now");
});

//Fire the 'scream' event:
eventEmitter.emit("notify");
eventEmitter.emit("sendEmail");



