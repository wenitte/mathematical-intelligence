theorem Cantor_Dedekind_Hypothesis() {
  assert(
    ∃f: L → ℝ ∧ f is bijective
    ⇒ |L| = |ℝ|
  )
} ↔

proof Cantor_Dedekind_Hypothesis() {
  // Step 1: Construct injection h: L → ℝ
  setMap(h: L → ℝ) →
  choose(z ∈ L) →  // Origin point
  assert(⟨z,0⟩ ∈ h) →
  
  ∀p ∈ L: (
    ∃x ∈ ℝ: (
      x = distance(z,p) * sign(p-z) ∧
      ⟨p,x⟩ ∈ h
    )
  ) →
  
  assert(h is left-total ∧ h is many-to-one) →
  assert(h is injective) →

  // Step 2: Construct injection g: ℝ → L
  setMap(g: ℝ → L) →
  assert(⟨0,z⟩ ∈ g) →
  
  ∀x ∈ ℝ: (
    ∃p ∈ L: (
      distance(z,p) = |x| ∧
      sign(p-z) = sign(x) ∧
      ⟨x,p⟩ ∈ g
    )
  ) →
  
  assert(g is left-total ∧ g is many-to-one) →
  assert(g is injective) →

  // Step 3: Apply Cantor-Bernstein
  lemma Cantor_Bernstein() {
    assert(
      ∀A,B: (
        ∃f: A ↪ B ∧ ∃g: B ↪ A
        ⇒ ∃h: A ↔ B
      )
    )
  } →

  apply(Cantor_Bernstein()) →
  assert(∃h: L ↔ ℝ) →
  assert(|L| = |ℝ|)
}

requirements {
  assumes(Axiom_of_Choice)
  assumes(Euclidean_Geometry_Axioms)
}