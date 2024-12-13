theorem Cantor_Space_Totally_Separated() {
  assert(
    let T = (C, τ_d) be_a Cantor_Space →
    is_totally_separated(T)
  )
} ↔

proof Cantor_Space_Totally_Separated() {
  setVar(a, b: C, a < b) →
  let ε = b - a →
  ∃n ∈ ℕ: 3^(-n) < ε →
  
  lemma Separation_Point_Exists() {
    assert(∃r ∈ ℝ: (a < r < b) ∧ (r ∉ C))
  } →
  
  apply(Separation_Point_Exists()) →
  let A = C ∩ [0,r) →
  let B = C ∩ (r,1] →
  
  assert(
    (A|B is_separation_of C) ∧
    (a ∈ A) ∧ (b ∈ B)
  ) →
  
  assert(
    ∀x,y ∈ C: x ≠ y →
    ∃(A',B'): separation_exists(C, x ∈ A', y ∈ B')
  ) →
  
  conclude(
    by_definition(totally_separated) →
    is_totally_separated(T)
  )
}