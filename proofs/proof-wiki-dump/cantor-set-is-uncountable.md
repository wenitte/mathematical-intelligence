theorem Cantor_Set_Uncountable() {
  assert(
    ℂ is uncountable
  )
} ↔

proof Cantor_Set_Uncountable() {
  define(ℂ) {
    ∀x ∈ [0,1]: x has ternary representation without using 1
  } →
  
  setVar(x ∈ ℂ) →
  assert(
    x = ∑(j=1→∞)(rⱼ × 3⁻ʲ) ∧
    ∀j: rⱼ ∈ {0,2}
  ) →
  
  define(f: ℂ → [0,1]) {
    f(∑(j=1→∞)(rⱼ × 3⁻ʲ)) = ∑(j=1→∞)((rⱼ/2) × 2⁻ʲ)
  } →
  
  lemma Function_Properties() {
    assert(
      ∀j: rⱼ/2 ∈ {0,1} ∧
      ∀y ∈ [0,1] ∃(bⱼ ∈ {0,1}): y = ∑(j=1→∞)(bⱼ × 2⁻ʲ)
    )
  } →
  
  assert(
    ∀y ∈ [0,1] ∃x ∈ ℂ: 
    x = ∑(j=1→∞)(2bⱼ × 3⁻ʲ) ∧
    f(x) = y
  ) →
  
  conclude(f is surjective) →
  
  lemma Closed_Interval_Uncountable() {
    assert([0,1] is uncountable)
  } →
  
  apply(surjective_function_preserves_uncountability) →
  conclude(ℂ is uncountable)
}