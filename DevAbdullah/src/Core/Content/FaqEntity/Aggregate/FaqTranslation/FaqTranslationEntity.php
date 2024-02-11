<?php declare(strict_types=1);

namespace DevAbdullah\Core\Content\FaqEntity\Aggregate\FaqTranslation;

use Shopware\Core\Framework\DataAbstractionLayer\TranslationEntity;

class FaqTranslationEntity extends TranslationEntity
{
    protected string $faqId;
    protected string $question;
    protected string $answer;

    public function getFaqId(): string
    {
        return $this->faqId;
    }

    public function setFaqId(string $faqId): void
    {
        $this->faqId = $faqId;
    }

    public function getQuestion(): string
    {
        return $this->question;
    }

    public function setQuestion(string $question): void
    {
        $this->question = $question;
    }

    public function getAnswer(): string
    {
        return $this->answer;
    }

    public function setAnswer(string $answer): void
    {
        $this->answer = $answer;
    }
}
