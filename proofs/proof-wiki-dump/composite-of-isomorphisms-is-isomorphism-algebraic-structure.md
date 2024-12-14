theorem Composite_Isomorphisms() {
  let S1 = struct(S1, {odot[1...n]})
  let S2 = struct(S2, {*[1...n]})
  let S3 = struct(S3, {⊕[1...n]})
  let φ: S1 → S2
  let ψ: S2 → S3
  
  assert(
    isIsomorphism(φ) ∧ isIsomorphism(ψ) ⇒
    isIsomorphism(φ ∘ ψ)
  )
} ↔

proof Composite_Isomorphisms() {
  assume(isIsomorphism(φ) ∧ isIsomorphism(ψ)) →
  
  assert(
    isIsomorphism(x) ↔ (isHomomorphism(x) ∧ isBijection(x))
  ) →
  
  lemma Homomorphism_Composition() {
    assert(
      isHomomorphism(φ) ∧ isHomomorphism(ψ) ⇒
      isHomomorphism(φ ∘ ψ)
    )
  } →
  
  lemma Bijection_Composition() {
    assert(
      isBijection(φ) ∧ isBijection(ψ) ⇒
      isBijection(φ ∘ ψ)
    )
  } →
  
  apply(Homomorphism_Composition()) →
  apply(Bijection_Composition()) →
  
  assert(
    isHomomorphism(φ ∘ ψ) ∧ isBijection(φ ∘ ψ)
  ) →
  
  conclude(
    isIsomorphism(φ ∘ ψ)
  )
}