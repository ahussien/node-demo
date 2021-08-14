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
                echo ' build docker image'
            }
        }
         stage('deploy') {
            steps {
                sh 'deploy docker image'
            }
        }
    }
}
