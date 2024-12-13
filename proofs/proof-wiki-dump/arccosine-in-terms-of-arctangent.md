theorem Arccos_Arctangent_Identity() {
  assert(
    ∀x ∈ ℝ, -1 < x ≤ 1 ⇒ 
    arccos(x) = 2·arctan(√((1-x)/(1+x)))
  )
} ↔

proof Arccos_Arctangent_Identity() {
  setVar(θ: ℝ) →
  assert(θ = arccos(x)) →
  assert(x = cos(θ)) →
  assert(0 ≤ θ < π) →
  
  step1() {
    2·arctan(√((1-x)/(1+x))) →
    2·arctan(√((1-cos(θ))/(1+cos(θ))))
  } →

  lemma Double_Angle_Cosine() {
    assert(
      1-cos(θ) = 2·sin²(θ/2) ∧
      1+cos(θ) = 2·cos²(θ/2)
    )
  } →

  apply(Double_Angle_Cosine()) →
  
  step2() {
    2·arctan(√((2·sin²(θ/2))/(2·cos²(θ/2)))) →
    2·arctan(sin(θ/2)/cos(θ/2)) →
    2·arctan(tan(θ/2))
  } →

  lemma Arctan_Identity() {
    assert(
      ∀α ∈ ℝ, 0 ≤ α < π/2 ⇒
      2·arctan(tan(α)) = 2α
    )
  } →

  apply(Arctan_Identity()) →
  assert(θ = arccos(x)) →
  conclude(2·arctan(√((1-x)/(1+x))) = arccos(x))
}