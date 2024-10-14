import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../errors/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.service';

const createAdmin = catchAsync(async (req, res) => {
    const result = await UserServices.createAdmin(req.body);
    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'Admin created successfully!',
        data: result,
    });
});

export const UserControllers = {
    createAdmin,
};
