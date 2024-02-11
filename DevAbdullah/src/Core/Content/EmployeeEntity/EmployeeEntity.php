<?php declare(strict_types=1);

namespace DevAbdullah\Core\Content\EmployeeEntity;

use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;

class EmployeeEntity extends Entity
{
    use EntityIdTrait;

    protected string $position; 
    protected string $backgroundImage;
    protected string $profileImage;
    protected string $htmlText;

    public function getPosition(): string
    {
        return $this->position;
    }

    public function setPosition(string $position): void
    {
        $this->position = $position;
    }

    public function getBackgroundImage(): string
    {
        return $this->backgroundImage;
    }

    public function setBackgroundImage(string $backgroundImage): void
    {
        $this->backgroundImage = $backgroundImage;
    }

    public function getProfileImage(): string
    {
        return $this->profileImage;
    }

    public function setProfileImage(string $profileImage): void
    {
        $this->profileImage = $profileImage;
    }

    public function getHtmlText(): string
    {
        return $this->htmlText;
    }

    public function setHtmlText(string $htmlText): void
    {
        $this->htmlText = $htmlText;
    }
}
