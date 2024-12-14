theorem Center_Is_Subgroup() {
  assert(
    ∀G: Group ⇒ Z(G) ≤ G
  )
} ↔

proof Center_Is_Subgroup() {
  setVar(G: Group) →
  // Proof 1 using Two-Step Subgroup Test
  lemma Identity_In_Center() {
    assert(∀g ∈ G: e·g = g·e = g) →
    assert(e ∈ Z(G))
  } →

  lemma Closure_Under_Operation() {
    setVar(a,b ∈ Z(G)) →
    assert(∀g ∈ G:
      (a·b)·g = a·(b·g)   // Associativity
      = a·(g·b)           // Center definition
      = (a·g)·b           // Associativity
      = (g·a)·b           // Center definition
      = g·(a·b)           // Associativity
    ) →
    assert(a·b ∈ Z(G))
  } →

  lemma Inverse_In_Center() {
    setVar(c ∈ Z(G)) →
    assert(∀g ∈ G:
      c·g = g·c           // Center definition
      ⇒ c⁻¹·(c·g)·c⁻¹ = c⁻¹·(g·c)·c⁻¹   // Apply c⁻¹ both sides
      ⇒ (c⁻¹·c)·g·c⁻¹ = c⁻¹·g·(c·c⁻¹)   // Associativity
      ⇒ e·g·c⁻¹ = c⁻¹·g·e                // Inverse property
      ⇒ g·c⁻¹ = c⁻¹·g                    // Identity property
    ) →
    assert(c⁻¹ ∈ Z(G))
  } →

  apply(Identity_In_Center()) ∧
  apply(Closure_Under_Operation()) ∧
  apply(Inverse_In_Center()) →
  assert(Z(G) ≤ G)

  // Alternate proof using intersection property
  lemma Alternate_Proof() {
    assert(Z(G) = ⋂{C_G(x) | x ∈ G}) ∧    // Center is intersection of centralizers
    assert(∀x ∈ G: C_G(x) ≤ G) ∧          // Centralizers are subgroups
    assert(⋂{H | H ≤ G} ≤ G)              // Intersection of subgroups is subgroup
  }
}