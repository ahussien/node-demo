pipeline {
    agent any
    stages {
          stage('init') {
            script {
                gv = load "script.groovy"
            }
        }
        stage('build') {
            script {
               gv.buildApp()
            }
        }
        stage('test') {
            script {
               gv.runTests()
            }
        }
         stage('build docker image') {
            script {
                gv.buildDockerImage()
            }
        }
         stage('deploy') {
            script {
                gv.deployApp()             
            }
        }
    }
}
