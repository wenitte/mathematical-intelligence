theorem Character_Continuity() {
  assert(
    ∀A: BanachAlgebra(ℂ),
    ∀φ: Character(A → ℂ) ⇒ 
    (Continuous(φ) ∧ ‖φ‖_{A*} ≤ 1)
  )
} ↔

proof Character_Continuity() {
  setVar(A: BanachAlgebra(ℂ)) →
  setVar(φ: Character(A → ℂ)) →
  setVar(G(A): Units(A)) →
  
  case UnitalAlgebra(A) {
    assert(∀x ∈ A ⇒ |φ(x)| ≤ ‖x‖) →
    
    lemma Contradiction() {
      suppose(∃x ∈ A: |φ(x)| > ‖x‖) →
      assert(x ≠ 0_A) →
      assert(‖x/φ(x)‖ < 1) →
      apply(UnitalBanachInvertible()) →
      assert(1_A - x/φ(x) ∈ G(A)) →
      
      setVar(z ∈ A: z(1_A - x/φ(x)) = 1_A) →
      apply(UnitalCharacterHomomorphism()) →
      assert(φ(1_A) = 1) →
      
      chain(
        1 = φ(1_A) = φ(z(1_A - x/φ(x))) = 
        φ(z)φ(1_A - x/φ(x)) = 
        φ(z)(φ(1_A) - φ(x)/φ(x)) =
        φ(z)(1 - 1) = 0
      ) →
      assert(Contradiction())
    } →
    
    assert(‖φ‖_{A*} ≤ 1)
  } →
  
  case NonUnitalAlgebra(A) {
    setVar(A⁺: UnitizationOf(A)) →
    define(φ⁺: A⁺ → ℂ, (x,λ) ↦ φ(x) + λ) →
    apply(NonUnitalCharacterExtension()) →
    assert(∀x ∈ A: φ⁺((x,0)) = φ(x)) →
    
    chain(
      |φ(x)| = |φ⁺((x,0))| ≤ ‖(x,0)‖_{A⁺} = ‖x‖
    ) →
    assert(‖φ‖_{A*} ≤ 1)
  }
}

theorem Character_Norm_Unity() {
  assert(
    ∀A: UnitalBanachAlgebra(ℂ),
    ∀φ: Character(A → ℂ) ⇒ 
    ‖φ‖_{A*} = 1
  )
}