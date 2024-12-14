theorem Spectrum_Commutativity() {
  let(A: Algebra(ℂ))
  let(x,y ∈ A)
  let(σ_A: A → P(ℂ))
  assert(
    σ_A(x*y) ∪ {0} = σ_A(y*x) ∪ {0}
  )
} ↔

proof Spectrum_Commutativity() {
  let(G(A): Units(A)) →
  assumeWLOG(A: UnitalAlgebra(ℂ)) →
  
  lemma Inverse_Equivalence() {
    assert(
      ∀x,y ∈ A: (1_A - x*y ∈ G(A)) ↔ (1_A - y*x ∈ G(A))
    )
  } →
  
  proof Inverse_Equivalence() {
    let(inv := (1_A - y*x)^(-1) = 1_A + y*(1_A - x*y)^(-1)*x) →
    assert(
      (1_A - y*x)(1_A + y*(1_A - x*y)^(-1)*x) = 1_A
    ) ∧
    assert(
      (1_A + y*(1_A - x*y)^(-1)*x)(1_A - y*x) = 1_A
    )
  } →
  
  apply(Inverse_Equivalence()) →
  
  lemma Scaled_Equivalence() {
    ∀λ ∈ ℂ\{0}: assert(
      (1_A - (λ^(-1)*x)*y ∈ G(A)) ↔ (1_A - y*(λ^(-1)*x) ∈ G(A))
    ) →
    assert(
      (λ*1_A - x*y ∈ G(A)) ↔ (λ*1_A - y*x ∈ G(A))
    )
  } →
  
  apply(Scaled_Equivalence()) →
  
  assert(σ_A(x*y)\{0} = σ_A(y*x)\{0}) →
  conclude(σ_A(x*y) ∪ {0} = σ_A(y*x) ∪ {0})
}