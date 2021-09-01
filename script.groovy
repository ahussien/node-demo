def buildApp() {
    sh 'npm install'
}

def runTests() {
  sh 'npm test'
}

def buildDockerImage() {
   sh 'docker build . -t ahussien/my-app:3.0'
                withCredentials([usernamePassword(credentialsId: 'docker-hub-cred', passwordVariable: 'pass', usernameVariable: 'user')]) {
                sh "docker login -u $USER -p $PASS"
                sh 'docker push ahussien/my-app:3.0'
            }
}

def deployApp() {
  echo 'deploy the application...'
}