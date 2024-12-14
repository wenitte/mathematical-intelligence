theorem CircuitsOfMatroid() {
  let(S: Set, finite) ∧
  let(𝒞: Set[Set[S]], nonEmpty) ∧
  assert(
    (∀C1,C2 ∈ 𝒞 → C1 ≠ C2 → C1 ⊈ C2) ∧  // C2 axiom
    (∅ ∉ 𝒞) ∧  // C1 axiom
    (∀C1,C2 ∈ 𝒞 → C1 ≠ C2 ∧ z ∈ (C1 ∩ C2) ∧ w ∈ (C1 \ C2) → 
      ∃C3 ∈ 𝒞: w ∈ C3 ⊆ (C1 ∪ C2) \ {z})  // C4 axiom
  ) →
  let(θ: Tuple[S] → Tuple[{0,1}]) →
  let(t: Tuple[S] → ℤ) →
  let(ρ: 𝒫(S) → ℤ) →
  let(M: Matroid(S,ℐ)) →
  assert(𝒞 = circuits(M))
} ↔

proof CircuitsOfMatroid() {
  let(𝒞_M: circuits(M)) →
  
  lemma L4() {
    assert(∀C ∈ 𝒞_M → ∃C' ∈ 𝒞: C' ⊆ C)
  } →
  
  lemma L5() {
    assert(∀C ∈ 𝒞 → ∃C' ∈ 𝒞_M: C' ⊆ C)
  } →

  // Prove 𝒞_M ⊆ 𝒞
  proof SubsetForward() {
    setVar(C: 𝒞_M) →
    apply(L4()) →
    assert(∃C1 ∈ 𝒞: C1 ⊆ C) →
    apply(L5()) →
    assert(∃C' ∈ 𝒞_M: C' ⊆ C1) →
    apply(TransitiveSubset(C',C1,C)) →
    apply(CircuitMinimality()) →
    assert(C' = C) →
    assert(C = C1) →
    assert(C ∈ 𝒞)
  } →

  // Prove 𝒞 ⊆ 𝒞_M
  proof SubsetBackward() {
    setVar(C: 𝒞) →
    apply(L5()) →
    assert(∃C1 ∈ 𝒞_M: C1 ⊆ C) →
    apply(L4()) →
    assert(∃C' ∈ 𝒞: C' ⊆ C1) →
    apply(TransitiveSubset(C',C1,C)) →
    apply(C2Axiom()) →
    assert(C' = C) →
    assert(C = C1) →
    assert(C ∈ 𝒞_M)
  } →

  apply(SetEquality(𝒞,𝒞_M)) →
  assert(𝒞 = 𝒞_M)
}