theorem Horse_Colour_Paradox() {
  assert(
    ∀S(Horses) → (∀h₁,h₂ ∈ S → colour(h₁) = colour(h₂))
  )
} ↔

proof Horse_Colour_Paradox() {
  setVar(n: ℕ₁) →
  define(P(n): "∀S(|S| = n → ∀h₁,h₂ ∈ S → colour(h₁) = colour(h₂)") →
  
  // Base case
  lemma Base_Case() {
    assert(P(1)) →
    assert(∀h ∈ S → colour(h) = colour(h))
  } →

  // Inductive step
  lemma Inductive_Step() {
    assume(P(k) ∧ k ≥ 1) →
    setVar(S_{k+1}: {h₁, h₂, ..., h_{k+1}}) →
    define(T_a: {h₁, h₂, ..., h_k}) →
    define(T_b: {h₂, h₃, ..., h_{k+1}}) →
    define(T_c: {h₂, h₃, ..., h_k}) →
    
    assert(|T_a| = k ∧ |T_b| = k) →
    apply(P(k) to T_a) →
    apply(P(k) to T_b) →
    assert(T_c ⊆ T_a ∧ T_c ⊆ T_b) →
    assert(∀h ∈ T_c → colour(h) is constant) →
    conclude(∀h ∈ S_{k+1} → colour(h) is constant)
  } →

  // Error in reasoning
  lemma Error_Case() {
    assert(k = 1) →
    assert(|T_c| = k-2 = -1) →
    conclude(contradiction)
  } →
  
  // Final conclusion showing paradox
  conclude(
    ¬(∀n ∈ ℕ₁ → P(n)) ∧ 
    specifically_fails(n = 2)
  )
}

theorem Resolution() {
  assert(
    ∃h₁,h₂ ∈ Horses → colour(h₁) ≠ colour(h₂)
  )
} ↔

proof Resolution() {
  setVar(S: {h₁,h₂}) →
  define(T_c: ∅) →
  assert(T_c = ∅ → ¬(colour(h₁) = colour(h₂))) →
  conclude(paradox_resolved)
}