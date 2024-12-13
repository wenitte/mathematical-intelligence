theorem BolzanoWeierstrass_Lemma() {
  assert(
    ∀S', S ⊆ ℝ : (S' ⊆ S) ⇒
    ∀l ∈ ℝ : (isLimitPoint(l, S') ⇒ isLimitPoint(l, S))
  )
} ↔

proof BolzanoWeierstrass_Lemma() {
  setVar(S': ℝ, S: ℝ) →
  assume(S' ⊆ S) →
  setVar(l: ℝ) →
  assume(isLimitPoint(l, S')) →
  
  lemma LimitPoint_Definition() {
    assert(
      isLimitPoint(l, S') ↔
      ∀ε > 0 : (Bε(l) ∖ {l}) ∩ S' ≠ ∅
    )
  } →
  
  setVar(ε: ℝ) →
  assume(ε > 0) →
  
  apply(LimitPoint_Definition()) →
  assert((Bε(l) ∖ {l}) ∩ S' ≠ ∅) →
  
  lemma Existence() {
    assert(∃sε ∈ ℝ : sε ∈ (Bε(l) ∖ {l}) ∧ sε ∈ S')
  } →
  
  apply(Existence()) →
  setVar(sε: ℝ) →
  assert(sε ∈ (Bε(l) ∖ {l})) ∧
  assert(sε ∈ S') →
  
  apply(S' ⊆ S) →
  assert(sε ∈ S) →
  
  conclude((Bε(l) ∖ {l}) ∩ S ≠ ∅) →
  conclude(isLimitPoint(l, S))
}