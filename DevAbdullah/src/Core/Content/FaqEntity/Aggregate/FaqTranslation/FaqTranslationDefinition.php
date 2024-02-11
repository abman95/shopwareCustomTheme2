<?php declare(strict_types=1);

namespace DevAbdullah\Core\Content\FaqEntity\Aggregate\FaqTranslation;

use AbmanTheme\Core\Content\FaqEntity\FaqEntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityTranslationDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;

class FaqTranslationDefinition extends EntityTranslationDefinition
{
    public const ENTITY_NAME = 'faq_translation';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getParentDefinitionClass(): string
    {
        return FaqEntityDefinition::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new StringField('question', 'question'))->addFlags(new Required()),
            (new StringField('answer', 'answer'))->addFlags(new Required()),
        ]);
    }
}
