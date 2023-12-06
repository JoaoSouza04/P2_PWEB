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
public class ProdutoController {

  @Autowired
  ProdutoRepository repository;

  @PostMapping("/api/produto")
  public ResponseEntity<String> gravar(@RequestBody ProdutoEntity obj) {
    repository.save(obj);
    String mensagem = "O Produto foi registrado com sucesso ! " + obj.getSabor();
    return ResponseEntity.ok(mensagem);
  }

  @PutMapping("/api/produto")
  public ResponseEntity<String> alterar(@RequestBody ProdutoEntity obj) {
    repository.save(obj);
    String mensagem = "O Produto foi alterado com sucesso ! " + obj.getSabor();
    return ResponseEntity.ok(mensagem);
  }

  @GetMapping("/api/produto/{codigo}")
  public ResponseEntity<ProdutoEntity> carregar(@PathVariable int codigo) {
    Optional<ProdutoEntity> obj = repository.findById(codigo);
    if (obj.isPresent())
      return ResponseEntity.ok(obj.get());
    else
      return ResponseEntity.ok(new ProdutoEntity());
  }

  @DeleteMapping("/api/produto/{codigo}")
  public ResponseEntity<String> remover(@PathVariable int codigo) {
    repository.deleteById(codigo);
    String mensagem = "O Produto foi removido com sucesso " + codigo;
    return ResponseEntity.ok(mensagem);
  }

  // Listar todos os produtos
  @GetMapping("/api/produto")
  public ResponseEntity<List<ProdutoEntity>> listar() {
    List<ProdutoEntity> lista = repository.findAll();
    return ResponseEntity.ok(lista);
  }
}
