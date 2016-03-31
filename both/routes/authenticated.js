const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated'
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

authenticatedRoutes.route( '/chat/:channel', {
  name: 'chat',
  action() {
    BlazeLayout.render( 'default', { yield: 'chat' } );
  }
});

authenticatedRoutes.route( '/events', {
  name: 'events',
  action() {
    BlazeLayout.render( 'default', { yield: 'events' } );
  }
});