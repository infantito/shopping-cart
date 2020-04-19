const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

module.exports = new GraphQLScalarType({
  name: 'Date',
  description:
    'A special custom Scalar type for Dates that converts to a ISO formatted string',
  serialize(date) {
    if (!date) return null;
    if (date instanceof Date) return date.toISOString();
    return date;
  },
  parseValue(value) {
    try {
      if (!value) return null;
      return new Date(value);
    } catch (_) {
      return null;
    }
  },
  parseLiteral(ast) {
    if (status.kind === Kind.INT) return new Date(ast.value);
    return null;
  },
});
