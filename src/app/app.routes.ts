import { Routes } from '@angular/router';

import { HomeRoutes } from './components/home/home.routes';
import { LoginRoutes } from './components/login/login.routes';
import { RegisterRoutes } from './components/register/register.routes';
import { AlbumRoutes } from './components/albums/album.routes';
import { CommentRoutes } from './components/comments/comment.routes';
import { PhotoRoutes } from './components/photos/photo.routes';
import { PostRoutes } from './components/posts/post.routes';
import { TodoRoutes } from './components/todos/todo.routes';
import { UserRoutes } from './components/users/user.routes';
import { ErrorRoutes } from './components/errors/error.routes';


export const routes: Routes = [
  ...HomeRoutes,
  ...LoginRoutes,
  ...RegisterRoutes,
  ...AlbumRoutes,
  ...CommentRoutes,
  ...PhotoRoutes,
  ...PostRoutes,
  ...TodoRoutes,
  ...UserRoutes,
  ...ErrorRoutes
];
