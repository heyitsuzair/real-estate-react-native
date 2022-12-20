import axios from 'axios';
import {
  filterProperties,
  getProperties,
  getProperty,
  searchProperties,
} from '../../utils/api/endPoints';

interface getFliteredPropertiesProps {
  area: string | string[] | undefined;
  status: string | string[] | undefined;
  type: string | string[] | undefined;
}

export const fetchProperty = async (id: string | string[] | undefined) => {
  try {
    const {data} = await axios.get(getProperty + id);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const fetchProperties = async (pageNo: string) => {
  try {
    /**
     * Here "/6" Is Limit
     */
    const {data} = await axios.get(getProperties + pageNo + '/6');
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const findProperties = async (
  pageNo: string,
  query: string | string[] | undefined,
) => {
  try {
    /**
     * Here "/6" Is Limit
     */
    const {data} = await axios.get(searchProperties + query + '/6/' + pageNo);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const getFliteredProperties = async (
  pageNo: string,
  values: getFliteredPropertiesProps,
) => {
  try {
    /**
     * Here "/6" Is Limit
     */
    const {data} = await axios.get(
      filterProperties +
        pageNo +
        '/6/' +
        values.area +
        '/' +
        values.status +
        '/' +
        values.type,
    );
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
