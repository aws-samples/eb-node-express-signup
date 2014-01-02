eb-node-express-signup
======================

This Node.js sample application uses the [Express](http://expressjs.com/) framework and [Bootstrap](http://getbootstrap.com/) to build a simple, scalable customer signup form that is deployed to [AWS Elastic Beanstalk](http://aws.amazon.com/elasticbeanstalk/). The application stores data in [Amazon DynamoDB](http://aws.amazon.com/dynamodb/) and publishes notifications to the [Amazon Simple Notification Service (SNS)](http://aws.amazon.com/sns/) when a customer fills out the form.

## Themes
The code includes several Bootstrap themes from [bootswatch.com](http://bootswatch.com/). You can dynamically change the active theme by setting the THEME environment variable in the [Elastic Beanstalk Management Console](https://console.aws.amazon.com/elasticbeanstalk):

Installed themes include:

* [amelia](http://bootswatch.com/amelia)
* [default](http://bootswatch.com/default)
* [flatly](http://bootswatch.com/flatly)
* [slate](http://bootswatch.com/slate)
* [united](http://bootswatch.com/united)

## app_config.json
The application stores connection info in a JSON file, app_config.json. The key-value pairs are as follows:
* AWS_REGION: the AWS region code, e.g. 'us-west-2'
* STARTUP_SIGNUP_TABLE: the name of the DynamoDB table where the app stores signup data (e.g. 'my-ddb-table')
* NEW_SIGNUP_TOPIC: The [ARN](http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the SNS topic that the app uses to send notifications (e.g. 'arn:aws:sns:us-west-2:123456789012:my-supercool-app')

Currently, the values are set to empty strings. You'll need to enter appropriate values for your environment.

