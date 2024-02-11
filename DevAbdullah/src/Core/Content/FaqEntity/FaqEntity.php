<?php declare(strict_types=1);

namespace DevAbdullah\Core\Content\FaqEntity;

use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;

class FaqEntity extends Entity
{
    use EntityIdTrait;

    protected string $question;
    protected string $answer;
    protected ?string $productId; // Nullable, falls nicht jede FAQ einem Produkt zugeordnet ist

    // Getter und Setter für question
    public function getQuestion(): string
    {
        return $this->question;
    }

    public function setQuestion(string $question): void
    {
        $this->question = $question;
    }

    // Getter und Setter für answer
    public function getAnswer(): string
    {
        return $this->answer;
    }

    public function setAnswer(string $answer): void
    {
        $this->answer = $answer;
    }

    // Getter und Setter für productId
    public function getProductId(): ?string // Nullable Typdeklaration
    {
        return $this->productId;
    }

    public function setProductId(?string $productId): void // Erlaubt null als Wert
    {
        $this->productId = $productId;
    }
}
