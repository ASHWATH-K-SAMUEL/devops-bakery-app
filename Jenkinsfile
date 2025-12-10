pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = 'ashwathksamuel' // optional if pushing images
    }

    stages {

        stage('Prepare Network') {
            steps {
                echo "Creating Docker network if it doesn't exist..."
                sh 'docker network create bakery-net || true'
            }
        }

        stage('Build API Image') {
            steps {
                sh 'docker build -t bakery-api ./bakery-api-service'
            }
        }

        stage('Build UI Image') {
            steps {
                sh 'docker build -t bakery-ui ./bakery-ui-service'
            }
        }

        stage('Stop Old Containers') {
            steps {
                sh 'docker stop bakery-api bakery-ui || true'
                sh 'docker rm bakery-api bakery-ui || true'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker run -d --name bakery-api --network bakery-net -p 3001:3001 bakery-api'
                sh 'docker run -d --name bakery-ui --network bakery-net -p 3000:3000 bakery-ui'
            }
        }
    }
}

