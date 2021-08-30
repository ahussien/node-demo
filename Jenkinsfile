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
               withCredentials([usernamePassword(credentialsId: 'docker-hub-cred', passwordVariable: 'pass', usernameVariable: 'user')]) {
            // the code here can access $pass and $user
}                echo "deploy with ${pass}"
                 echo "deploy with ${user}"
            }
        }
    }
}
