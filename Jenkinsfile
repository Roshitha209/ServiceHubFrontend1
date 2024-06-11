pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Roshitha209/ServiceHubFrontend1.git', branch: 'master'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js
                    // sh '''
                    // curl -sL https://deb.nodesource.com/setup_$NODE_VERSION | sudo -E bash -
                    // sudo apt-get install -y nodejs
                    // '''
                    
                    // Install project dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run dev'
            }
        }


        post {
        always {
            // Clean up actions
            cleanWs()
        }
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}