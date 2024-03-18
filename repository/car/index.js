const cars = require("../../data/cars.json");
const { v4: uuidv4 } = require('uuid');

exports.getCars = (manufacture, type, rentPerDay, description, transmission, capacity, year) => {
    let data = cars.map((car) => car);

    data = data.filter((car) => {
        let filteredStatus = true;
        if (manufacture) {
            filteredStatus =
                filteredStatus &&
                car.manufacture.toLowerCase().includes(manufacture?.toLowerCase());
        }
        if (type) {
            filteredStatus =
                filteredStatus &&
                car.type.toLowerCase().includes(type?.toLowerCase());
        }
        if (rentPerDay) {
            filteredStatus =
                filteredStatus &&
                car.rentPerDay == rentPerDay;
        }
        if (description) {
            filteredStatus =
                filteredStatus &&
                car.description.toLowerCase().includes(description?.toLowerCase());
        }
        if (capacity) {
            filteredStatus =
                filteredStatus &&
                car.capacity == capacity;
        }
        if (transmission) {
            filteredStatus =
                filteredStatus &&
                car.transmission.toLowerCase().includes(transmission?.toLowerCase());
        }
        if (year) {
            filteredStatus =
                filteredStatus &&
                car.year == year;
        }

        return filteredStatus;
    });

    return data;
};
exports.getCarsById = (id) => {
    let data = cars.map((car) => car);

    data = data.filter((car) => car.id == id);
    if (data.length == 0) {
        return null;
    }

    return data[0];
};
exports.addCars = (payload) => {
    /* Process insert data */
    // get the last id and then add 1
    payload = {
        id: uuidv4(),
        ...payload,
    };

    // Insert to data student
    cars.push(payload);

    return payload;
};
exports.updateCarById = (updater) => {
    const id = updater?.params?.id;
    const updatedCar= {
        id: id,
        ...updater.body,
    };
    cars.map((car, index) => {
        if (car?.id == id) {
            cars[index] = updatedCar;
        }
    });

    return updatedCar;
};
exports.deleteCars = (deleted) => {
    const id = deleted?.params?.id;

    // Mini Challenge: Delete here, you can do with filter or for or another method
    index = cars.findIndex((car) => car.id === id);
    cars.splice(index, 1);

    return deleted;
};