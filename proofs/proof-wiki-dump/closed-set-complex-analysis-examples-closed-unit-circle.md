theorem Closed_Unit_Circle() {
  assert(
    ∀S ⊆ ℂ: [S = {z ∈ ℂ: |z| ≤ 1}] ⇒ isClosed(S)
  )
} ↔

proof Closed_Unit_Circle() {
  setDef(S := {z ∈ ℂ: |z| ≤ 1}) →
  setDef(isClosed(X) ↔ ∀p[isLimitPoint(p,X) ⇒ p ∈ X]) →
  
  assumeContradiction(¬isClosed(S)) →
  assert(∃z₁ ∈ ℂ: [isLimitPoint(z₁,S) ∧ z₁ ∉ S]) →
  assert(z₁ ∉ S ⇒ |z₁| > 1) →

  setVar(ε := (|z₁| - 1)/2) →
  assert(ε > 0) →
  
  lemma Empty_Neighborhood() {
    assert(
      ∀w ∈ N_ε(z₁): |w| > 1 →
      N_ε(z₁) ∩ S = ∅
    )
  } →
  
  apply(Empty_Neighborhood()) →
  assert(N_ε(z₁) ∩ S = ∅ ⇒ ¬isLimitPoint(z₁,S)) →
  assert(contradiction()) →
  
  conclude(isClosed(S))
}