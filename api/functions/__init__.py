import azure.functions as func

app = func.FunctionApp()

#Put your Api Logic in this method
def main(req: func.HttpRequest) -> func.HttpResponse:
    return func.HttpResponse(
        "Active",
        status_code=200
        )