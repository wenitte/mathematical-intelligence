theorem Vector_Angle_Dot_Product() {
  assert(
    ∀v,w ∈ V³ where v≠0 ∧ w≠0 ⇒
    θ = arccos((v·w)/(||v||||w||))
  )
} ↔

proof Vector_Angle_Dot_Product() {
  setVar(v,w: V³, θ: ℝ) →
  assert(||v||||w||cos(θ) = v·w) →  // Cosine Formula for Dot Product
  
  lemma NonZero_Magnitudes() {
    assert(v≠0 ∧ w≠0 ⇒ ||v||≠0 ∧ ||w||≠0)
  } →
  
  apply(NonZero_Magnitudes()) →
  assert(cos(θ) = (v·w)/(||v||||w||)) →
  
  lemma Angle_Range() {
    assert(0 ≤ θ ≤ π ⇒ -1 ≤ cos(θ) ≤ 1)
  } →
  
  apply(Angle_Range()) →
  assert(arccos(cos(θ)) = arccos((v·w)/(||v||||w||))) →
  
  lemma Arccos_Cos_Identity() {
    assert(0 ≤ θ ≤ π ⇒ arccos(cos(θ)) = θ)
  } →
  
  apply(Arccos_Cos_Identity()) →
  assert(θ = arccos((v·w)/(||v||||w||)))
}