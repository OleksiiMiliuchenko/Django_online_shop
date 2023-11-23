from ninja import NinjaAPI

router = NinjaAPI()


@router.get("")
def get_cart_items(request):
    return {"response": 200}
