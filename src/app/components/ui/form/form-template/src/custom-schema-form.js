'use strict';

angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function(schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {

            var enumToTitleMap = function(enm) {
                var titleMap = []; //canonical titleMap format is a list.
                enm.forEach(function(name) {
                    titleMap.push({
                        name: name,
                        value: name
                    });
                });
                return titleMap;
            };

            var hDefault = function(name, schema, options) {
                if (schema.type === 'string' && schema.format === 'hDefault') {
                    var f = schemaFormProvider.stdFormObj(name, schema, options);
                    f.key = options.path;
                    f.type = 'hDefault';
                    options.lookup[sfPathProvider.stringify(options.path)] = f;
                    return f;
                }
            };

            schemaFormProvider.defaults.string.unshift(hDefault);

             //Add to the bootstrap directive
            schemaFormDecoratorsProvider.addMapping(
                'bootstrapDecorator',
                'hDefault',
                'directives/decorators/bootstrap/custom/hDefault.html'
            );
            schemaFormDecoratorsProvider.createDirective(
                'hDefault',
                'directives/decorators/bootstrap/custom/hDefault.html'
            );

            var hNumber = function(name, schema, options) {
                if (schema.type === 'string' && schema.format === 'hNumber') {
                    var f = schemaFormProvider.stdFormObj(name, schema, options);
                    f.key = options.path;
                    f.type = 'number';
                    options.lookup[sfPathProvider.stringify(options.path)] = f;
                    return f;
                }
            };

            schemaFormProvider.defaults.string.unshift(hNumber);

             //Add to the bootstrap directive
            schemaFormDecoratorsProvider.addMapping(
                'bootstrapDecorator',
                'number',
                'directives/decorators/bootstrap/custom/hDefault.html'
            );
            schemaFormDecoratorsProvider.createDirective(
                'number',
                'directives/decorators/bootstrap/custom/hDefault.html'
            );

            var hPassword = function(name, schema, options) {
                if (schema.type === 'string' && schema.format === 'hPassword') {
                    var f = schemaFormProvider.stdFormObj(name, schema, options);
                    f.key = options.path;
                    f.type = 'password';
                    options.lookup[sfPathProvider.stringify(options.path)] = f;
                    return f;
                }
            };

            schemaFormProvider.defaults.string.unshift(hPassword);

             //Add to the bootstrap directive
            schemaFormDecoratorsProvider.addMapping(
                'bootstrapDecorator',
                'password',
                'directives/decorators/bootstrap/custom/hDefault.html'
            );
            schemaFormDecoratorsProvider.createDirective(
                'password',
                'directives/decorators/bootstrap/custom/hDefault.html'
            );

            var hSelect = function(name, schema, options) {
                if (schema.type === 'string' && schema.format === 'hSelect') {
                    var f = schemaFormProvider.stdFormObj(name, schema, options);
                    f.key = options.path;
                    f.type = 'hSelect';
                    if (!f.titleMap) {
                        f.titleMap = enumToTitleMap(schema['enum']);
                    }
                    options.lookup[sfPathProvider.stringify(options.path)] = f;
                    return f;
                }
            };

            schemaFormProvider.defaults.string.unshift(hSelect);

             //Add to the bootstrap directive
            schemaFormDecoratorsProvider.addMapping(
                'bootstrapDecorator',
                'hSelect',
                'directives/decorators/bootstrap/custom/hSelect.html'
            );
            schemaFormDecoratorsProvider.createDirective(
                'hSelect',
                'directives/decorators/bootstrap/custom/hSelect.html'
            );

            var hTextarea = function(name, schema, options) {
                if (schema.type === 'string' && schema.format === 'hTextarea') {
                    var f = schemaFormProvider.stdFormObj(name, schema, options);
                    f.key = options.path;
                    f.type = 'hTextarea';
                    options.lookup[sfPathProvider.stringify(options.path)] = f;
                    return f;
                }
            };

            schemaFormProvider.defaults.string.unshift(hTextarea);

             //Add to the bootstrap directive
            schemaFormDecoratorsProvider.addMapping(
                'bootstrapDecorator',
                'hTextarea',
                'directives/decorators/bootstrap/custom/hTextarea.html'
            );
            schemaFormDecoratorsProvider.createDirective(
                'hTextarea',
                'directives/decorators/bootstrap/custom/hTextarea.html'
            );

            var hDatePicker = function(name, schema, options) {
                if (schema.type === 'string' && schema.format === 'date') {
                    var f = schemaFormProvider.stdFormObj(name, schema, options);
                    f.key = options.path;
                    f.type = 'hDatePicker';
                    options.lookup[sfPathProvider.stringify(options.path)] = f;
                    return f;
                }
            };

            schemaFormProvider.defaults.string.unshift(hDatePicker);

             //Add to the bootstrap directive
            schemaFormDecoratorsProvider.addMapping(
                'bootstrapDecorator',
                'hDatePicker',
                'directives/decorators/bootstrap/custom/hDatePicker.html'
            );
            schemaFormDecoratorsProvider.createDirective(
                'hDatePicker',
                'directives/decorators/bootstrap/custom/hDatePicker.html'
            );
        }
    ]);
