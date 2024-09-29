from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

df = pd.read_csv("symptoms.csv", index_col=0)

le = LabelEncoder()
df["Diagnosis"] = le.fit_transform(df["Diagnosis"])

X = df.drop("Diagnosis", axis=1)
y = df["Diagnosis"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

clf = RandomForestClassifier()
clf.fit(X_train, y_train)


joblib.dump(clf, "model.pkl")
joblib.dump(le, "label_encoder.pkl")
