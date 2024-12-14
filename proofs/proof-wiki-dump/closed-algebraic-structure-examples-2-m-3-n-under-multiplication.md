theorem Closure_2m3n_Multiplication() {
  let S := {x | ∃m,n ∈ ℤ: x = 2^m * 3^n}
  assert(
    ∀a,b ∈ S ⇒ (a × b) ∈ S
  )
}

proof Closure_2m3n_Multiplication() {
  setVar(a,b: S) →
  assert(∃m₁,n₁,m₂,n₂ ∈ ℤ: 
    a = 2^m₁ * 3^n₁ ∧
    b = 2^m₂ * 3^n₂
  ) →
  
  calc {
    a × b = 2^m₁ * 3^n₁ × 2^m₂ * 3^n₂ →
    a × b = 2^m₁ * 2^m₂ * 3^n₁ * 3^n₂ →
    a × b = 2^(m₁+m₂) * 3^(n₁+n₂)
  } →
  
  let m := m₁ + m₂ →
  let n := n₁ + n₂ →
  assert(m,n ∈ ℤ) →
  assert(a × b = 2^m * 3^n) →
  assert(a × b ∈ S) by def(S)
}