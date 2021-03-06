import { AlertToastService } from './../../shared/alert-toast.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ObjetivosService } from './../objetivos.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-objetivo-form',
  templateUrl: './objetivo-form.component.html',
  styleUrls: ['./objetivo-form.component.css'],
})
export class ObjetivoFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ObjetivosService,
    private route: ActivatedRoute,
    private toast: AlertToastService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => {
          return this.service.findOne(id);
        })
      )
      .subscribe((objetivo) => this.updateForm(objetivo));

    this.form = this.fb.group({
      id: [null],
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
      descricao: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(500),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(
        (success) => {
          this.toast.showAlertSuccess('Objetivo criado/alterado com sucesso!');
          this.router.navigate(['/objetivos']);
        },
        (error) =>
          this.toast.showAlertDanger(
            'Erro ao criar/alterar objetivo, tente novamente!'
          )
      );
    }
  }

  updateForm(objetivo) {
    this.form.patchValue({
      id: objetivo.id,
      nome: objetivo.nome,
      descricao: objetivo.descricao,
    });
  }
}
