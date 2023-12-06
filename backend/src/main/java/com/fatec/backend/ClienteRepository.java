package com.fatec.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ClienteRepository
        extends JpaRepository<ClienteEntity, Integer>,
        JpaSpecificationExecutor<ClienteEntity> {
    ClienteEntity findOneByEmail(String email);
}
