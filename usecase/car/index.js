const carRepo = require("../../repository/car");

exports.getCars = (manufacture, type, rentPerDay, description, transmission, capacity, year) => {
    const data = carRepo.getCars(manufacture, type, rentPerDay, description, transmission, capacity, year);
    return data;
};
exports.getCarsById = (id) => {
    const data = carRepo.getCarsById(id);
    return data;
};
exports.addCars = (payload) => {
    const data = carRepo.addCars(payload);
    return data;
};
exports.updateCarsById = (updater) => {
    const data = carRepo.updateCarById(updater);
    return data;
};
exports.deleteCars = (deleted) => {
    const data = carRepo.deleteCars(deleted);
    return data;
};