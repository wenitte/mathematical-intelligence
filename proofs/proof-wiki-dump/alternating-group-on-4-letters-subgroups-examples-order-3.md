theorem A4_Subgroup_Order3() {
  assert(
    let A4 = AlternatingGroup(4) ∧
    let P = {e, a, p} ⊂ A4 →
    IsSubgroup(P, A4)
  )
} ↔

proof A4_Subgroup_Order3() {
  // Show P is a group
  lemma CyclicProperties() {
    assert(
      a² = p ∧
      a³ = e
    )
  } →
  
  apply(CyclicProperties()) →
  assert(P = ⟨a⟩) →  // P is cyclic group generated by a
  
  // Calculate left cosets
  lemma LeftCosets() {
    assert(
      tP = {t∘e, t∘a, t∘p} = {t, b, q} ∧
      uP = {u∘e, u∘a, u∘p} = {u, c, r} ∧
      vP = {v∘e, v∘a, v∘p} = {v, d, s}
    )
  } →

  // Calculate right cosets  
  lemma RightCosets() {
    assert(
      Pt = {e∘t, a∘t, p∘t} = {t, c, s} ∧
      Pu = {e∘u, a∘u, p∘u} = {u, d, q} ∧
      Pv = {e∘v, a∘v, p∘v} = {v, b, r}
    )
  } →

  // Final conclusion
  assert(
    IsClosed(P) ∧
    HasIdentity(P, e) ∧
    HasInverses(P) ∧
    P ⊂ A4
  ) →
  conclude(IsSubgroup(P, A4))
}