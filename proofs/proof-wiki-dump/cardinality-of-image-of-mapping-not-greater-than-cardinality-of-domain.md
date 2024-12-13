theorem Card_Image_Leq_Domain() {
  assert(
    ∀S,T: Set, ∀f: S → T ⇒ |Img(f)| ≤ |S|
  )
} ↔

proof Card_Image_Leq_Domain() {
  setVar(S: Set, T: Set, f: S → T) →
  
  lemma Restriction_To_Image_Surjective() {
    assert(f: S → Img(f) is surjective)
  } →
  
  assert(∃h: |S| → S, h is bijective) →
  
  lemma Composite_Surjective() {
    assert(f ∘ h: |S| → Img(f) is surjective)
  } →
  
  define(R := {x ∈ |S| : ∀y ∈ x, f(h(x)) ≠ f(h(y))}) →
  assert(R ⊆ |S|) →
  
  lemma R_Injection() {
    assert(
      ∀x,y ∈ R ⇒ (
        f(h(x)) = f(h(y)) → (
          by(Ordinal_Trichotomy, x < y ∨ x = y ∨ y < x) →
          x = y
        )
      )
    )
  } →
  
  assert(f ∘ h|R: R → Img(f) is injective) →
  
  lemma Minimal_Element() {
    assert(
      ∀x ∈ Img(f), ∃y ∈ |S| (
        f(h(y)) = x ∧
        ∀z ∈ y, f(h(z)) ≠ f(h(y))
      )
    )
  } →
  
  assert(f ∘ h|R: R → Img(f) is bijective) →
  assert(R ∼ Img(f)) →
  assert(|Img(f)| = |R|) →
  assert(|R| ≤ |S|) →
  conclude(|Img(f)| ≤ |S|)
}