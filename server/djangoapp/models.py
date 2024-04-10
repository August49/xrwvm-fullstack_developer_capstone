# Uncomment the following imports before adding the Model code

from django.db import models
from django.utils.timezone import now
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.


class CarMake(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
   
    def __str__(self):
        return self.name


class CarModel(models.Model):
    car_make = models.ForeignKey(CarMake, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    SEDAN = "sedan"
    SUV = "suv"
    WAGON = "wagon"
    CAR_TYPE_CHOICES = [
        (SEDAN, "Sedan"),
        (SUV, "SUV"),
        (WAGON, "Wagon"),
    ]
    car_type = models.CharField(
        max_length=5,
        choices=CAR_TYPE_CHOICES,
        default=SEDAN,
    )
    year = models.IntegerField(
        validators=[MaxValueValidator(2023), MinValueValidator(2015)]
    )

    def __str__(self):
        return self.name