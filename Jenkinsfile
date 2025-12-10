pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = 'YOUR_DOCKERHUB_USERNAME'
    }

    stages {

        stage('Clone Repo') {
            steps {
                echo "Cloning repository..."
            }
        }

        stage('Build API Image') {
            steps {
                sh 'docker build -t bakery-api -f Dockerfile-api .'
            }
        }

        stage('Build UI Image') {
            steps {
                sh 'docker build -t bakery-ui -f Dockerfile-ui .'
            }
        }

        stage('Run Containers') {
            steps {
                sh '''
                docker rm -f bakery-api || true
                docker rm -f bakery-ui || true

                docker run -d --name bakery-api -p 3001:3001 bakery-api
                docker run -d --name bakery-ui -p 3000:3000 \
                  -e API_URL=http://localhost:3001/api/menu \
                  bakery-ui
                '''
            }
        }
    }
}

