import numpy as np
import pandas as pd

from sklearn.datasets import load_breast_cancer
from sklearn.preprocessing import StandardScaler

cancer = load_breast_cancer()
df_cancer = pd.DataFrame(
    np.c_[cancer["data"], cancer["target"]],
    columns=np.append(cancer["feature_names"], ["target"]),
)

print(df_cancer.isnull().sum())

df_cancer.columns = [
    "mean_radius",
    "mean_texture",
    "mean_perimeter",
    "mean_area",
    "mean_smoothness",
    "mean_compactness",
    "mean_concavity",
    "mean_concave_points",
    "mean_symmetry",
    "mean_fractal_dimension",
    "se_radius",
    "se_texture",
    "se_perimeter",
    "se_area",
    "se_smoothness",
    "se_compactness",
    "se_concavity",
    "se_concave_points",
    "se_symmetry",
    "se_fractal_dimension",
    "worst_radius",
    "worst_texture",
    "worst_perimeter",
    "worst_area",
    "worst_smoothness",
    "worst_compactness",
    "worst_concavity",
    "worst_concave_points",
    "worst_symmetry",
    "worst_fractal_dimension",
    "target",
]

# Map the target variable to descriptive labels
df_cancer["target"] = df_cancer["target"].map({0: "benign", 1: "malignant"})


# Separate features and target
X = df_cancer.drop("target", axis=1)  # Features
y = df_cancer["target"]  # Target

# Standardize the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Create a new DataFrame with scaled features
df_cancer_scaled = pd.DataFrame(X_scaled, columns=X.columns)
df_cancer_scaled["target"] = y.values

# Save the DataFrame to a CSV file
df_cancer.to_csv("breast_cancer_usa_formatted.csv", index=False)
