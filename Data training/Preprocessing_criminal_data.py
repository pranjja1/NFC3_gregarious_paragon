import pandas as pd

dataset = pd.read_csv("cleaned dataset/LokSabha&RajyaSabhaCriminalRecord.csv")

from sklearn.preprocessing import MinMaxScaler, LabelEncoder

ns = MinMaxScaler()

dataset['assets_ns'] = ns.fit_transform(dataset[['assets']])

dataset['liabilities_ns'] = ns.fit_transform(dataset[['liabilities']])

dataset['cases_ns']=ns.fit_transform(dataset[['cases']])

dataset['serious_cases_ns']=ns.fit_transform(dataset[['serious_cases']])

dataset['income_ns']=ns.fit_transform(dataset[['income']])

# Label Encoding for 'gender' and 'house' columns
le = LabelEncoder()

dataset['gender_encoded'] = le.fit_transform(dataset['gender'])

dataset['house_encoded'] = le.fit_transform(dataset['house'])

dataset['education_encoded'] = le.fit_transform(dataset['education'])

dataset.to_csv("cleaned dataset/LokSabha&RajyaSabhaCriminalRecord_normalized_encoded.csv", index=False)