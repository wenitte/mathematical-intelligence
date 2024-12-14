theorem SetArcConnected() {
  let(ℝ²: metric_space, d: metric) →
  let(S ⊆ ℝ²) →
  assert(
    ∀x,y ∈ ℝ² ⇒ ((x,y) ∈ S ↔ x,y ∈ ℚ)
  ) →
  let(A := ℝ² ∖ S) →
  assert(
    ∀x,y ∈ ℝ² ⇒ ((x,y) ∈ A ↔ (x ∉ ℚ ∨ y ∉ ℚ))
  ) ⇒
  assert(
    is_arc_connected(A)
  )
}

proof SetArcConnected() {
  setVar((a,b) ∈ A) →
  setVar((x₁,y₁) ∈ A: x₁,y₁ ∉ ℚ) →
  
  assert(a ∉ ℚ ∨ b ∉ ℚ) →
  
  lemma WLOG() {
    assert(a ∉ ℚ)
  } →
  
  let(L₁ := {(x,y) ∈ ℝ² | x = a}) →
  let(L₂ := {(x,y) ∈ ℝ² | y = y₁}) →
  
  assert(
    L₁ ∪ L₂ ⊆ A ∧ is_arc_connected(L₁ ∪ L₂)
  ) →
  
  assert(
    ∃path:(L₁ ∪ L₂) ⇒ connects((x₁,y₁), (a,b))
  ) →
  
  assert(
    ∀p ∈ A ⇒ ∃path:A ⇒ connects(p, (x₁,y₁))
  ) →
  
  conclude(
    is_arc_connected(A)
  )
}