theorem CharacteristicSubgroupOfNormalIsNormal() {
  assert(
    ∀G∈Groups ∧ ∀N,H∈Subgroups(G) ⇒
    (N⊴G ∧ H⊴N ∧ H char N) → H⊴G
  )
} ↔

proof CharacteristicSubgroupOfNormalIsNormal() {
  setVar(G: Group) →
  setVar(N: Subgroup(G)) →
  setVar(H: Subgroup(N)) →
  assume(N⊴G ∧ H char N) →
  
  lemma ConjugationIsAutomorphism() {
    assert(
      ∀g∈G ⇒ (φg: N→N, φg(n)=gng⁻¹) ∈ Aut(N)
    )
  } →
  
  setVar(g: G) →
  apply(ConjugationIsAutomorphism()) →
  assert(φg ∈ Aut(N)) →
  apply(H char N) →
  assert(∀φ∈Aut(N) ⇒ φ(H)=H) →
  assert(gHg⁻¹ = φg(H) = H) →
  
  conclude(H⊴G)
}