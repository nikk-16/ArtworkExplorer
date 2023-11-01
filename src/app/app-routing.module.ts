import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayArtComponent } from 'src/shared/components/display-art/display-art.component';
import { DocumentationComponent } from 'src/shared/components/documentation/documentation.component';
import { FavouritesComponent } from 'src/shared/components/favourites/favourites.component';
import { HomeComponent } from 'src/shared/components/home/home.component';
import { ListArtworkComponent } from 'src/shared/components/list-artwork/list-artwork.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    { 
        path: 'art-collection', 
        component: ListArtworkComponent 
    },
    {
        path: 'artwork/:id',
        component: DisplayArtComponent
    },
    {
        path: 'favourites',
        component: FavouritesComponent
    },
    {
        path: 'docs',
        component: DocumentationComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
