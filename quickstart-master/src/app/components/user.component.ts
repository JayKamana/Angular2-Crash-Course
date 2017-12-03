import { Component } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: `user.component.html`,
  providers: [PostService]
})
export class UserComponent  {

	name: string;
	email: string;
	address: address;
	hobbies: string[];
	showHobbies: boolean;
	posts: Post[];

	constructor(private postService: PostService){
		this.name = "Sam Smith";
		this.email = "jaykamana@gmail.com";
		this.address = {
			street: "123 road",
			city: "Dade County",
			state: "Florida"
		}
		this.hobbies = ["Music", "Movies", "Sports"];
		this.showHobbies = true;

		this.postService.getPosts().subscribe(posts => {
			this.posts = posts;
		})
	}

	toggleHobbies(){
		this.showHobbies = !this.showHobbies;
	}

	addHobby(hobby){
		this.hobbies.push(hobby);
	}

	deleteHobby(index){
		this.hobbies.splice(index, 1);
	}

}

interface address {
	street: string;
	city: string;
	state: string;
}

interface Post {
	id: number;
	title: string;
	body: string;
}