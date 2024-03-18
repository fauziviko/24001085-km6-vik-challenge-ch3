const carUsecase = require("../usecase/car");

exports.getCars = (req, res) => {
    const { manufacture, type, rentPerDay, description, transmission, capacity, year } = req.query;

    // call the usecase
    const data = carUsecase.getCars(manufacture, type, rentPerDay, description, transmission, capacity, year);

    const response = {
        data,
        message: null,
    };

    res.status(200).json(response);
};

exports.notifCars = (req, res) => {
    const response = {
        message: "ping successfully",
    };
    res.status(200).json(response);
};

exports.getCarsById= (req, res) => {
    const { id } = req.params;

    const data = carUsecase.getCarsById(id);
    if (!data) {
        return next({
            statusCode: 404,
            message: `Student with id ${id} is not found `,
        });
    }

    const response = {
        data: data,
        message: null,
    };

    res.status(200).json(response);
};
exports.addCars = (req, res) => {
    // validate the request from user
    const { manufacture, type, rentPerDay, description, transmission, capacity, year } = req.body;
    if (!manufacture || manufacture == "") {
        return next({
            statusCode: 404,
            message: "Manufacture must be filled!",
        });
    }
    if (!type || type == "") {
        return next({
            statusCode: 404,
            message: "Type must be filled!",
        });
    }
    if (!rentPerDay || rentPerDay == "") {
        return next({
            statusCode: 404,
            message: "rentPerDay must be filled!",
        });
    }
    if (!description || description == "") {
        return next({
            statusCode: 404,
            message: "Description must be filled!",
        });
    }
    if (!transmission || transmission == "") {
        return next({
            statusCode: 404,
            message: "Transmission must be filled!",
        });
    }
    if (!capacity || capacity == "") {
        return next({
            statusCode: 404,
            message: "Capacity must be filled!",
        });
    }
    if (!year || year == "") {
        return next({
            statusCode: 404,
            message: "Year must be filled!",
        });
    }

    const data = carUsecase.addCars(req.body);

    res.status(201).json({
        data,
        message: null,
    });
};
exports.updateCarsById = (req, res) => {
    const { manufacture, type, rentPerDay, description, transmission, capacity, year } = req.body;
    if (!manufacture || manufacture == "") {
        return res.status(400).json({
            data: null,
            message: "manufacture must be filled!",
        });
    }
    if (!type || type == "") {
        return res.status(400).json({
            data: null,
            message: "type must be filled!",
        });
    }
    if (!rentPerDay || rentPerDay == "") {
        return res.status(400).json({
            data: null,
            message: "rentPerDay must be filled!",
        });
    }
    if (!description || description == "") {
        return res.status(400).json({
            data: null,
            message: "description must be filled!",
        });
    }
    if (!transmission || transmission == "") {
        return res.status(400).json({
            data: null,
            message: "transmission must be filled!",
        });
    }
    if (!capacity || capacity == "") {
        return res.status(400).json({
            data: null,
            message: "capacity must be filled!",
        });
    }
    if (!year || year == "") {
        return res.status(400).json({
            data: null,
            message: "year must be filled!",
        });
    }
    const data = carUsecase.updateCarsById(req);
    
        res.status(200).json({
            data,
            message: null,
        });
    
    };

    exports.deleteCars = (req, res) => {
        const data = carUsecase.deleteCars(req);
        res.status(200).json({
            message: "Success",
        });
    };