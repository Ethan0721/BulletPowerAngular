
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BooksComponent } from './books/books.component';
import { BookService } from './service/book.service';
import { BooksFilterComponent } from './books/books-filter.component';
import { BookFormComponent } from './admin/book-form/book-form.component';
import { CategoryService } from './service/category.service';

import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselConfig} from './books/books-carousel.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BooksComponent,
    HomeComponent,
    BooksFilterComponent,
    AdminComponent,
    BookFormComponent,
    NgbdCarouselConfig
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    //HttpClient,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'books', component: BooksComponent },
      { path: 'login', component: LoginComponent }
    //   { path: 'shoppingcart', component: ShoppingCartComponent },

    //   { path: 'about', component: AboutUsComponent },
    //   { path: 'contact', component: ContactUsComponent },
    //   { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuard] },
    //   { path: 'ordersuccess', component: OrderSuccessComponent, canActivate: [AuthGuard] },
    //   { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },

    //   { path: 'admin/books/new', component: BookFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    //   { path: 'admin/books/:bookid', component: AdminBookDetailsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    //   { path: 'admin/books', component: AdminBooksComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    //   { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    //   { path: '**', component: NotFoundComponent }
     ])
    
  ],
  providers: [
    CategoryService,
    BookService,
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
