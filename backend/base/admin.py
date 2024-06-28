from django.contrib import admin


# Register your models here.
class STOCKS_DATAAdmin(admin.ModelAdmin):
   list_display=('stock_id','symbol','Open','Close','High','Low','Volume','date',)
from .models import STOCKS_DATA # Import your models here

admin.site.register(STOCKS_DATA,STOCKS_DATAAdmin)  # Register your models here

from .models import STOCKS_DATA1 # Import your models here

admin.site.register(STOCKS_DATA1)  # Register your models here