pipeline {
    agent any

    stages {
        stage('remove') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh "docker rm videolist"
                }
            }
        }
        stage('Build') {
            steps {
                sh "docker build --tag videolist:${env.BUILD_ID} ."
            }
        }
        stage('Run') {
            steps {
                sh "docker run --name nestlab -p 3000:3000 videolist:${env.BUILD_ID}"
            }
        }
    }
}
