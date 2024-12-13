theorem CantorBernsteinLemma() {
  assert(
    ∀S: Set, ∀T ⊆ S, ∀f: S → T,
    isInjection(f) ⇒ ∃g: S → T [isBijection(g)]
  )
} ↔

proof CantorBernsteinLemma() {
  setVar(S: Set, T: Subset(S), f: Function(S,T)) →
  assert(isInjection(f)) →
  
  define(C := {f^k(x) | k ∈ ℕ, x ∈ S∖T}) →
  define(C₀ := S∖T) →
  define(C₁ := {f^k(x) | k ∈ ℕ₊, x ∈ S∖T}) →
  
  assert(C = C₀ ∪ C₁) →
  assert(S∖C₀ = S∖(S∖T) = S∩T = T) →
  assert(im(f|C) = C₁) →
  
  define(h: S → S := {
    x ↦ f(x) if x ∈ C,
    x ↦ x if x ∉ C
  }) →
  
  assert(h = f|C ∪ I_{S∖C}) →
  assert(dom(h) = S) →
  assert(im(h) = im(f|C) ∪ im(I_{S∖C})) →
  assert(im(h) = C₁ ∪ (S∖C)) →
  assert(im(h) = C₁ ∪ (S∖(C₀ ∪ C₁))) →
  assert(im(h) = S∖C₀) →
  assert(im(h) = T) →
  
  lemma InjectionPreservation() {
    assert(isInjection(f|C)) ∧
    assert(isInjection(I_{S∖C})) ∧
    assert(dom(f|C) ∩ dom(I_{S∖C}) = ∅) ∧
    assert(im(f|C) ∩ im(I_{S∖C}) = ∅) →
    assert(isInjection(h))
  } →
  
  apply(InjectionPreservation()) →
  
  assert(
    dom(h) = S ∧
    im(h) = T ∧
    isInjection(h)
  ) →
  assert(isBijection(h)) →
  conclude(∃g: S → T [isBijection(g)])
}