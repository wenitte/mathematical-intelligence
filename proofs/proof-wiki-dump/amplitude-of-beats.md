theorem Amplitude_of_Beats() {
  letVar(W₁, W₂: HarmonicWave)
  letVar(f₁, f₂: Frequency)
  letVar(a: Amplitude)
  assert(
    (amplitude(W₁) = a ∧ amplitude(W₂) = a) ∧
    exhibits_beats(superposition(W₁, W₂)) →
    ∀t ∈ ℝ: amplitude_beats(t) = 2a·cos(π|f₁ - f₂|t - ε/2)
  )
}

proof Amplitude_of_Beats() {
  letVar(ω₁, ω₂: AngularFrequency) →
  setVar(x = 0) →
  assert(
    φ₁(t) = a·sin(ω₁t) ∧
    φ₂(t) = a·sin(ω₂t + ε)
  ) →
  
  lemma Angular_Frequency_Definition() {
    assert(
      ω₁ = 2πf₁ ∧
      ω₂ = 2πf₂
    )
  } →
  
  assert(φ₁(t) + φ₂(t) = a·sin(ω₁t) + a·sin(ω₂t + ε)) →
  apply(Sine_Plus_Sine_Formula()) →
  assert(
    φ₁(t) + φ₂(t) = 2a·sin((ω₁t + ω₂t + ε)/2)·cos((ω₁t - (ω₂t + ε))/2)
  ) →
  simplify() →
  assert(
    φ₁(t) + φ₂(t) = 2a·sin((ω₁ + ω₂)t + ε)/2)·cos((ω₁ - ω₂)t - ε)/2)
  ) →
  
  apply(Cosine_Even_Property()) →
  assert(
    |φ₁(t) + φ₂(t)| ≤ |2a·cos((|ω₁ - ω₂|t - ε)/2)|
  ) →
  
  apply(Angular_Frequency_Definition()) →
  assert(
    amplitude_beats(t) = 2a·cos(|2πf₁ - 2πf₂|t - ε)/2)
  ) →
  simplify() →
  assert(
    amplitude_beats(t) = 2a·cos(π|f₁ - f₂|t - ε/2)
  )
}