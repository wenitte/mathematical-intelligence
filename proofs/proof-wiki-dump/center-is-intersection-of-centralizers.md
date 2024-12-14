theorem Center_Equals_Centralizer_Intersection() {
  assert(
    ∀G: Group ⇒ Z(G) = ⋂_{g ∈ G} C_G(g)
  )
} ↔

proof Center_Equals_Centralizer_Intersection() {
  setVar(G: Group) →
  let(Z ≔ Z(G)) →
  let(C ≔ ⋂_{g ∈ G} C_G(g)) →

  lemma Z_Subset_C() {
    assert(∀x ∈ Z ⇒ x ∈ C) ↔
    proof {
      setVar(x ∈ Z) →
      assert(∀g ∈ G: xg = gx) →
      assert(∀g ∈ G: x ∈ C_G(g)) →
      assert(x ∈ ⋂_{g ∈ G} C_G(g)) →
      assert(x ∈ C)
    }
  } →

  lemma C_Subset_Z() {
    assert(∀x ∈ C ⇒ x ∈ Z) ↔
    proof {
      setVar(x ∈ C) →
      assert(∀g ∈ G: x ∈ C_G(g)) →
      assert(∀g ∈ G: xg = gx) →
      assert(x ∈ Z(G)) →
      assert(x ∈ Z)
    }
  } →

  apply(Z_Subset_C()) ∧
  apply(C_Subset_Z()) →
  assert(∀x: x ∈ Z ↔ x ∈ C) →
  assert(Z = C)
}