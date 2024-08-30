import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score

# Load dataset
dataset = pd.read_csv("C:\Users\pranj\OneDrive\Desktop\NFC_gregacious_paragon\Data\LokSabha&RajyaSabhaElectionDetails.csv")

# Check for NaN values in the target variable
print(dataset['Vote_Share_Percentage_ns'].isna().sum())

# Drop rows with NaN values in the target variable
dataset = dataset.dropna(subset=['Vote_Share_Percentage_ns'])

# Define features and target
X = dataset[['Votes_ns', 'Valid_Votes_ns', 'Margin_ns', 'Margin_Percentage_ns', 
             'State_Name_encoded', 'Constituency_Name_encoded', 'Candidate_Type_encoded', 
             'Party_encoded', 'Party_Type_TCPD_encoded', 'Incumbent_encoded', 'Recontest_encoded']]
y = dataset['Vote_Share_Percentage_ns']  # Target variable

# Check again for NaN values in features
print(X.isna().sum())

# Fill NaN values in features with 0
X = X.fillna(0)

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Define a pipeline with the model
model = Pipeline(steps=[
    ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))
])

# Train the model
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f'Mean Squared Error: {mse:.2f}')
print(f'R^2 Score: {r2:.2f}')

# Function to predict vote share percentage for a given candidate
def predict_vote_share_percentage(candidate_name):
    candidate_data = dataset[dataset['Candidate'] == candidate_name]
    if candidate_data.empty:
        print(f"No data found for candidate: {candidate_name}")
        return None

    candidate_features = candidate_data[['Votes_ns', 'Valid_Votes_ns', 'Margin_ns', 'Margin_Percentage_ns', 
                                         'State_Name_encoded', 'Constituency_Name_encoded', 'Candidate_Type_encoded', 
                                         'Party_encoded', 'Party_Type_TCPD_encoded', 'Incumbent_encoded', 'Recontest_encoded']]

    candidate_features = candidate_features.fillna(0)
    
    prediction = model.predict(candidate_features)
    
    return prediction

# User input for candidate name
candidate_name = input("Enter the candidate's name: ")
prediction = predict_vote_share_percentage(candidate_name)

if prediction is not None:
    print(f"The predicted vote share percentage for {candidate_name} is: {prediction[0]*100}")
