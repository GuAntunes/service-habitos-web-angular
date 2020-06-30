import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MetasService } from '../metas.service';
import { map, switchMap } from 'rxjs/operators';
import { AlertToastService } from 'src/app/shared/alert-toast.service';

@Component({
  selector: 'app-meta-form',
  templateUrl: './meta-form.component.html',
  styleUrls: ['./meta-form.component.css'],
})
export class MetaFormComponent implements OnInit {
  form: FormGroup;
  objetivoId: string;

  constructor(
    private route: ActivatedRoute,
    private service: MetasService,
    private fb: FormBuilder,
    private router: Router,
    private toast: AlertToastService
  ) {}

  ngOnInit(): void {
    this.objetivoId = this.route.snapshot.queryParamMap.get('objetivo');
    if (!this.objetivoId) {
      this.route.params
        .pipe(
          map((params: any) => params['id']),
          switchMap((id) => {
            return this.service.findOne(id);
          })
        )
        .subscribe((meta) => this.updateForm(meta));
    }

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
      objetivo: [this.objetivoId],
    });
  }

  updateForm(meta) {
    console.log(`Meta ${meta}`);
    this.form.patchValue({
      id: meta.id,
      nome: meta.nome,
      descricao: meta.descricao,
      objetivo: meta.objetivo,
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.service.save(this.form.value).subscribe(
        (success) => {
          this.toast.showAlertSuccess('Meta criado/alterado com sucesso!');
          console.log(this.form);
          this.router.navigate(['/metas'], {
            queryParams: { objetivo: this.form.controls['objetivo'].value },
          });
        },
        (error) =>
          this.toast.showAlertDanger(
            'Erro ao criar/alterar meta, tente novamente!'
          )
      );
    }
  }
}
