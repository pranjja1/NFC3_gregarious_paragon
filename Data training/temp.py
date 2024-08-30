import pandas as pd
dataset = pd.read_csv("cleaned dataset/LokSabha&RajyaSabhaElectionDetails_Final.csv")
print(dataset['Vote_Share_Percentage'].describe())