theorem Change_Base_Log_2_to_8() {
  assert(
    ∀x ∈ ℝ₊ ⇒ log₈(x) = lg(x)/3
    where lg(x) ≡ log₂(x)
  )
} ↔

proof Change_Base_Log_2_to_8() {
  apply(Change_Base_Log_General) → 
  assert(
    log₈(x) = log₂(x)/log₂(8)
  ) →
  
  lemma Evaluate_Log_2_8() {
    assert(2³ = 8) →
    assert(log₂(8) = log₂(2³)) →
    assert(log₂(2³) = 3·log₂(2)) →
    apply(Log_To_Own_Base) →
    assert(log₂(2) = 1) →
    assert(3·log₂(2) = 3) →
    conclude(log₂(8) = 3)
  } →
  
  apply(Evaluate_Log_2_8()) →
  assert(log₈(x) = log₂(x)/3) →
  assert(log₂(x) ≡ lg(x)) →
  conclude(log₈(x) = lg(x)/3)
}