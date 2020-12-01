import awsmobile from './aws-exports';

var config;

if (process.env.NODE_ENV === 'production') {
  config = {
    "aws_project_region": process.env.REACT_APP_AWS_PROJECT_REGION,
    "aws_cognito_identity_pool_id": process.env.REACT_APP_AWS_COGNITO_ID,
    "aws_cognito_region": process.env.REACT_APP_AWS_COGNITO_REGION,
    "aws_user_pools_id": process.env.REACT_APP_AWS_USER_POOLS_ID,
    "aws_user_pools_web_client_id": process.env.REACT_APP_AWS_USER_POOLS_WEB_ID,
    "oauth": {},
    "aws_mobile_analytics_app_id": process.env.REACT_APP_AWS_ANALYTIC_APP_ID,
    "aws_mobile_analytics_app_region": process.env.REACT_APP_AWS_ANALYTIC_APP_REGION,
    "aws_content_delivery_bucket": process.env.REACT_APP_AWS_CONTENT_BUCKET,
    "aws_content_delivery_bucket_region": process.env.REACT_APP_AWS_CONTENT_BUCKET_REGION,
    "aws_content_delivery_url": process.env.REACT_APP_AWS_CONTENT_URL,
    "aws_appsync_graphqlEndpoint": process.env.REACT_APP_AWS_APPSYNC_ENDPOINT,
    "aws_appsync_region": process.env.REACT_APP_AWS_APPSYNC_REGION,
    "aws_appsync_authenticationType": process.env.REACT_APP_AWS_APPSYNC_AUTH_TYPE,
  };
} else {
  config = awsmobile;
}

export default config;
