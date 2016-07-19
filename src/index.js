export default function({ Plugin, types: t}) {
  return new Plugin('react-class-displayname', {
    visitor: {
      ClassDeclaration(node, parent) {
        if (this.get('superClass').matchesPattern('React.Component')) {
          (parent.type === 'ExportDefaultDeclaration' ? this.parentPath :
           this).insertAfter([
            t.expressionStatement(t.assignmentExpression(
              '=',
              t.memberExpression(node.id, t.identifier('displayName')),
              t.literal(node.id.name)
            ))
          ]);
        }
      }
    }
  });
}
