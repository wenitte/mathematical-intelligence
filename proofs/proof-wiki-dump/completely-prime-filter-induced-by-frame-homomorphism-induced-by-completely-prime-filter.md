theorem CompletePrimeFilterInduced() {
  let L: Frame(∨, ∧, ⪯)
  let 2: BooleanLattice(∨, ∧, ⪯)
  let φ_p: L → 2
  let p: CompletePrimeFilter(L)
  
  define φ_p(a: L) {
    return {
      ⊤ if a ∈ p
      ⊥ if a ∉ p
    }
  }
  
  define p_φ(φ: L → 2) {
    return φ⁻¹(⊤)
  }
  
  assert(
    p_φ_p = p
  )
} ↔

proof CompletePrimeFilterInduced() {
  // Reference previous theorems
  lemma FrameHomomorphismOntoTwo() {
    assert(
      ∀p: CompletePrimeFilter(L) → 
      φ_p: L → 2 isFrameHomomorphism
    )
  } →
  
  lemma CompletePrimeFilterInduced() {
    assert(
      ∀φ: L → 2 →
      p_φ = φ⁻¹(⊤) isCompletePrimeFilter(L)
    )
  } →

  // Main proof
  assert(p_φ_p = φ_p⁻¹(⊤)) →
  assert(φ_p⁻¹(⊤) = {a ∈ L | φ_p(a) = ⊤}) →
  assert({a ∈ L | φ_p(a) = ⊤} = {a ∈ L | a ∈ p}) →
  assert({a ∈ L | a ∈ p} = p) →
  conclude(p_φ_p = p)
}