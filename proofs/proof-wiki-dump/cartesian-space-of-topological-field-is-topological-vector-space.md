theorem CartesianSpace_TopologicalVectorSpace() {
  let(K: TopologicalField)
  let(n: ℕ)
  assert(
    (K^n with product topology ∧ 
     componentwise operations) →
    (K^n is topological vector space) ∧
    (K is Hausdorff → K^n is Hausdorff)
  )
} ↔

proof CartesianSpace_TopologicalVectorSpace() {
  // Hausdorff property
  lemma Hausdorff_Property() {
    assert(K is Hausdorff →
           K^n is Hausdorff) by ProductHausdorff_Theorem
  } →

  // Vector Addition Continuity
  let(pr_i^A: K^n → K) →
  let(pr_i^B: K^n × K^n → K^n) →
  let(f: K^n × K^n → K^n) where
    f((x₁,...,xₙ), (y₁,...,yₙ)) = (x₁+y₁,...,xₙ+yₙ) →
  
  lemma Addition_Continuity() {
    assert(∀i∈[1..n]: pr_i^A ∘ f = pr_i^A ∘ pr_1^B + pr_i^A ∘ pr_2^B) →
    assert(pr_1^B, pr_2^B are continuous) by ProductProjection_Theorem →
    assert(∀i∈[1..n]: pr_i^A is continuous) →
    assert(∀i∈[1..n]: pr_i^A ∘ pr_1^B, pr_i^A ∘ pr_2^B are continuous) by CompositeContMap_Theorem →
    assert(∀i∈[1..n]: pr_i^A ∘ f is continuous) by ContSum_Theorem →
    assert(f is continuous) by ContProduct_Theorem
  } →

  // Scalar Multiplication Continuity
  let(g: K × K^n → K^n) where
    g(λ,(x₁,...,xₙ)) = (λx₁,...,λxₙ) →
  
  lemma ScalarMult_Continuity() {
    assert(∀i∈[1..n]: pr_i^A ∘ g = pr_1^B · (pr_i^A ∘ pr_2^B)) →
    assert(pr_1^B, pr_2^B are continuous) by ProductProjection_Theorem →
    assert(∀i∈[1..n]: pr_i^A is continuous) →
    assert(∀i∈[1..n]: pr_i^A ∘ pr_2^B is continuous) by CompositeContMap_Theorem →
    assert(∀i∈[1..n]: pr_i^A ∘ g is continuous) by ContProduct_Theorem →
    assert(g is continuous) by ContProduct_Theorem
  } →

  conclude(K^n is topological vector space)
}