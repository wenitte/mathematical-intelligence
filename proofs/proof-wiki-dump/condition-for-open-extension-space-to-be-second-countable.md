theorem Open_Extension_Second_Countable() {
  assert(
    ∀T[TopologicalSpace(T) ∧ T = ⟨S,τ⟩] ∧
    ∀T*_p̄[OpenExtensionSpace(T*_p̄) ∧ T*_p̄ = ⟨S*_p,τ*_p̄⟩] →
    SecondCountable(T*_p̄) ↔ SecondCountable(T)
  )
}

proof Open_Extension_Second_Countable() {
  // Forward direction
  assume(SecondCountable(T)) →
  assert(∃B[CountableBasis(B,τ)]) →
  assert(∀O[O ∈ τ → O ∈ τ*_p̄]) →
  assert(τ*_p̄ = τ ∪ {S*_p}) →
  lemma Forward() {
    assert(CountableBasis(B,τ) → CountableBasis(B ∪ {S*_p},τ*_p̄))
  } →
  apply(Forward()) →
  conclude(SecondCountable(T*_p̄)) →

  // Reverse direction (contrapositive)
  assume(¬SecondCountable(T)) →
  assert(¬∃B[CountableBasis(B,τ)]) →
  assert(∀O[O ∈ τ → O ∈ τ*_p̄]) →
  assert(τ*_p̄ = τ ∪ {S*_p}) →
  lemma Reverse() {
    assert(¬∃B[CountableBasis(B,τ)] → ¬∃B[CountableBasis(B,τ*_p̄)])
  } →
  apply(Reverse()) →
  conclude(¬SecondCountable(T*_p̄)) →

  conclude(SecondCountable(T*_p̄) ↔ SecondCountable(T))
}