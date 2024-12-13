theorem Cantor_Set_Uncountable() {
  assert(
    let ℂ be CantorSet →
    ℂ is uncountable
  )
} ↔

proof Cantor_Set_Uncountable() {
  lemma TernaryRep() {
    assert(
      ∀s ∈ {0.nnnnn...| n ∈ {0,2}} → s ∈ ℂ
    )
  } →
  
  lemma BinaryRep() {
    assert(
      ∀b ∈ {0.nnnnn...| n ∈ {0,1}} → b ∈ [0,1] ⊂ ℝ
    )
  } →
  
  define(
    f: ℂ → [0,1],
    f(x) = replaceInBase3(x, 2→1)
  ) →
  
  assert(
    ∀x ∈ ℂ →
    x in base3 representation ∧
    f(x) = convertToBase2(replaceDigits(x, 2→1))
  ) →
  
  lemma Surjectivity() {
    assert(
      ∀y ∈ [0,1] → ∃x ∈ ℂ: f(x) = y
    )
  } →
  
  apply(
    Surjectivity() ∧
    [0,1] is uncountable
  ) →
  
  conclude(
    ℂ is uncountable by surjection to uncountable set
  )
}