//grunt-start
/// <reference path="bower_components/type-def/angularjs/angular.d.ts" />
/// <reference path="bower_components/type-def/angular-material/angular-material.d.ts" />
/// <reference path="bower_components/type-def/node/node.d.ts" />
/// <reference path="bower_components/type-def/mocha/mocha.d.ts" />
/// <reference path="bower_components/type-def/sinon-chai/sinon-chai.d.ts" />
/// <reference path="../test/unit/angular-mocks.d.ts" />
/// <reference path="../test/unit/context.ts" />
/// <reference path="../test/unit/globals.ts" />
/// <reference path="../test/unit/library.ts" />
/// <reference path="core/models/call.ts" />
/// <reference path="core/models/connector.ts" />
/// <reference path="core/models/errors.ts" />
/// <reference path="core/models/execution.ts" />
/// <reference path="core/models/map.ts" />
/// <reference path="core/models/mapper.ts" />
/// <reference path="core/models/serializable.ts" />
/// <reference path="core/models/session.ts" />
/// <reference path="core/models/workflow.ts" />
/// <reference path="core/models/workflowExecution.ts" />
/// <reference path="core/dao/callDAO.ts" />
/// <reference path="core/dao/connectorDAO.ts" />
/// <reference path="core/dao/dao.ts" />
/// <reference path="core/dao/mapperDAO.ts" />
/// <reference path="core/dao/workflowDAO.ts" />
/// <reference path="core/dao/workflowExecutionDAO.ts" />
/// <reference path="core/modules/aceConfig.ts" />
/// <reference path="core/modules/appConfig.ts" />
/// <reference path="widgets/call/src/call.ts" />
/// <reference path="widgets/call/src/callForm.ts" />
/// <reference path="widgets/call/src/callItem.ts" />
/// <reference path="widgets/call/src/callVM.ts" />
/// <reference path="widgets/callOverview/src/callOverview.ts" />
/// <reference path="widgets/callOverview/src/callOverviewVM.ts" />
/// <reference path="widgets/connector/src/connector.ts" />
/// <reference path="widgets/connector/src/connectorItem.ts" />
/// <reference path="widgets/connector/src/connectorVM.ts" />
/// <reference path="widgets/conrest/src/conrest.ts" />
/// <reference path="widgets/conrest/src/conrestVM.ts" />
/// <reference path="widgets/execution/src/execution.ts" />
/// <reference path="widgets/execution/src/executionVM.ts" />
/// <reference path="widgets/mapper/src/mapper.ts" />
/// <reference path="widgets/mapper/src/mapperItem.ts" />
/// <reference path="widgets/mapper/src/mapperVM.ts" />
/// <reference path="widgets/workflow/src/workflow.ts" />
/// <reference path="widgets/workflow/src/workflowForm.ts" />
/// <reference path="widgets/workflow/src/workflowVM.ts" />
/// <reference path="widgets/workflowOverview/src/workflowOverview.ts" />
/// <reference path="widgets/workflowOverview/src/workflowOverviewVM.ts" />
/// <reference path="widgets/call/call.ts" />
/// <reference path="widgets/call/test/definitions/registerCall.ts" />
/// <reference path="widgets/call/test/definitions/viewCall.step.ts" />
/// <reference path="widgets/callOverview/callOverview.ts" />
/// <reference path="widgets/callOverview/test/definitions/viewCalls.step.ts" />
/// <reference path="widgets/connector/connector.ts" />
/// <reference path="widgets/connector/test/definitions/viewConnector.step.ts" />
/// <reference path="widgets/conrest/conrest.ts" />
/// <reference path="widgets/conrest/test/definitons/viewWorkflowCalls.step.ts" />
/// <reference path="widgets/execution/execution.ts" />
/// <reference path="widgets/execution/test/definitions/viewExecution.step.ts" />
/// <reference path="widgets/mapper/mapper.ts" />
/// <reference path="widgets/mapper/test/definitions/viewMapper.step.ts" />
/// <reference path="widgets/workflow/test/definitions/execute.step.ts" />
/// <reference path="widgets/workflow/test/definitions/registerWorkflow.step.ts" />
/// <reference path="widgets/workflow/test/definitions/searchCall.step.ts" />
/// <reference path="widgets/workflow/test/definitions/updateWorkflow.step.ts" />
/// <reference path="widgets/workflow/test/definitions/viewWorkflowDetails.step.ts" />
/// <reference path="widgets/workflow/workflow.ts" />
/// <reference path="widgets/workflowOverview/test/definitions/selectWorkflow.step.ts" />
/// <reference path="widgets/workflowOverview/test/definitions/viewWorkflow.step.ts" />
/// <reference path="widgets/workflowOverview/workflowOverview.ts" />
/// <reference path="app.ts" />
//grunt-end