pipeline {
    agent any
    environment {
        NEW_VERSION = '1.3.0'
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-cred')
    }
    stages {
        stage('build') {
            steps {
                echo "build the application version ${NEW_VERSION}"
                sh 'npm install'
            }
        }

        stage('test') {
            steps {
                sh 'npm test'
            }
        }
         stage('build docker image') {
            steps {
                echo ' build docker image'
            }
        }
         stage('deploy') {
            steps {
                echo 'deploy docker image 2'
                echo "deploy with ${DOCKER_HUB_CREDENTIALS}"
                sh ${DOCKER_HUB_CREDENTIALS}"
            }
        }
    }
}
