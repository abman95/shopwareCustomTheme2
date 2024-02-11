<?php declare(strict_types=1);

namespace DevAbdullah\Core\Content\EmployeeEntity\Aggregate\EmployeeTranslation;

use DevAbdullah\Core\Content\EmployeeEntity\EmployeeEntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityTranslationDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;

class EmployeeTranslationDefinition extends EntityTranslationDefinition
{
    public const ENTITY_NAME = 'employee_translation';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getParentDefinitionClass(): string
    {
        return EmployeeEntityDefinition::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new StringField('question', 'question'))->addFlags(new Required()),
            (new StringField('answer', 'answer'))->addFlags(new Required()),
        ]);
    }
}
