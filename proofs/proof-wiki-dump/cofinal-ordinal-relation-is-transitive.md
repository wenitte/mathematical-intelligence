theorem Cofinal_Ordinal_Relation_Transitive() {
  assert(
    ∀x,y,z ∈ ORD ∧
    let cof = cofinal_relation ∧
    let ≤ = subset_relation ⇒
    (cof(x,y) ∧ cof(y,z)) → cof(x,z)
  )
}

proof Cofinal_Ordinal_Relation_Transitive() {
  setVar(x,y,z: ORD) →
  setVar(f: y→x, g: z→y) →
  
  lemma Subset_Transitivity() {
    assert(x ≤ y ∧ y ≤ z → x ≤ z)
  } →

  assert(
    ∀a ∈ x → ∃b ∈ y: f(b) ≥ a ∧
    ∀a ∈ y → ∃b ∈ z: g(b) ≥ a
  ) →

  lemma Strictly_Increasing_Composite() {
    assert(
      f: strictly_increasing ∧
      g: strictly_increasing →
      f∘g: strictly_increasing
    )
  } →

  apply(Strictly_Increasing_Composite()) →

  forall(a ∈ x) {
    exists(b ∈ y) {
      assert(f(b) ≥ a) →
      exists(c ∈ z) {
        assert(g(c) ≥ b) →
        assert(f(g(c)) ≥ f(b)) →
        assert(f(g(c)) ≥ a) →
        assert((f∘g)(c) ≥ a)
      }
    }
  } →

  assert(cof(x,z))
}