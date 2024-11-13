import axiosConfig from "../axiosConfig";

export const getAllStaff = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/staffManagement`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const getStaffById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/staffManagement/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const deleteStaff = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "delete",
        url: `/staffManagement/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const createStaff = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        data: data,
        url: `/staffManagement`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const updateStaff = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "put",
        data: data,
        url: `/staffManagement/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
