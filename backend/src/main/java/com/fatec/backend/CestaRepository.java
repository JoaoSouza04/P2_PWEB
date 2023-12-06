package com.fatec.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CestaRepository
    extends JpaRepository<CestaEntity, Integer>,
    JpaSpecificationExecutor<CestaEntity> {

}