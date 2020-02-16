const MODEL_URL = '/models'
    
export const faceDetection = async () => {
    await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
    await faceapi.loadFaceLandmarkModel(MODEL_URL)
    await faceapi.loadFaceRecognitionModel(MODEL_URL)
}
export const landmarkDetection = async () => {
    await faceDetection()
    await faceapi.loadFaceLandmarkModel(MODEL_URL)
}

export default {
    faceDetection,
    landmarkDetection
}