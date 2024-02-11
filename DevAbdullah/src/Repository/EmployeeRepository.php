<?php

namespace DevAbdullah\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use DevAbdullah\Entity\EmployeeEntity;

class EmployeeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EmployeeEntity::class);
    }

    public function findAll(): array
    {
        return $this->createQueryBuilder('e')
            ->getQuery()
            ->getResult();
    }
}
