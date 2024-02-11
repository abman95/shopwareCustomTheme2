<?php declare(strict_types=1);

namespace DevAbdullah\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use DevAbdullah\Repository\EmployeeRepository;

class EmployeeController extends AbstractController
{
    private EmployeeRepository $employeeRepository;

    public function __construct(EmployeeRepository $employeeRepository)
    {
        $this->employeeRepository = $employeeRepository;
    }

    public function displayEmployees(): Response
    {
        $employees = $this->employeeRepository->findAll(); // Hier holen Sie alle Datensätze der employee_entity

        return $this->render('@Storefront/storefront/block/cms-block-webeface-employeepicture-name-jobtitle.html.twig', ['employees' => $employees]);
    }
}
