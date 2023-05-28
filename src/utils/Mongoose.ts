export const Flags = {
  type: {
    isPrivate: Boolean,
    isDeleted: Boolean,
  },
  default: {
    isPrivate: false,
    isDeleted: false,
  },
};

const MongooseUtil = {
  Flags,
};

export default MongooseUtil;
