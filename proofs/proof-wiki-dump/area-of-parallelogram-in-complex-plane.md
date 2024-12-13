theorem Parallelogram_Complex_Area() {
  assert(
    ∀z₁,z₂ ∈ ℂ,
    let(ABCD: Parallelogram, AD = z₁, AB = z₂) ⇒
    Area(ABCD) = z₁ × z₂
  )
} ↔

proof Parallelogram_Complex_Area() {
  setVar(z₁,z₂: ℂ) →
  setVar(ABCD: Parallelogram) →
  
  lemma Basic_Parallelogram_Area() {
    assert(
      Area(Parallelogram) = base × height
    )
  } →
  
  assert(base = |z₂|) →
  assert(height = |z₁| × sin(θ)) →
  
  lemma Complex_Cross_Product_Definition() {
    assert(
      ∀a,b ∈ ℂ ⇒
      a × b = |a| × |b| × sin(θ)
    )
  } →
  
  apply(Basic_Parallelogram_Area()) ∧
  apply(Complex_Cross_Product_Definition()) →
  
  assert(
    Area(ABCD) = |z₂| × (|z₁| × sin(θ)) ↔
    Area(ABCD) = |z₁| × |z₂| × sin(θ) ↔
    Area(ABCD) = z₁ × z₂
  )
}