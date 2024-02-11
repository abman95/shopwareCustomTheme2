<?php declare(strict_types=1);

namespace DevAbdullah\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1707226835EmployeeDataBase extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1707226835;
    }

    public function update(Connection $connection): void
    {
        $connection->executeStatement('
            CREATE TABLE IF NOT EXISTS `employee_entity` (
                id BINARY(16) NOT NULL PRIMARY KEY,
                position VARCHAR(255) NOT NULL,
                background_image VARCHAR(255) NOT NULL,
                profile_image VARCHAR(255) NOT NULL,
                html_text LONGTEXT NOT NULL,
                created_at DATETIME(3) NOT NULL,
                updated_at DATETIME(3) NULL
            )
        ');

        $connection->executeStatement('
            CREATE TABLE IF NOT EXISTS `employee_translation` (
                employee_id BINARY(16) NOT NULL,
                language_id BINARY(16) NOT NULL,
                position VARCHAR(255) NOT NULL,
                background_image VARCHAR(255) NOT NULL,
                profile_image VARCHAR(255) NOT NULL,
                html_text LONGTEXT NOT NULL,
                created_at DATETIME(3) NOT NULL,
                updated_at DATETIME(3) NULL,
                PRIMARY KEY (employee_id, language_id),
                CONSTRAINT fk_employee_translation_employee_id FOREIGN KEY (employee_id)
                    REFERENCES employee_entity (id) ON DELETE CASCADE ON UPDATE CASCADE,
                CONSTRAINT fk_employee_translation_language_id FOREIGN KEY (language_id)
                    REFERENCES language (id) ON DELETE CASCADE ON UPDATE CASCADE
            )
        ');
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
