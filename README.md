# SWAFUNC-template
This is a Template for creating Azure Static Webapps with a managed Azure function in python

For Local Develoment:
1. Edit the "__init__.py"-file and add your API Logic in the "main"- Function
2. Edit the react app to your liking
3. Open a Terminal and cd into the api Folder -> run "func start"
4. Open a second Terminal and cd into the react directory -> run "npm install" and "npm run dev"
5. Go to http://localhost:5173 and enjoy!

For deployment to Azure Static Web App
- Deployment via Azure-Dev-Ops:
    1. Create a AzureDevOps Repo and clone it
    2. Copy your configuration into the Repo and Commit
    3. Create a Static Web App in the Azure Portal
    4. In the Azure Repo select "Set up build" and "Node.js with React"
    5. In the following editor copy the content of "azure-config-template.yaml"
    6. Hit "Save and run"
    7. Open the URL of your Static Webapp and enjoy!

