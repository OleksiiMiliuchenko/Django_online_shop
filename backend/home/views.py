from django.http import HttpRequest, HttpResponse, HttpResponseNotFound


def index(request: HttpRequest) -> HttpResponse:
    return HttpResponse("<h1>Home</h1>")


def page_not_found(request: HttpRequest, exception) -> HttpResponseNotFound:
    return HttpResponseNotFound("<h2>:(</h2>")
