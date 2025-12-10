pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ashwath-k-samuel/devops-bakery-app.git'
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
                # Remove old containers if they exist
                docker rm -f bakery-api bakery-ui || true

                # Create docker network if not exists
                docker network inspect bakery-net >/dev/null 2>&1 || \
                  docker network create bakery-net

                # Run API container
                docker run -d \
                  --name bakery-api \
                  --network bakery-net \
                  -p 3001:3001 \
                  bakery-api

                # Run UI container
                docker run -d \
                  --name bakery-ui \
                  --network bakery-net \
                  -p 3000:3000 \
                  -e API_URL=http://bakery-api:3001/api/menu \
                  bakery-ui
                '''
            }
        }
    }
}
