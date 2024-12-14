theorem Complex_Numbers_Vector_Space() {
  assert(
    let(ℝ: RealNumbers) ∧
    let(ℂ: ComplexNumbers) ∧
    isVectorSpace(ℝ_module(ℂ))
  )
} ↔

proof Complex_Numbers_Vector_Space() {
  assert(isField(ℝ)) →
  assert(isDivisionRing(ℝ)) →
  
  lemma Check_Module_Properties() {
    assert(
      ∀x,y ∈ ℂ, ∀λ,μ ∈ ℝ ⇒ (
        (λ(x + y) = λx + λy) ∧
        ((λ + μ)x = λx + μx) ∧
        ((λμ)x = λ(μx)) ∧
        (1x = x)
      )
    )
  } →
  
  assert(ℝ ⊂ ℂ) →
  
  lemma Property_1_2() {
    apply(Complex_Multiplication_Distributes) →
    assert(
      ∀x,y ∈ ℂ, ∀λ,μ ∈ ℝ ⇒
      (λ(x + y) = λx + λy) ∧
      ((λ + μ)x = λx + μx)
    )
  } →
  
  lemma Property_3() {
    apply(Complex_Multiplication_Associative) →
    assert(∀x ∈ ℂ, ∀λ,μ ∈ ℝ ⇒ (λμ)x = λ(μx))
  } →
  
  lemma Property_4() {
    apply(Complex_Multiplication_Identity) →
    assert(
      let(unity = 1 + 0i) →
      ∀x ∈ ℂ ⇒ 1x = x
    )
  } →
  
  assert(isVectorSpace(ℝ_module(ℂ)))
}