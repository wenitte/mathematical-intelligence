theorem Cardinality_Image_Weight_Space() {
  assert(
    ∀T(T = ⟨X,τ⟩ ∧ isTopologicalSpace(T)) ∧
    ∀f(f: X → τ) ∧
    ∀x ∈ X(x ∈ f(x) ∧ ∀U ∈ τ(x ∈ U → f(x) ⊆ U)) →
    |Img(f)| ≤ w(T)
  )
} ↔

proof Cardinality_Image_Weight_Space() {
  setVar(T: TopologicalSpace, f: X → τ) →
  
  lemma Weight_Definition() {
    assert(∃𝔹(isBase(𝔹,T) ∧ |𝔹| = w(T)))
  } →
  apply(Weight_Definition()) →
  
  lemma Image_Mapping_Intersections() {
    assert(Img(f) ⊆ 𝔹)
  } →
  apply(Image_Mapping_Intersections()) →
  
  lemma Subset_Cardinal_Inequality() {
    assert(A ⊆ B → |A| ≤ |B|)
  } →
  apply(Subset_Cardinal_Inequality()) →
  
  assert(|Img(f)| ≤ |𝔹|) →
  assert(|𝔹| = w(T)) →
  assert(|Img(f)| ≤ w(T))
}