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

# Initialize the classifier
clf = RandomForestClassifier()

# Train the classifier
clf.fit(X_train, y_train)


joblib.dump(clf, "random_forest_model.pkl")
joblib.dump(le, "label_encoder.pkl")


# class Symptoms(BaseModel):
#     symptoms: list


# @app.post("/predict-diagnosis")
# async def predict_diagnosis(data: Symptoms):
#     try:
#         # Ensure the input has the correct length of features
#         expected_length = X_train.shape[1]

#         if len(data.symptoms) != expected_length:
#             return {
#                 "error": f"Input should have {expected_length} symptoms, but got {len(data.symptoms)}"
#             }

#         # Convert input symptoms into a numpy array
#         symptoms_array = np.array([data.symptoms])

#         # Make a prediction using the trained model
#         prediction = model.predict(symptoms_array)

#         # Convert the prediction back to the disease name
#         predicted_diagnosis = label_encoder.inverse_transform(prediction)

#         return {"diagnosis": predicted_diagnosis[0]}

#     except Exception as e:
#         return {"error": str(e)}
