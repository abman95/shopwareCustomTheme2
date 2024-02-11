<?php declare(strict_types=1);

namespace DevAbdullah\Core\Content\EmployeeEntity;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

class EmployeeCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return EmployeeEntity::class;
    }
}