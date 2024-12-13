theorem SimilarPlaneNumbersMeanProp() {
  assert(
    ∀m,n ∈ ℤ⁺ ∧ IsSimilarPlaneNum(m,n) ⇒
    ∃r ∈ ℤ⁺ : [
      IsGeometricSeq(m,r,n) ∧
      HasDuplicateRatio(m,n)
    ]
  )
} ↔

proof SimilarPlaneNumbersMeanProp() {
  setVar(m,n: ℤ⁺) →
  assume(IsSimilarPlaneNum(m,n)) →
  
  lemma Decomposition() {
    assert(
      ∃p₁,p₂,q₁,q₂ ∈ ℤ⁺ : [
        m = p₁p₂ ∧
        n = q₁q₂ ∧
        p₁/q₁ = p₂/q₂ ∧
        p₁ < p₂ ∧
        q₁ < q₂
      ]
    )
  } →

  apply(Decomposition()) →
  
  setVar(r := p₁q₂) →
  assert(r = q₁p₂) →
  
  lemma RatioEquality() {
    assert(
      m/r = p₁p₂/(p₁q₂) = p₂/q₂ ∧
      r/n = q₁p₂/(q₁q₂) = p₂/q₂
    )
  } →
  
  apply(RatioEquality()) →
  
  assert(m/r = r/n) →
  assert(IsGeometricSeq(m,r,n)) →
  
  lemma DuplicateRatio() {
    assert(
      p₁/q₁ = m/r = r/n = p₂/q₂ ⇒
      HasDuplicateRatio(m,n)
    )
  } →
  
  apply(DuplicateRatio()) →
  conclude()
}