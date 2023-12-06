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
public class ClienteController {
    @Autowired
    ClienteRepository repository;

    @PostMapping("/api/cliente")
    public ResponseEntity<String> gravar(@RequestBody ClienteEntity obj) {
        repository.save(obj);
        String mensagem = "Cliente gravado com sucesso" + obj.getNome();
        return ResponseEntity.ok(mensagem);
    }

    @PostMapping("/api/cliente/login")
    public LoginResponseEntity verificarLogin(@RequestBody ClienteEntity obj) {
        ClienteEntity clienteExistente = repository.findOneByEmail(obj.getEmail());
        String mensagem;
        if (clienteExistente == null) {
            mensagem = "Cliente não encontrado";
        } else {
            String cliente1 = clienteExistente.getSenha();
            String cliente2 = obj.getSenha();
            if (!cliente1.equals(cliente2)) {
                mensagem = "Senha inválida, digite novamente!";
            } else {
                mensagem = "Login realizado com sucesso";
            }
        }
        return new LoginResponseEntity(mensagem);
    }

    @PostMapping("/api/cliente/esqueci")
    public LoginResponseEntity verificarEsqueci(@RequestBody ClienteEntity obj) {
        ClienteEntity clienteExistente = repository.findOneByEmail(obj.getEmail());
        String mensagem;
        if (clienteExistente == null) {
            mensagem = "Cliente não encontrado";
        } else {
            mensagem = "Formulário de senha enviado para o email " + clienteExistente.getEmail();
        }
        return new LoginResponseEntity(mensagem);
    }

    @PutMapping("/api/cliente")
    public ResponseEntity<String> alterar(@RequestBody ClienteEntity obj) {
        repository.save(obj);
        String mensagem = "Cliente alterado com sucesso " + obj.getNome();
        return ResponseEntity.ok(mensagem);
    }

    @GetMapping("/api/cliente/{codigo}")
    public ResponseEntity<ClienteEntity> carregar(@PathVariable int codigo) {
        Optional<ClienteEntity> obj = repository.findById(codigo);
        if (obj.isPresent())
            return ResponseEntity.ok(obj.get());
        else
            return ResponseEntity.ok(new ClienteEntity());
    }

    @DeleteMapping("/api/cliente/{codigo}")
    public ResponseEntity<String> apagar(@PathVariable int codigo) {
        repository.deleteById(codigo);
        String mensagem = "cliente removido com sucesso " + codigo;
        return ResponseEntity.ok(mensagem);
    }

    @GetMapping("/api/clientes")
    public ResponseEntity<List<ClienteEntity>> listar() {
        List<ClienteEntity> lista = repository.findAll();
        return ResponseEntity.ok(lista);
    }

}
