pipeline {
    agent any
    environment {
        NEW_VERSION = '1.3.0'
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-cred')

    }
    parameters { 
        string(name: 'DEPLOY_ENV', defaultValue: 'staging', description: '') 
        booleanParam(name: 'RUN_TESTS', defaultValue: true, description: '')
        choice(name: 'DEPLOY_VER', choices: ['1.3.0', '1.4.0', '1.5.0'], description: 'Pick something')

        }

    stages {
        stage('build') {
            steps {
                echo "deploy env:  ${params.DEPLOY_ENV}"
                echo "deploy ver: ${params.DEPLOY_VER}"
                sh 'npm install'
            }
        }

        stage('test') {
            when { expression { return params.RUN_TESTS } }
            steps {
                sh 'npm test'
             echo "Hello, ${params.RUN_TESTS}, nice to meet you."

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
                 echo "echo deploy with ${pass}"
                 echo "deploy with ${user}"}               
            }
        }
    }
}
