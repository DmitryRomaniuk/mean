// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloModule, Apollo } from 'apollo-angular';
//
// @NgModule({
//   imports: [
//     // ... other modules
//     HttpClientModule,
//     HttpLinkModule,
//     ApolloModule
//   ]
// })
// class AppModule {
//   constructor(
//     apollo: Apollo,
//     httpLink: HttpLink
//   ) {
//     apollo.create({
//       link: httpLink.create({ uri: '/api/graphql' }),
//       cache: new InMemoryCache()
//     });
//   }
// }
