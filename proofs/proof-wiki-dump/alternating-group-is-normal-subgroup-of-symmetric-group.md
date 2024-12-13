theorem Alternating_Group_Normal_Subgroup() {
  requires(n ≥ 2, n ∈ ℕ)
  setVar(Sn: SymmetricGroup(n))
  setVar(An: AlternatingGroup(n))
  assert(
    isNormalSubgroup(An, Sn) ∧ [Sn : An] = 2
  )
} ↔

proof Alternating_Group_Normal_Subgroup() {
  setVar(sgn: Sn → C2) →
  assert(isSurjective(sgn)) →
  
  lemma FirstIsomorphismTheorem() {
    assert(ker(sgn) = An) ∧
    assert(An = {σ ∈ Sn | sgn(σ) = 1})
  } →
  
  lemma Index2Normal() {
    assert(
      ∀G,H(isSubgroup(H,G) ∧ [G:H] = 2 → isNormalSubgroup(H,G))
    )
  } →
  
  apply(FirstIsomorphismTheorem()) →
  assert([Sn : An] = |C2| = 2) →
  apply(Index2Normal()) →
  assert(isNormalSubgroup(An, Sn))
}

example n2_case() {
  requires(n = 2)
  assert(Sn ≅ C2) ∧
  assert(An = {e_S2})
}