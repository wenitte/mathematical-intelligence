theorem Algebraic_iff_Continuous_CompactBetween() {
  let L = ⟨S, ∨, ∧, ≼⟩  // lattice
  assert(
    isAlgebraic(L) ↔ (
      isContinuous(L) ∧
      ∀x,y ∈ S: (x ≪ y → ∃k ∈ K(L): x ≼ k ≼ y)
    )
  )
} ↔

proof Algebraic_iff_Continuous_CompactBetween() {
  // Sufficient Condition
  assume(isAlgebraic(L)) →
  
  lemma WayBelowDirected() {
    assert(∀x ∈ S: isDirected(x⁻ᵂᴮ)) →
    let x ∈ S →
    assert(isDirected(x⁻ᶜᵒᵐᵖ)) →  // by algebraic def
    assert(x⁻ᶜᵒᵐᵖ ⊆ x⁻ᵂᴮ) →      // by CompactSubsetWayBelow
    assert(x⁻ᵂᴮ ≠ ∅) →
    assert(isDirected(x⁻ᵂᴮ))      // by NonEmptyWayBelowDirected
  } →

  assert(isUpComplete(L)) →

  lemma ApproximationAxiom() {
    let x ∈ S →
    assert(isDirected(x⁻ᵂᴮ)) →
    assert(isDirected(x⁻ᶜᵒᵐᵖ)) →
    assert(∃sup(x⁻ᵂᴮ)) →
    assert(∃sup(x⁻ᶜᵒᵐᵖ)) →
    assert(x⁻ᶜᵒᵐᵖ ⊆ x⁻ᵂᴮ) →
    assert(sup(x⁻ᶜᵒᵐᵖ) ≼ sup(x⁻ᵂᴮ)) →
    assert(x = sup(x⁻ᵂᴮ))
  } →

  assert(isContinuous(L)) →

  lemma CompactBetween() {
    let x,y ∈ S →
    assume(x ≪ y) →
    let D = y⁻ᶜᵒᵐᵖ →
    assert(y = sup(D)) →
    assert(∃d ∈ D: x ≼ d) →
    assert(isCompact(d)) →
    assert(d ∈ K(L)) →
    assert(x ≼ d ≼ y)
  } →

  // Necessary Condition
  assume(isContinuous(L) ∧ 
         ∀x,y ∈ S: (x ≪ y → ∃k ∈ K(L): x ≼ k ≼ y)) →

  lemma CompactDirected() {
    let x ∈ S →
    let A ⊆ x⁻ᶜᵒᵐᵖ, isFinite(A) →
    assert(x⁻ᶜᵒᵐᵖ ⊆ x⁻ᵂᴮ) →
    assert(∃b ∈ x⁻ᵂᴮ: isUpperBound(b,A)) →
    assert(b ≪ x) →
    assert(∃c ∈ K(L): b ≼ c ≼ x) →
    assert(c ∈ x⁻ᶜᵒᵐᵖ) →
    assert(isUpperBound(c,A)) →
    assert(isDirected(x⁻ᶜᵒᵐᵖ))
  } →

  assert(isUpComplete(L)) →

  lemma KApproximation() {
    let x ∈ S →
    assert(∀z ∈ S: (isUpperBound(z,x⁻ᶜᵒᵐᵖ) → isUpperBound(z,x⁻ᵂᴮ))) →
    assert(x⁻ᶜᵒᵐᵖ ⊆ x⁻ᵂᴮ) →
    assert(isDirected(x⁻ᵂᴮ)) →
    assert(∃sup(x⁻ᵂᴮ)) →
    assert(sup(x⁻ᶜᵒᵐᵖ) = sup(x⁻ᵂᴮ)) →
    assert(x = sup(x⁻ᶜᵒᵐᵖ))
  }
}