// For more information see: http://emberjs.com/guides/routing/

EasyProposal.Router.map(function() {
  this.resource("proposals", function() {
    this.resource("proposal", { path: ":docId" });
  });
});
