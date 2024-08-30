from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS # CORS for handling Cross-Origin Resource Sharing
import pickle

app=Flask(__name__)
CORS(app,resources={r"/*":{"origins":"*"}})

#model = pickle.load(open('ml_model.pkl', 'rb'))

@app.route('/api/data',methods=['GET'])
def get_data():
 data= {
     "message":"API is Running"
}

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        query_df = pd.DataFrame([data])
        prediction = model.predict(query_df)
        return jsonify({'Prediction': list(prediction)})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)

