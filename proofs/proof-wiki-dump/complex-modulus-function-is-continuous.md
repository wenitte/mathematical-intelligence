theorem Complex_Modulus_Continuity() {
  assert(
    ∀z₀ ∈ ℂ ⇒ 
    Continuous(f: z ↦ |z|, point: z₀)
  )
} ↔

proof Complex_Modulus_Continuity() {
  setVar(z₀: ℂ) →
  setVar(ε: ℝ, constraint: ε > 0) →
  setVar(z: ℂ) →
  assume(|z - z₀| < ε) →
  
  lemma Reverse_Triangle_Inequality() {
    assert(
      ∀a,b ∈ ℂ ⇒ ||a| - |b|| ≤ |a - b|
    )
  } →
  
  apply(Reverse_Triangle_Inequality(), {a: z, b: z₀}) →
  assert(||z| - |z₀|| ≤ |z - z₀|) →
  assert(||z| - |z₀|| < ε) →
  
  def_continuity(
    ∀ε > 0 ∃δ > 0: |z - z₀| < δ ⇒ ||z| - |z₀|| < ε,
    δ = ε
  ) →
  
  conclude(
    Continuous(f: z ↦ |z|, point: z₀)
  )
}