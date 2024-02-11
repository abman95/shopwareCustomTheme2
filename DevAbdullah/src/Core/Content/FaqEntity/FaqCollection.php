<?php declare(strict_types=1);

namespace DevAbdullah\Core\Content\FaqEntity;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

class FaqCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return FaqEntity::class;
    }
}