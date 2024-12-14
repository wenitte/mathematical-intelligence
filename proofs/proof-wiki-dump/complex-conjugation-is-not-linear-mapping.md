theorem Complex_Conjugation_Not_Linear() {
  let conj: ℂ → ℂ where conj(z) = z̄
  assert(
    conj is not a linear mapping
  )
} ↔

proof Complex_Conjugation_Not_Linear() {
  setVar(z₁, z₂: ℂ) →
  lemma Linear_Property() {
    assert(
      linear_mapping(T) ⟹ T(az) = aT(z) for all a,z ∈ ℂ
    )
  } →
  
  setExample(i·1) →
  assert(conj(i·1) = conj(i)·conj(1)) by ProductOfConjugates() →
  assert(conj(i)·conj(1) = -i·1) by ComplexConjugateDef() →
  assert(-i·1 ≠ i·conj(1)) →
  
  conclude(
    ∃z∈ℂ where conj(i·z) ≠ i·conj(z) →
    ¬linear_mapping(conj)
  )
}