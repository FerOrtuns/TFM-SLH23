import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  constructor(private fb: FormBuilder,
              private router: Router,
              private authService : AuthService){}

  
  miForm : FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]],
  })
  
  register(){
    

    const {  name, email, password } = this.miForm.value;

    this.authService.registro( name, email, password )
    .subscribe( ok =>{
  
      if(ok === true){
  
        
        Swal.fire('Creado correctamente', 'ya puede logarse en la app', 'success');

        this.router.navigateByUrl('/auth/login');
      }else{

  
        Swal.fire('Error', ok, 'error');
        
      }
      
    })
      
    
    
  }
  
}
