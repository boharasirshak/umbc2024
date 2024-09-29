import io
from fastapi import FastAPI, File, UploadFile, HTTPException, Request
import spacy
import speech_recognition as sr
from pydub import AudioSegment
import pandas as pd
import joblib
from spacy.matcher import PhraseMatcher

recognizer = sr.Recognizer()
app = FastAPI()
nlp = spacy.load("en_core_web_sm")
model = joblib.load("model.pkl")
label_encoder = joblib.load("label_encoder.pkl")


symptom_list = [
    "Upper abdominal pain",
    "Lower abdominal pain",
    "Abscess (Collection of pus)",
    "Alcohol abuse",
    "Anxiety (Nervousness)",
    "Arm ache or pain",
    "Back ache or pain",
    "Bleeding tendency",
    "Blood in vomit",
    "Bloody diarrhea",
    "Pain or soreness of breast",
    "Calf pain",
    "Chest pressure",
    "Chills",
    "Change in behavior",
    "Constipation",
    "Cough",
    "Dark stools",
    "Depressed",
    "Diarrhea",
    "Dizziness",
    "Double vision (Diplopia)",
    "Ear pressure",
    "Pain in the ear",
    "Elbow ache or pain",
    "Eye pain (Irritation)",
    "Facial pain",
    "Fainting",
    "Fever",
    "Fever in the returning traveler",
    "Fever of unknown origin",
    "Flank pain",
    "Frequent urination (Frequency)",
    "Foot pain",
    "Cranky, crying, fussy, irritable child",
    "Groin pain",
    "Delusions or hallucinations",
    "Hand, finger ache or pain",
    "Head injury",
    "Headache",
    "Heel pain",
    "Heat illness",
    "Hip pain",
    "Hives",
    "Hoarse voice",
    "Hypothermia (Low temperature)",
    "Incontinence (leaking urine)",
    "Insect sting",
    "Insomnia (Trouble sleeping)",
    "Skin itching",
    "Joint pain",
    "Kidney pain (Flank pain)",
    "Knee pain",
    "Laceration",
    "Leg ache or pain",
    "Swelling of both legs",
    "Lethargy (Sluggishness)",
    "Mouth pain",
    "Muscle pain",
    "Nail Injury",
    "Nasal bleeding",
    "Nasal injury",
    "Nausea",
    "Neck ache or pain",
    "Neck swelling",
    "Numbness",
    "Obesity",
    "Overdose",
    "Painful urination",
    "Heart pulsations and palpitations",
    "Pelvic pain",
    "Penile discharge",
    "Penis pain",
    "Poisoning",
    "Pregnancy problem",
    "Psychiatric problem",
    "Puncture wound",
    "Rash",
    "Rectal pain",
    "Rectal swelling",
    "Scrotal pain",
    "Scrotal swelling",
    "Seizure",
    "Shortness of breath",
    "Shoulder ache or pain",
    "Sinus pain and pressure",
    "Skin trauma",
    "Snake bite",
    "Sore throat",
    "Speech problem",
    "Spider bite",
    "Substance abuse (Drug abuse)",
    "Suicidal tendencies",
    "Swallowing problem (Dysphagia)",
    "Swelling",
    "Toe pain",
    "Tooth pain",
    "Trauma",
    "Traveler's diarrhea",
    "Unsteady gait (Trouble walking)",
    "Vaginal bleeding",
    "Vaginal bleeding after menopause",
    "Vaginal bleeding during pregnancy",
    "Vaginal discharge",
    "Vaginal itching",
    "Vaginal pain",
    "Vertigo (Room spinning)",
    "Visual problems",
    "Vomiting",
    "General weakness",
    "Weakness (Muscle localized)",
    "Tired",
    "Wrist pain",
    "Throat pain",
    "Tremors",
    "Weight loss, unexplained",
    "Tongue swelling",
    "Inconsolable baby",
    "Wheezing (Noisy breathing)",
    "Swollen lymph nodes (Large lymph nodes)",
    "Failure to thrive",
    "Behavioral problem",
    "Itchy rash (Pruritic rash)",
    "Headache after trauma",
    "Learning difficulties",
    "Blood in urine (Hematuria)",
    "Urinary retention (Inability to urinate)",
    "Liver failure (Cirrhosis)",
    "Choking",
    "Painful rash",
    "Ingestion",
    "Melena (Black stools from blood)",
    "Vomiting coffee ground material",
    "Ringing in ears (Tinnitus)",
    "Mouth ulcers",
    "Mouth swelling",
    "Eye redness",
    "Sneezing",
    "Bleeding gums",
    "Loss of balance",
    "Bleeding in brain",
    "Cyanosis (Blue skin coloration)",
    "Muscle spasm",
    "Drooling",
    "Abdominal swelling (Stomach swelling)",
    "Skin growths",
    "Hand numbness (paresthesias)",
    "Ankle pain",
    "Hemoptysis (Coughing blood)",
    "Jaundice (Yellowing skin)",
    "Night sweats",
    "Flatulence (Passing gas)",
    "Blister (Pocket of fluid)",
    "Hair loss (Baldness)",
    "Jaw pain",
    "Impotence",
    "Heart murmur (Abnormal heart sound)",
    "Pustule (Collection of pus)",
    "Skin pain",
    "Hot skin",
    "Skin swelling",
    "Lip swelling",
    "Eye swelling",
    "Foot swelling",
    "Visual flashing lights",
    "Eye floaters",
    "Amenorrhea (No menstruation)",
    "Blurry vision",
    "Painful gums",
    "Swollen gums",
    "Low blood sugar",
    "Low blood pressure",
    "Darkening of the skin (Hyperpigmentation)",
    "Low heart rate",
    "Foot itching",
    "Hot flashes",
    "Infertility (Female)",
    "Increased facial hair",
    "Arm swelling",
    "Calf swelling",
    "Ear swelling",
    "Wrist swelling",
    "Maroon stools",
    "Arm cut (laceration)",
    "Hand cut (laceration)",
    "Leg cut (laceration)",
    "Foot cut (laceration)",
    "Arm itching",
    "Hand redness",
    "Foot redness",
    "Arm redness",
    "Leg redness",
    "Hand itching",
    "Leg itching",
    "Steatorrhea (Excess fat in stool)",
    "Upper leg pain",
    "Armpit pain",
    "Sweating",
    "Nasal congestion",
    "Joint stiffness",
    "Skin sores",
    "Chest burning",
    "Memory loss",
    "Arm numbness (paresthesias)",
    "Leg numbness (paresthesias)",
    "Foot numbness (paresthesias)",
    "Face numbness (paresthesias)",
    "Dementia",
    "Facial droop (weakness)",
    "Limping in a child",
    "Increased thirst",
    "Increased urination (polyuria)",
    "Shin pain",
    "Stings",
    "Sleep disorders",
    "Drooping eyelid (Ptosis)",
    "Snoring",
    "Dry skin",
    "Itchy eyes",
    "Elbow swelling",
    "Chest pain",
    "Skin infection",
    "Stomach and abdominal pain",
    "Anger",
    "Hurts to breathe",
    "Difficulty breathing",
    "Pulling at ears",
    "Skin bumps",
    "Congestion in chest or lungs",
    "Discharge from ear",
    "Low back ache or pain",
    "Unusual color or odor of urine",
    "Penis inflammation or swelling",
    "Excessive appetite",
    "Retaining fluid",
    "Lump or mass of breast",
    "Neck stiffness or tightness",
    "Agitated",
    "Confusion",
    "Headache and weakness",
    "Confusion and headache",
    "Nipple discharge",
    "Shoulder stiffness or tightness",
    "Arm stiffness or tightness",
    "High blood pressure",
    "High blood sugar",
]

symptom_synonyms = {
    "nauseous": "nausea",
    "headache": "headache",
    "sick to my stomach": "nausea",
}

matcher = PhraseMatcher(nlp.vocab, attr="LOWER")
patterns = [nlp(symptom.lower()) for symptom in symptom_list]
matcher.add("SymptomMatcher", patterns)


@app.post("/voice-to-text/")
async def voice_to_text(file: UploadFile = File(...)):
    try:
        # Read the uploaded file
        audio_bytes = await file.read()

        # Convert audio file to a format SpeechRecognition can handle
        audio = AudioSegment.from_file(io.BytesIO(audio_bytes))
        audio.export("temp.wav", format="wav")

        # Use SpeechRecognition to convert speech to text
        with sr.AudioFile("temp.wav") as source:
            audio_data = recognizer.record(source)
            text = recognizer.recognize_google(audio_data)

        return {"transcribed_text": text}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/predict-symptoms/")
async def predict_diagnosis(request: Request):
    # Get user input text from the request
    data = await request.json()
    user_input = data.get("text", "")

    # Process the user input using spaCy
    doc = nlp(user_input)

    # Extract matched symptoms
    matches = matcher(doc)
    extracted_symptoms = set()  # Use set to avoid duplicates
    for match_id, start, end in matches:
        symptom = doc[start:end].text
        extracted_symptoms.add(symptom.lower())  # Match the lowercase version

    standardized_symptoms = set()
    for symptom in extracted_symptoms:
        if symptom in symptom_synonyms:
            standardized_symptoms.add(
                symptom_synonyms[symptom]
            )  # Map to standard symptom
        else:
            standardized_symptoms.add(symptom)

    # Convert extracted symptoms into the format required by your model (0 or 1)
    symptom_values = [0] * len(symptom_list)  # Initialize with 0
    for symptom in extracted_symptoms:
        if symptom in [s.lower() for s in symptom_list]:
            index = [s.lower() for s in symptom_list].index(symptom)
            symptom_values[index] = 1  # Set symptom presence to 1

    # Create a DataFrame with the same feature names as used during training
    symptoms_df = pd.DataFrame([symptom_values], columns=symptom_list)

    # Make a prediction using the model
    prediction = model.predict(symptoms_df)

    # Get the probabilities of each diagnosis (class)
    probabilities = model.predict_proba(symptoms_df)[0]

    # Get the list of all possible diagnoses
    possible_diagnoses = label_encoder.inverse_transform(range(len(probabilities)))

    probability_cutoff = 0.05

    # Filter and return only diseases with probabilities greater than the cutoff
    diagnosis_probabilities = {
        diagnosis: float(prob)
        for diagnosis, prob in zip(possible_diagnoses, probabilities)
        if prob > probability_cutoff
    }

    sorted_diagnosis_probabilities = dict(
        sorted(diagnosis_probabilities.items(), key=lambda item: item[1], reverse=True)
    )

    # Find the predicted diagnosis (with highest probability)
    predicted_diagnosis = label_encoder.inverse_transform(prediction)

    return {
        "user_input": user_input,
        "extracted_symptoms": list(extracted_symptoms),
        "standardized_symptoms": list(
            standardized_symptoms
        ),  # Show standardized symptoms
        "predicted_diagnosis": predicted_diagnosis[0],
        "diagnosis_probabilities": sorted_diagnosis_probabilities,
    }
