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
                    // Install project dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                // Change this to `npm run build` if you are creating a production build
                sh 'npm run dev'
            }
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
