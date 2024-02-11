<?php declare(strict_types=1);

namespace DevAbdullah\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1707138759FaqDatabase extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1707138759;
    }

    public function update(Connection $connection): void
    {
        $connection->executeStatement('
            CREATE TABLE IF NOT EXISTS faq_entity (
                id BINARY(16) NOT NULL PRIMARY KEY,
                question VARCHAR(255) NOT NULL,
                answer TEXT NOT NULL,
                product_id BINARY(16) NULL,
                created_at DATETIME(3) NOT NULL,
                updated_at DATETIME(3) NULL,
                FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE SET NULL ON UPDATE CASCADE
            )
        ');

        $connection->executeStatement('
            CREATE TABLE IF NOT EXISTS faq_translation (
                faq_id BINARY(16) NOT NULL,
                language_id BINARY(16) NOT NULL,
                question VARCHAR(255) NOT NULL,
                answer TEXT NOT NULL,
                created_at DATETIME(3) NOT NULL,
                updated_at DATETIME(3) NULL,
                PRIMARY KEY (faq_id, language_id),
                CONSTRAINT fk_faq_translation_faq_id FOREIGN KEY (faq_id)
                    REFERENCES faq_entity (id) ON DELETE CASCADE ON UPDATE CASCADE,
                CONSTRAINT fk_faq_translation_language_id FOREIGN KEY (language_id)
                    REFERENCES language (id) ON DELETE CASCADE ON UPDATE CASCADE
            )
        ');
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
