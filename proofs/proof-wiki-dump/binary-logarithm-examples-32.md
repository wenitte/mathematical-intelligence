theorem Binary_Log_32() {
  assert(
    lg(32) = 5
  )
} ↔ 

proof Binary_Log_32() {
  assert(2^5 = 32) →
  assert(lg(32) = log₂(32)) →
  assert(log₂(32) = log₂(2^5)) →
  applyLogPower() →
  assert(log₂(2^5) = 5·log₂(2)) →
  assert(log₂(2) = 1) →
  assert(5·log₂(2) = 5·1) →
  assert(5·1 = 5) →
  conclude(lg(32) = 5)
}

lemma LogPower() {
  assert(
    ∀a,n ∈ ℝ: log₂(a^n) = n·log₂(a)
  )
}