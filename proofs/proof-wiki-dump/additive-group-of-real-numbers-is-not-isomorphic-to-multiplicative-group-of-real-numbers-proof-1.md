theorem Groups_Not_Isomorphic() {
  assert(
    let G1 = ⟨ℝ, +⟩ ∧
    let G2 = ⟨ℝ_{≠0}, ×⟩ ∧
    ¬(G1 ≅ G2)
  )
} ↔

proof Groups_Not_Isomorphic() {
  setElement(-1 ∈ G2) →
  assert(-1 × -1 = 1) →
  
  lemma Order_Of_Negative_One() {
    assert(
      -1 ∈ G2 ∧ 
      (-1)^2 = 1 →
      order(-1) = 2
    )
  } →
  
  apply(Order_Of_Negative_One()) →
  
  lemma No_Order_Two_In_Reals() {
    assert(
      ∀x ∈ G1 →
      (x + x = 0 → x = 0) ∧
      (x = 0 → order(x) = 1)
    )
  } →
  
  lemma Isomorphism_Preserves_Order() {
    assert(
      ∀f: G1 ≅ G2 →
      ∀a ∈ G1, order(a) = order(f(a))
    )
  } →
  
  apply(No_Order_Two_In_Reals()) →
  apply(Isomorphism_Preserves_Order()) →
  
  assert(
    ∃x ∈ G2(order(x) = 2) ∧
    ¬∃y ∈ G1(order(y) = 2) →
    ¬(G1 ≅ G2)
  )
}