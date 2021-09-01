pipeline {
    agent any
    stages {
          stage('init') {
              steps {
            script {
                gv = load "script.groovy"
            }
        }}
        stage('build') {
            steps {
            script {
               gv.buildApp()
            }
        }}
        stage('test') {
          steps {
            script {
               gv.runTests()
            }
        }}

         stage('build docker image') {
             steps {
            script {
                gv.buildDockerImage()
            }
        }}
         stage('deploy') {
          steps {
            script {
                gv.deployApp()             
            }
        }}
    }
}
