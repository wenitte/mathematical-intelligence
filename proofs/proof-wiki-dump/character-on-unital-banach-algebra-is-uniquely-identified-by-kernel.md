theorem Character_Uniqueness_Kernel() {
  let(A: BanachAlgebra(ℂ), unital: true)
  let(φ,ψ: HomomorphismC(A → ℂ))
  assert(
    ker(φ) = ker(ψ) ⇒ φ = ψ
  )
} ↔

proof Character_Uniqueness_Kernel() {
  lemma Character_Is_Unital() {
    assert(φ(1_A) = 1 ∧ ψ(1_A) = 1)
  } →

  setVar(x ∈ A) →
  
  assert(φ(x - φ(x)1_A) = 
    φ(x) - φ(φ(x)1_A) = 
    φ(x) - φ(x)φ(1_A) = 
    φ(x) - φ(x) = 0
  ) →
  
  assert(x - φ(x)1_A ∈ ker(φ)) →
  assert(ker(φ) = ker(ψ)) →
  assert(x - φ(x)1_A ∈ ker(ψ)) →
  
  assert(ψ(x - φ(x)1_A) = 0) →
  assert(0 = 
    ψ(x - φ(x)1_A) = 
    ψ(x) - ψ(φ(x)1_A) = 
    ψ(x) - φ(x)ψ(1_A) = 
    ψ(x) - φ(x)
  ) →
  
  assert(φ(x) = ψ(x)) →
  assert(∀x ∈ A ⇒ φ(x) = ψ(x)) →
  assert(φ = ψ)
}