pipeline {
    agent any
    environment {
        NEW_VERSION = '1.3.0'    }

    stages {
        stage('build') {
            steps {
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
                sh 'docker build . -t ahussien/my-app:3.0'
                withCredentials([usernamePassword(credentialsId: 'docker-hub-cred', passwordVariable: 'pass', usernameVariable: 'user')]) {
                sh 'docker login -u $PASS -p $USER'
                sh 'docker push ahussien/my-app:3.0'
            }
        }
         stage('deploy') {
            steps {
                echo 'deploy docker image 2'               
            }
        }
    }
}
