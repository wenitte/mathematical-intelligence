theorem ZornsLemma_FromChoice() {
  assert(
    AxiomOfChoice → ZornsLemma
  )
} ↔

proof ZornsLemma_FromChoice() {
  assumeContradiction() →
  setVar(X: Set) →
  assert(∀x ∈ X ∃y ∈ X: x ≺ y) →
  
  applyAxiomOfChoice() →
  assert(∃f: X → X: ∀x ∈ X: x ≺ f(x)) →
  
  define(𝒞: {C | C is chain in X}) →
  assert(∀C ∈ 𝒞: ∃ upperBound(C) ∈ X) →
  
  applyAxiomOfChoice() →
  assert(∃g: 𝒞 → X: ∀C ∈ 𝒞: g(C) is upperBound(C)) →
  
  setVar(p ∈ X) →
  define(h: On → X by TransfiniteRecursion) {
    assert(h(0) = p) ∧
    assert(h(α⁺) = f(h(α))) ∧
    assert(h(λ) = f(g(h[λ])) where λ is limitOrdinal)
  } →
  
  lemma StrictlyIncreasing() {
    assert(∀α,β ∈ On: α < β → h(α) ≺ h(β))
  } →
  
  define(h': On × h(On)) →
  assert(h'⁻¹: h(On) → On is surjective) →
  
  applyAxiomOfReplacement() →
  assert(On is set) →
  
  applyBuraliFortisParadox() →
  assert(contradiction()) →
  
  conclude(∃x ∈ X: ¬∃y ∈ X: x ≺ y)
}