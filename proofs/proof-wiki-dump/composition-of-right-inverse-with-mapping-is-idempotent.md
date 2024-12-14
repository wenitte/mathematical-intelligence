theorem Composition_Right_Inverse_Idempotent() {
  assert(
    ∀f: S → T, ∀g: T → S 
    [g is_right_inverse_of f] ⇒
    [(g ∘ f) ∘ (g ∘ f) = g ∘ f]
  )
} ↔

proof Composition_Right_Inverse_Idempotent() {
  setVar(f: S → T) →
  setVar(g: T → S) →
  
  assert((g ∘ f) ∘ (g ∘ f)) →
  
  applyTheorem(Composition_Associative) →
  assert(g ∘ (f ∘ g) ∘ f) →
  
  given(g is_right_inverse_of f) →
  assert(f ∘ g = IT) →
  substitute(f ∘ g, IT) →
  assert(g ∘ IT ∘ f) →
  
  applyDef(Identity_Mapping) →
  assert(g ∘ f) →
  
  therefore((g ∘ f) ∘ (g ∘ f) = g ∘ f)
}