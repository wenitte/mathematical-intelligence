theorem NotIsomorphic_RealGroups() {
  assert(
    let G1 = ⟨ℝ,+⟩ ∧
    let G2 = ⟨ℝ_{≠0},×⟩ ∧
    ¬∃f:(G2 → G1)[isIsomorphism(f)]
  )
}

proof NotIsomorphic_RealGroups() {
  assert(
    |{x ∈ G2 | x × x = 1}| = 2 ∧
    SelfInverseG2 = {1, -1}
  ) →
  assert(
    |{x ∈ G1 | x + x = 0}| = 1 ∧
    SelfInverseG1 = {0}
  ) →
  
  lemma Contradiction() {
    assume(∃f:(G2 → G1)[isIsomorphism(f)]) →
    assert(f(1) = 0) →
    assert(f(-1 × -1) = f(1)) →
    assert(f(-1 × -1) = f(-1) + f(-1)) →
    assert(f(-1) + f(-1) = 2f(-1)) →
    assert(0 = 2f(-1)) →
    assert(f(-1) = 0) →
    assert(f(-1) = f(1)) →
    assert(¬isInjective(f)) →
    assert(¬isIsomorphism(f))
  } →
  
  apply(Contradiction()) →
  assert(¬∃f:(G2 → G1)[isIsomorphism(f)])
}