pipeline {
    agent none
    stages {

        stage('Build') {
            agent {
                docker { image 'node:10-alpine' }
            }
            steps {
                sh 'node --version'
                sh 'npm install -g yarn'
                sh "yarn install"
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            agent any
            steps {
                sh 'docker build -t marcoreitano/ordermf .'
            }
        }

        stage('Push to Registry') {
            agent any
            steps {
                sh 'docker tag marcoreitano/ordermf dockernexus.marcoreitano.dev/ordermf'
                withDockerRegistry([credentialsId: 'docker-registry-credentials', url: "https://dockernexus.marcoreitano.dev/"]) {
                    sh 'docker push dockernexus.marcoreitano.dev/ordermf'
                }
            }
        }
    }
}
