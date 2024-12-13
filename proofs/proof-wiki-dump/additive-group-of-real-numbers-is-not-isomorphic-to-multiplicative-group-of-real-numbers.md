theorem Groups_Not_Isomorphic() {
  assert(
    let G1 = ⟨ℝ,+⟩ ∧
    let G2 = ⟨ℝ_{≠0},×⟩ ⇒
    ¬(G1 ≅ G2)
  )
}

proof Groups_Not_Isomorphic_1() {
  setVar(x: G2) →
  assert(-1 ∈ G2) →
  assert(-1 × -1 = 1) →
  lemma Order_Two() {
    assert(order(-1, G2) = 2)
  } →
  theorem Iso_Preserves_Order() {
    assert(∀f:G1→G2, ∀x∈G1 ⇒ (f isomorphism ⇒ order(x,G1) = order(f(x),G2)))
  } →
  assert(∀x∈G1, x + x = 0 ⇒ x = 0) →
  assert(∄x∈G1, order(x,G1) = 2) →
  apply(Iso_Preserves_Order()) →
  assert(¬(G1 ≅ G2))
}

proof Groups_Not_Isomorphic_2() {
  theorem Field_Structure() {
    assert(⟨ℝ,+,×⟩ is_field)
  } →
  theorem Field_Groups_Not_Iso() {
    assert(∀F(is_field) ⇒ ¬(⟨F,+⟩ ≅ ⟨F_{≠0},×⟩))
  } →
  apply(Field_Groups_Not_Iso()) →
  assert(¬(G1 ≅ G2))
}

proof Groups_Not_Isomorphic_3() {
  assert(|{x∈G2 : x × x = 1}| = 2) →
  assert(|{x∈G1 : x + x = 0}| = 1) →
  setVar(f: G2→G1) →
  assume(f is_isomorphism) →
  assert(f(1) = 0) →
  assert(f(-1 × -1) = f(1)) →
  assert(f(-1) + f(-1) = 0) →
  assert(2f(-1) = 0) →
  assert(f(-1) = 0) →
  assert(f(-1) = f(1)) →
  assert(¬(f is_injection)) →
  assert(¬(f is_isomorphism)) →
  contradiction() →
  assert(¬(G1 ≅ G2))
}