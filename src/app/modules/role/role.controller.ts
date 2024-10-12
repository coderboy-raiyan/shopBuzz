import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../errors/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { RoleServices } from './role.service';

const createRole = catchAsync(async (req, res) => {
    const result = await RoleServices.createRoleInToDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'Role created successfully',
        data: result,
    });
});

export const RoleControllers = {
    createRole,
};
