theorem Addition_Linear_Transformations() {
  let(G: AbelianGroup, H: AbelianGroup, R: Ring)
  let(G_module: RModule(G), H_module: RModule(H))
  let(L_R: Set(LinearTransformation(G, H)))
  define(⊕_H: BinaryOperation(L_R)) {
    ∀φ,ψ ∈ L_R, ∀x ∈ G:
    (φ ⊕_H ψ)(x) := φ(x) +_H ψ(x)
  }
  assert(
    ∀φ,ψ ∈ L_R ⇒ (φ ⊕_H ψ) ∈ LinearTransformation(G, H)
  )
} ↔

proof Addition_Linear_Transformations() {
  lemma Structure_Properties() {
    assert(H is AbelianGroup) →
    assert(H is CommutativeSemigroup)
  } →
  
  apply(Homomorphism_Induced_Structure_CommutativeSemigroup()) →
  assert((φ +_H ψ) is Homomorphism(G, H)) →
  
  let(λ ∈ R, x ∈ G) →
  
  assert((φ ⊕_H ψ)(λ ∘_G x) = φ(λ ∘_G x) +_H ψ(λ ∘_G x)) →
  assert(
    φ(λ ∘_G x) +_H ψ(λ ∘_G x) = 
    (λ ∘_H φ(x)) +_H (λ ∘_H ψ(x))
  ) →
  assert(
    (λ ∘_H φ(x)) +_H (λ ∘_H ψ(x)) = 
    λ ∘_H (φ(x) +_H ψ(x))
  ) →
  assert(
    λ ∘_H (φ(x) +_H ψ(x)) = 
    λ ∘_H ((φ ⊕_H ψ)(x))
  ) →
  
  conclude(
    (φ ⊕_H ψ) satisfies LinearTransformation(G, H)
  )
}