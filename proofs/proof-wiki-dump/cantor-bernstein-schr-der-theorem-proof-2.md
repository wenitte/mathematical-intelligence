theorem Cantor_Bernstein_Schroeder() {
  assert(
    ∀S,T:Set ∧ (S ⪯ T) ∧ (T ⪯ S) ⇒ (S ∼ T)
  )
} ↔

proof Cantor_Bernstein_Schroeder() {
  setVar(S,T: Set) →
  assert(∃f:S→T, g:T→S | Injective(f) ∧ Injective(g)) →
  
  lemma BuildSequence() {
    ∀t₁∈T ⇒ [
      (∃s₁∈S | f(s₁)=t₁) ∨ (¬∃s₁∈S | f(s₁)=t₁) ∧
      Injective(f) ⇒ Unique(s₁) ∧
      s₁ = f⁻¹(t₁) ∧
      (∃t₂∈T | g(t₂)=s₁) ∨ (¬∃t₂∈T | g(t₂)=s₁)
    ]
  } →

  lemma Partition() {
    assert(T = T_A ∪ T_B ∪ T_C) ∧
    assert(S = S_A ∪ S_B ∪ S_C) ∧
    where {
      T_A := {t∈T | ProcessEndsIn(S)} ∧
      T_B := {t∈T | ProcessEndsIn(T)} ∧
      T_C := {t∈T | ProcessInfinite} ∧
      S_A := {s∈S | ProcessEndsIn(S)} ∧
      S_B := {s∈S | ProcessEndsIn(T)} ∧
      S_C := {s∈S | ProcessInfinite}
    }
  } →

  lemma Bijections() {
    assert(f|_{S_A}: S_A → T_A is_bijective) ∧
    assert(g|_{T_B}: T_B → S_B is_bijective) ∧
    assert(f|_{S_C}: S_C → T_C is_bijective)
  } →

  define(h: S → T) {
    h(x) := {
      f(x) if x∈S_A,
      f(x) if x∈S_C,
      g⁻¹(x) if x∈S_B
    }
  } →

  assert(Bijective(h)) →
  conclude(S ∼ T)
}