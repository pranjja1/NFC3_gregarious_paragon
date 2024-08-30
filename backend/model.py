import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import Lasso
import pickle

# Load the dataset
car_dataset = pd.read_csv('LokSabhaParliamentaryWork.csv')


# Prepare Features (X) and Target Variable (Y)
X = car_dataset.drop(['nature_membership', 'term_start_date','term_end_date','educational_qualification_details','debates','private_member_bills','questions','attendace','mp_note'], axis=1)
Y = car_dataset['mp_name','pc_name','state','mp_political_party','mp_gender','educational_qualification','mp_age']

# Train-Test Split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.1, random_state=2)

# Initialize and Train the Lasso Regression Model
lr = Lasso()
lr.fit(X_train, Y_train)

# Export the Trained Model using Pickle
pickle.dump(lr, open('iri.pkl', 'wb'))