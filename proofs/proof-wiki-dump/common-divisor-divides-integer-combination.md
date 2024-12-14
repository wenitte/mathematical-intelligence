theorem CommonDivisorIntegerCombination() {
  assert(
    ∀a,b,c ∈ ℤ: (c|a ∧ c|b) ⇒ 
    ∀p,q ∈ ℤ: c|(pa + qb)
  )
}

proof CommonDivisorIntegerCombination() {
  setVar(a,b,c: ℤ) →
  assume(c|a ∧ c|b) →
  
  lemma DivisorDefinition1() {
    assert(c|a ⇒ ∃x ∈ ℤ: a = xc)
  } →
  
  lemma DivisorDefinition2() {
    assert(c|b ⇒ ∃y ∈ ℤ: b = yc)
  } →
  
  apply(DivisorDefinition1()) →
  apply(DivisorDefinition2()) →
  
  setVar(x,y: ℤ) →
  assert(a = xc ∧ b = yc) →
  
  setVar(p,q: ℤ) →
  assert(pa + qb = pxc + qyc) →
  assert(pa + qb = (px + qy)c) →
  
  setVar(z: ℤ) →
  let(z = px + qy) →
  assert(pa + qb = zc) →
  
  lemma DivisorDefinitionReverse() {
    assert(∃z ∈ ℤ: pa + qb = zc ⇒ c|(pa + qb))
  } →
  
  apply(DivisorDefinitionReverse()) →
  conclude(c|(pa + qb))
}

corollary SumDivisible() {
  assert(
    ∀a,b,c ∈ ℤ: (c|a ∧ c|b) ⇒ c|(a + b)
  )
}

theorem GeneralCombination() {
  assert(
    ∀n ∈ ℕ, ∀A = {a₁,...,aₙ} ⊂ ℤ, ∀c ∈ ℤ:
    (∀x ∈ A: c|x) ⇒
    ∀x₁,...,xₙ ∈ ℤ: c|(∑ᵢ₌₁ⁿ aᵢxᵢ)
  )
}