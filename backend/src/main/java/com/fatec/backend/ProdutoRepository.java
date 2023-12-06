package com.fatec.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ProdutoRepository
        extends JpaRepository<ProdutoEntity, Integer>,
        JpaSpecificationExecutor<ProdutoEntity> {

}