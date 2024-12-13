theorem Boundary_Of_Union_Of_Separated_Sets() {
  assert(
    ∀T[TopologicalSpace] ∧ ∀A,B ⊆ T ∧ Separated(A,B) →
    ∂(A ∪ B) = ∂A ∪ ∂B
  )
} ↔

proof Boundary_Of_Union_Of_Separated_Sets() {
  setVar(T: TopologicalSpace) →
  setVar(A,B: Subset(T)) →
  assert(Separated(A,B) ↔ A⁻ ∩ B = A ∩ B⁻ = ∅) →
  lemma Separated_Are_Disjoint() {
    assert(A ∩ B = ∅)
  } →
  
  lemma Intersection_Of_Boundaries() {
    assert(∀x ∈ (∂A ∩ ∂B) → x ∈ ∂(A ∪ B)) →
    setVar(x: Element(∂A ∩ ∂B)) →
    assert(x ∈ ∂A ∧ x ∈ ∂B) →
    assert(x ∈ A⁻ ∩ (T\A)⁻ ∧ x ∈ B⁻ ∩ (T\B)⁻) →
    assert(x ∈ A⁻ ∧ x ∈ B⁻) →
    assert(x ∉ B ∧ x ∉ A) →
    assert(x ∉ (A ∪ B)) →
    assert(x ∈ T\(A ∪ B)) →
    assert(x ∈ (T\(A ∪ B))⁻) →
    assert(A⁻ ∪ B⁻ = (A ∪ B)⁻) →
    assert(x ∈ (A ∪ B)⁻) →
    assert(x ∈ (A ∪ B)⁻ ∩ (T\(A ∪ B))⁻) →
    assert(x ∈ ∂(A ∪ B))
  } →

  apply(Intersection_Of_Boundaries()) →
  apply(Union_With_Superset_Is_Superset()) →
  assert(∂A ∪ ∂B = ∂(A ∪ B))
}