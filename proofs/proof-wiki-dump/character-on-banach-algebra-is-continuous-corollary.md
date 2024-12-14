theorem Character_Norm() {
  assert(
    ∀A: BanachAlgebra(ℂ) ∧ 
    ∀φ: Character(A → ℂ) ⇒
    ‖φ‖_{A*} = 1
  )
} ↔

proof Character_Norm() {
  setVar(A: BanachAlgebra(ℂ)) →
  setVar(φ: Character(A → ℂ)) →
  
  lemma Previous_Result() {
    assert(
      φ.continuous() ∧ ‖φ‖_{A*} ≤ 1
    )
  } →
  
  assert(
    sup{|φ(x)| : x ∈ A, ‖x‖ = 1} ≤ 1
  ) →
  
  assert(
    ‖1_A‖ = 1 ∧ φ(1_A) = 1
  ) →
  
  assert(
    sup{|φ(x)| : x ∈ A, ‖x‖ = 1} ≥ |φ(1_A)| = 1
  ) →
  
  assert(
    sup{|φ(x)| : x ∈ A, ‖x‖ = 1} = 1
  ) →
  
  conclude(
    ‖φ‖_{A*} = 1
  )
}