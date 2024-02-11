<?php declare(strict_types=1);

namespace DevAbdullah\Core\Content\EmployeeEntity;

use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\CreatedAtField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\UpdatedAtField;

class EmployeeEntityDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'employee_entity';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getCollectionClass(): string
    {
        return EmployeeCollection::class;
    }

    public function getEntityClass(): string
    {
        return EmployeeEntity::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new PrimaryKey(), new Required()),
            new StringField('position', 'position'),
            new StringField('background_image', 'backgroundImage'),
            new StringField('profile_image', 'profileImage'),
            new StringField('html_text', 'htmlText'),
            new CreatedAtField(),
            new UpdatedAtField()
        ]);
    }
}
