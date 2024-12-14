theorem Ceiling_Fraction_Sum() {
  assert(
    ∀m,n ∈ ℤ ∧ n > 0 ∧ ∀x ∈ ℝ ⇒
    ⌈(x + m)/n⌉ = ⌈(⌈x⌉ + m)/n⌉
  )
} ↔

proof Ceiling_Fraction_Sum() {
  setVar(m,n: ℤ) →
  setVar(x: ℝ) →
  assume(n > 0) →
  
  lemma Floor_Negative_Ceiling() {
    assert(
      ∀y ∈ ℝ ⇒ ⌈y⌉ = -⌊-y⌋
    )
  } →

  assert(⌈(x + m)/n⌉ = -⌊-(x + m)/n⌋) →
  apply(Floor_Negative_Ceiling()) →
  
  assert(-⌊-(x + m)/n⌋ = -⌊(-x - m)/n⌋) →
  
  lemma Floor_Fraction() {
    assert(
      ∀a,b ∈ ℝ ⇒ ⌊a/b⌋ = ⌊⌊a⌋/b⌋
    )
  } →
  
  assert(-⌊(-x - m)/n⌋ = -⌊⌊-x⌋ - m)/n⌋) →
  apply(Floor_Negative_Ceiling()) →
  
  assert(-⌊⌊-x⌋ - m)/n⌋ = -⌊(-⌈x⌉ - m)/n⌋) →
  assert(-⌊(-⌈x⌉ - m)/n⌋ = -⌊-(⌈x⌉ + m)/n⌋) →
  apply(Floor_Negative_Ceiling()) →
  
  assert(-⌊-(⌈x⌉ + m)/n⌋ = ⌈(⌈x⌉ + m)/n⌉)
}