# 🕯️ Thriller Architect

> A chatbot that doesn't just write suspense, it builds it.

**Thriller Architect** is a psychological-thriller plot builder running on a **Mistral** model. I prompt-engineered it to think like a thriller: slow, deliberate, and always hiding something underneath.

Tell it your story idea and it starts planting clues, unreliable narrators, and doubts you never asked for. And the longer you talk to it, the less it behaves like it did at the start.

---

## ✨ Features

- **Act-based plot structuring**: builds your story in stages, with escalating tension
- **Red herrings and twists**: seeds misdirection and saves reveals for the right moment
- **Unreliable narration**: the bot itself becomes harder to trust
- **Shifting internal state**: its behavior changes as the story escalates

## 🧠 How Its Mind Changes

| Stage | What shifts |
|-------|-------------|
| **Early** | Calm, precise, clinical. Low temperature. |
| **Middle** | Tone turns paranoid. Details start to slip. |
| **Late** | Erratic, unsettlingly intimate. Contradicts itself and calls it a plot twist. |
| **Final act** | Trust drops. You can't tell if it's helping you write the thriller or starring in it. |

## 🛠️ How It Works

- **Model:** Mistral
- **Approach:** layered prompt engineering, with staged personas, escalation triggers, and instructions for when the model should loosen its grip on reality
- **No fine-tuning**, just obsessive prompt design and testing

## 🚀 Getting Started

```bash
# clone the repo
git clone https://github.com/<your-username>/thriller-architect.git
cd thriller-architect

# install dependencies
pip install -r requirements.txt

# add your Mistral API key
export MISTRAL_API_KEY="your-key-here"

# run it
python main.py
```

> Adjust the commands above to match your setup.

## 💬 Example

```
You: A detective realizes the case file is in her own handwriting.

Architect: Good. Start there. Now, who else has access to her notes?
```

## 📁 Project Structure

```
thriller-architect/
├── prompts/        # staged system prompts
├── main.py         # entry point
├── requirements.txt
└── README.md
```

## 🗺️ Roadmap

- [ ] More escalation stages
- [ ] Adjustable "unease" level
- [ ] Export finished plots as outlines

## 🤝 Contributing

Ideas, prompts, and twists are welcome. Open an issue or submit a PR.

## 📜 License

MIT, see `LICENSE`.

---

*Don't trust the narrator. Especially this one.*
