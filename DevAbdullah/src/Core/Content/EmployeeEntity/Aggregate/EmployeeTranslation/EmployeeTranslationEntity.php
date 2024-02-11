<?php declare(strict_types=1);

namespace DevAbdullah\Core\Content\EmployeeEntity\Aggregate\EmployeeTranslation;

use Shopware\Core\Framework\DataAbstractionLayer\TranslationEntity;

class EmployeeTranslationEntity extends TranslationEntity
{
    protected string $employeeId;
    protected string $question;
    protected string $answer;

    public function getEmployeeId(): string
    {
        return $this->employeeId;
    }

    public function setEmployeeId(string $employeeId): void
    {
        $this->employeeId = $employeeId;
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
