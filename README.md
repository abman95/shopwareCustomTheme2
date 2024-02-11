# Installation Instructions for Shopware Theme

Operating System Used for Instruction: Linux Kubuntu

## Quick Guide: Shopware Theme Installation and Setup on Linux Kubuntu with Docker and Visual Studio Code

#### Terminal Instructions:
- `docker run -p 80:80 dockware/dev:latest`

Wait until the container is fully started.

#### In Visual Studio Code:

1. Install the "Docker for Visual Studio Code" extension.

2. Click the blue button at the bottom left.

3. Choose "Attach to running Container" and select the "dockware/dev:latest" container.

#### In the Visual Studio Code Terminal:
Now, clone the Git repository into the running container. 

You might need to access the container's shell to run this command, depending on your setup.

- `git clone https://github.com/abman95/shopwareCustomTheme /var/www/html/custom/plugins/Theme`
Move the "DevAbdullah" folder from the `Theme` folder to html/custom/plugins and afterwards delete the Theme folder.

Then run following codes:
- `cd html`
- `bin/console plugin:refresh`
- `bin/console plugin:install --activate DevAbdullah`
- `bin/console theme:change`

#### Choose "1" for DevAbdullah when prompted.

#### For "Please select a sales channel:", choose "0" for Storefront.

- `bin/console theme:compile`
- `bin/build-storefront.sh`
- `bin/build-administration.sh`
- `bin/build-js.sh`

#### Test the features by visiting localhost and localhost/admin in your browser.  

  
## Detailed Installation Guide:

#### Terminal Instructions:

-   Open the Terminal and enter the command: `docker run -p 80:80 dockware/dev:latest`.

#### Setting Up in IDE Visual Studio Code:

-   Once installation completes, open your preferred IDE. For this guide, we'll use Visual Studio Code.
-   In Visual Studio Code, install the extension "Docker for Visual Studio Code".
-   After installation, a blue button appears at the bottom-left of the IDE. Click this button. A prompt appears at the top-center. Select "Attach to running Container" and choose the "dockware/dev:latest" container.
-   To integrate the Shopware theme, navigate to `html/custom/plugins` and insert the `DevAbdullah` folder.
-   To activate the theme, open Terminal in Visual Studio Code, navigate to the `html` directory (`cd html`), and execute these commands in sequence:
    -   `bin/console plugin:refresh`
    -   `bin/console plugin:install --activate DevAbdullah`
    -   `bin/console theme:change`
-   When prompted to select a theme, choose:
-   
    `[0] Storefront
    [1] DevAbdullah`

    Enter `1` for `DevAbdullah`.
-   For the prompt "Please select a sales channel:", enter `0` for `Storefront`.
-   Finalize theme activation with the following commands:
    -   `bin/console theme:compile`
    -   `bin/build-storefront.sh`
    -   `bin/build-administration.sh`
    -   `bin/build-js.sh`

#### Testing Features:

-   Open a web browser and visit `localhost`.
-   In a new tab, navigate to `localhost/admin`.


##### Feature: Create Employee

-   **Access Admin Page:** Go to localhost/admin.
-   **Navigate to Catalogs/Categories:** Select "Content/Employee".
-   **Create Employee:** Add a new employee.
-   **Verify Employee in Database:** Visit localhost/adminer.php.
-   **Log in to MySQL:** Database System: "MySQL", Database System: "127.0.0.1:3306", Server: "localhost", User: "root", Password: "root", Database: "Shopware".
-   **Open Database:** Click on the DB and select "shopware".
-   **Search Entity:** Look for the entity "employee_entity" and click on it.
-   **Confirm Employee:** You can confirm your added employee there.
