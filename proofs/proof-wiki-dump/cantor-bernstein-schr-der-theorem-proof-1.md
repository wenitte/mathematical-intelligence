theorem Cantor_Bernstein_Schroeder() {
  assert(
    ∀S,T: (T ∼ S₁ ⊆ S ∧ S ∼ T₁ ⊆ T) ⇒ S ∼ T
  )
} ↔

proof Cantor_Bernstein_Schroeder() {
  setVar(S,T: Set) →
  assume(T ∼ S₁ ⊆ S ∧ S ∼ T₁ ⊆ T) →
  
  // Define bijections
  let(f: S → T₁ [bijective]) →
  let(g: T → S₁ [bijective]) →
  
  // Define recursive sets
  let(S₂ = g(f(S)) = g(T₁) ⊆ S₁) →
  let(T₂ = f(g(T)) = f(S₁) ⊆ T₁) →
  
  // Define sequence of sets
  ∀k∈ℕ: let(Sₖ₊₂ = (g∘f)(Sₖ)) →
  assert(S ⊇ S₁ ⊇ S₂ ⊇ ... ⊇ Sₖ ⊇ Sₖ₊₁ ...) →
  
  // Define intersection
  let(D = ⋂ₖ₌₁^∞ Sₖ) →
  
  // Define disjoint sets
  let(M = (S₁∖S₂) ∪ (S₃∖S₄) ∪ (S₅∖S₆) ∪ ...) →
  let(N = (S∖S₁) ∪ (S₂∖S₃) ∪ (S₄∖S₅) ∪ ...) →
  let(N₁ = (S₂∖S₃) ∪ (S₄∖S₅) ∪ (S₆∖S₇) ∪ ...) →
  
  // Establish equivalences
  assert(S = D ∪ M ∪ N) →
  assert(S₁ = D ∪ M ∪ N₁) →
  
  lemma Bijection_Between_N_N1() {
    assert((g∘f)(S∖S₁) = S₂∖S₃) →
    assert((g∘f)(S₂∖S₃) = S₄∖S₅) →
    conclude(N ∼ N₁)
  } →
  
  apply(Bijection_Between_N_N1()) →
  assert(S ∼ S₁) →
  assert(S₁ ∼ T) →
  conclude(S ∼ T)
}