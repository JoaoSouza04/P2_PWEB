package com.fatec.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "produto")
public class ProdutoEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int codigo;
  private String sabor;
  private String tamanho;
  private double preco;
  private String descricao;
  private int quantidade;


  public int getCodigo() {
    return codigo;
  }

  public void setCodigo(int codigo) {
    this.codigo= codigo;
  }

  public String getSabor() {
    return sabor;
  }

  public void setSabor(String Sabor) {
    this.sabor = Sabor;
  }

  public String getTamanho() {
    return tamanho;
  }

  public void setTamanho(String Tamanho) {
    this.tamanho = Tamanho;
  }

  public double getPreco() {
    return preco;
  }

  public void setPreco(double Preco) {
    this.preco = Preco;
  }

  public String getDescricao() {
    return descricao;
  }

  public void setDescricao(String Descricao) {
    this.descricao = Descricao;
  }

  public int getQuantidade() {
    return quantidade;
  }

  public void setQuantidade(int Quantidade) {
    this.quantidade = Quantidade;
  }
}
