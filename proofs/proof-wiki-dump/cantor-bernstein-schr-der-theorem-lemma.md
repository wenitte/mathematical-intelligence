theorem Cantor_Bernstein_Schroeder_Lemma() {
  let(S: Set, T: Set) →
  assert(T ⊆ S) ∧
  assert(∃f: S → T | isInjective(f)) →
  assert(∃g: S → T | isBijective(g))
} ↔

proof Cantor_Bernstein_Schroeder_Lemma() {
  # Proof variant 1
  let(S: Set, T: Set, f: S → T) →
  
  # Define sequence recursively
  define(C₀ := S \ T) →
  define(Cₙ₊₁ := f[Cₙ]) →
  define(C := ∪{Cₙ | n ∈ ℕ}) →
  
  # Define mapping h
  define(h(x) := {
    f(x) if x ∈ C
    x    if x ∉ C
  }) →
  
  lemma h_maps_to_T() {
    assert(∀x ∈ S: h(x) ∈ T) ↔
    case(x ∈ C) {
      assert(h(x) = f(x) ∈ T)
    } →
    case(x ∉ C) {
      assert(x ∉ C₀) →
      assert(x ∈ S \ C₀) →
      assert(S \ C₀ = T) →
      assert(x ∈ T) →
      assert(h(x) = x ∈ T)
    }
  } →
  
  lemma h_is_injective() {
    assert(∀x,y ∈ S: h(x) = h(y) ⇒ x = y) ↔
    let(x,y ∈ S) →
    case(x,y ∈ C) {
      assert(h(x) = h(y) ⇒ f(x) = f(y)) →
      assert(isInjective(f) ⇒ x = y)
    } →
    case(x,y ∉ C) {
      assert(h(x) = x ∧ h(y) = y) →
      assert(h(x) = h(y) ⇒ x = y)
    } →
    case(x ∈ C ∧ y ∉ C) {
      assert(h(x) ∈ C ∧ h(y) ∉ C) →
      assert(h(x) ≠ h(y))
    }
  } →
  
  lemma h_is_surjective() {
    assert(∀y ∈ T: ∃x ∈ S: h(x) = y) ↔
    let(y ∈ T) →
    case(y ∉ C) {
      assert(h(y) = y)
    } →
    case(y ∈ C) {
      assert(∃n ∈ ℕ₊: y ∈ Cₙ₊₁) →
      assert(∃x ∈ Cₙ: y = f(x)) →
      assert(x ∈ C) →
      assert(h(x) = f(x) = y)
    }
  } →
  
  apply(h_maps_to_T()) →
  apply(h_is_injective()) →
  apply(h_is_surjective()) →
  assert(isBijective(h))
}