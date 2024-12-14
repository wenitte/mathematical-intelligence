theorem Composition_Inverse_Image_Mappings() {
  let(A: Set, B: Set, C: Set) ∧
  assume(A ≠ ∅ ∧ B ≠ ∅ ∧ C ≠ ∅) ∧
  let(f: A → B, g: B → C) ∧
  let(f⁻¹: ℘(B) → ℘(A)) ∧
  let(g⁻¹: ℘(C) → ℘(B)) ∧
  assert((g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹)
} ↔

proof Composition_Inverse_Image_Mappings() {
  let(T: Set | T ⊆ C) →
  
  assert((g ∘ f)⁻¹(T) = {
    {x ∈ A: g(f(x)) ∈ T} if Im(g ∘ f) ∩ T ≠ ∅
    ∅ if Im(g ∘ f) ∩ T = ∅
  }) →

  assert((f⁻¹ ∘ g⁻¹)(T) = {
    {x ∈ A: f(x) ∈ g⁻¹(T)} if Im(f) ∩ g⁻¹(T) ≠ ∅
    ∅ if Im(f) ∩ g⁻¹(T) = ∅
  }) →

  assert((f⁻¹ ∘ g⁻¹)(T) = {
    {x ∈ A: g(f(x)) ∈ T} if Im(f) ∩ g⁻¹(T) ≠ ∅
    ∅ if Im(f) ∩ g⁻¹(T) = ∅
  }) →

  lemma Equivalence() {
    assert(Im(f) ∩ g⁻¹(T) = ∅ ↔ Im(g ∘ f) ∩ T = ∅) ∧
    proof {
      assert(Im(f) ∩ g⁻¹(T) = ∅ ↔ Im(f) ⊆ B∖g⁻¹(T)) →
      assert(B∖g⁻¹(T) = g⁻¹(C∖T)) →
      assert(Im(g ∘ f) = g(Im(f))) →
      assert(g(Im(f)) ⊆ C∖T ↔ Im(g ∘ f) ∩ T = ∅)
    }
  } →

  apply(Equivalence()) →
  assert((g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹)
}