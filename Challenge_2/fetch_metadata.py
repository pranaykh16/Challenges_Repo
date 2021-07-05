import boto3

ec2 = boto3.resource('ec2', aws_access_key_id='XXXXXXXXXXXXX',
                     aws_secret_access_key='XXXXXXXXXXXXXXXXXXXXXXXXX',
                     region_name='us-east-2')
client = boto3.client('ec2')
Myec2=client.describe_instances(InstanceIds=['i-017aad4b3578f3586'])

for metadata in Myec2['Reservations']:
                                        print(metadata)