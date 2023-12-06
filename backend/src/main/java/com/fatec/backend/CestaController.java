package com.fatec.backend;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class CestaController {
  @Autowired
  CestaRepository repository;

  @PostMapping("/api/cesta")
  public ResponseEntity<String> gravar(@RequestBody CestaEntity obj) {
    repository.save(obj);
    String mensagem = "A Cesta foi criada com sucesso ! " + obj.getCodigoProduto();
    return ResponseEntity.ok(mensagem);
  }

  @PutMapping("/api/cesta")
  public ResponseEntity<String> alterar(@RequestBody CestaEntity obj) {
    repository.save(obj);
    String mensagem = "A Cesta foi alterada com sucesso ! " + obj.getCodigoProduto();
    return ResponseEntity.ok(mensagem);
  }

  @GetMapping("/api/cesta/{codigo}")
  public ResponseEntity<CestaEntity> carregar(@PathVariable int codigo) {
    Optional<CestaEntity> obj = repository.findById(codigo);
    if (obj.isPresent())
      return ResponseEntity.ok(obj.get());
    else
      return ResponseEntity.ok(new CestaEntity());
  }

  @DeleteMapping("/api/cesta/{codigo}")
  public ResponseEntity<String> remover(@PathVariable int codigo) {
    repository.deleteById(codigo);
    String mensagem = "A Cesta foi removida com sucesso " + codigo;
    return ResponseEntity.ok(mensagem);
  }

  @DeleteMapping("/api/cesta")
  public ResponseEntity<String> remover() {
    List<CestaEntity> carrinho = repository.findAll();
    for (CestaEntity cesta : carrinho) {
      repository.delete(cesta);
    }
    String message = "Todos os produtos foram removidos com sucesso.";
    return ResponseEntity.ok(message);
  }

  // Listar todas as cestas
  @GetMapping("/api/cesta")
  public ResponseEntity<List<CestaEntity>> listar() {
    List<CestaEntity> lista = repository.findAll();
    return ResponseEntity.ok(lista);
  }
}
