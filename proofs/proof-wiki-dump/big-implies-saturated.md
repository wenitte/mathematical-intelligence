theorem BigImpliesSaturated() {
  let(𝕄: L_Structure, κ: Cardinal)
  assert(
    κ_big(𝕄) → κ_saturated(𝕄)
  )
} ↔

proof BigImpliesSaturated() {
  setVar(𝕄: L_Structure, κ: Cardinal) →
  setVar(p: complete_n_type, A: subset(universe(𝕄))) →
  assert(|A| < κ) →
  
  let(L_A: language) {
    L_A = L + constant_symbols(A)
  } →
  
  let(Th_A: sentence_collection) {
    Th_A = L_A_sentences_satisfied_by(𝕄)
  } →
  
  assert(∃ℕ: L_A_structure)(satisfiable(p ∪ Th_A(𝕄), ℕ)) →
  
  let(b̄: n_tuple) {
    realizes(b̄, p, ℕ)
  } →
  
  let(L_A*: language) {
    L_A* = L_A + relation_symbol(R)
  } →
  
  extend(ℕ, L_A*) {
    R_ℕ = singleton(b̄)
  } →
  
  assert(elementary_equivalent(𝕄, ℕ, L_A)) →
  
  lemma BignessApplication() {
    assert(κ_big(𝕄) → 
      ∃R_𝕄: relation(universe(𝕄))(
        elementary_equivalent(⟨𝕄,R_𝕄⟩, ⟨ℕ,R_ℕ⟩, L_A*)
      )
    )
  } →
  
  apply(BignessApplication()) →
  
  assert(∀φ ∈ p)(
    ⟨ℕ,R_ℕ⟩ ⊨ (∃x̄(R(x̄)) ∧ ∀x̄(R(x̄) → φ(x̄)))
  ) →
  
  assert(∃d̄ ∈ R_𝕄)(realizes(d̄, p, 𝕄)) →
  
  conclude(κ_saturated(𝕄))
}