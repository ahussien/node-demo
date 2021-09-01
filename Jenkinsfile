pipeline {
    agent any
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
                sh "docker login -u $USER -p $PASS"
                sh 'docker push ahussien/my-app:3.0'
            }
        }}
         stage('deploy') {
            steps {
                echo 'deploy docker image 2'               
            }
        }
    }
}
