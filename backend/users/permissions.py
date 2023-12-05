from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAuthor(BasePermission):
    message = "Access denied"

    def has_permission(self, request, view):
        # if request.method in SAFE_METHODS:
        return True

    # else:
    #     return False

    def has_object_permission(self, request, view, obj):
        # if request.method in SAFE_METHODS:
        #     return True
        #
        # # return request.user.id == obj.user_id
        return False
