import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

dataset = pd.read_csv("cleaned dataset/LokSabha&RajyaSabhaElectionDetails.csv")

from sklearn.preprocessing import MinMaxScaler, LabelEncoder

ns = MinMaxScaler()

dataset['Votes_ns']=ns.fit_transform(dataset[['Votes']])

dataset['Valid_Votes_ns']=ns.fit_transform(dataset[['Valid_Votes']])

dataset['Vote_Share_Percentage_ns']=ns.fit_transform(dataset[['Vote_Share_Percentage']])

dataset['Margin_ns']=ns.fit_transform(dataset[['Margin']])

dataset['Margin_Percentage_ns']=ns.fit_transform(dataset[['Margin_Percentage']])

le = LabelEncoder()

dataset['State_Name_encoded'] = le.fit_transform(dataset['State_Name'])

dataset['Constituency_Name_encoded'] = le.fit_transform(dataset['Constituency_Name'])

dataset['Candidate_Type_encoded'] = le.fit_transform(dataset['Candidate_Type'])

dataset['Party_encoded'] = le.fit_transform(dataset['Party'])

dataset['Party_Type_TCPD_encoded'] = le.fit_transform(dataset['Party_Type_TCPD'])

dataset['Incumbent_encoded'] = le.fit_transform(dataset['Incumbent'])

dataset['Recontest_encoded'] = le.fit_transform(dataset['Recontest'])

print(dataset[['Votes_ns','Valid_Votes_ns','Vote_Share_Percentage_ns','Margin_ns','Margin_Percentage_ns','State_Name_encoded','Constituency_Name_encoded','Candidate_Type_encoded','Party_encoded','Party_Type_TCPD_encoded','Incumbent_encoded','Recontest_encoded']].describe())


# dataset.to_csv("cleaned dataset/LokSabha&RajyaSabhaElectionDetails_Final.csv", index=False)
