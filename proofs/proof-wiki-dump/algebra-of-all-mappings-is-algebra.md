theorem AlgebraMappings() {
  assert(
    ∀R,A,S [
      isRing(⟨R,+_R,×_R⟩) ∧
      isRAlgebra(⟨A,+_A,∘_A,*_A⟩,R) ∧
      isSet(S)
    ] ⇒ isRAlgebra(⟨A^S,+,∘,*⟩,R)
  )
} ↔

proof AlgebraMappings() {
  setVar(R: Ring, A: RAlgebra, S: Set) →
  
  lemma MappingsModule() {
    assert(isModule(⟨A^S,+,∘⟩))
  } →
  
  assert(remainsToShow: isRBilinear(*)) →
  
  setVar(f,g,h: A^S, λ: R) →
  setVar(x: S) →
  
  assert(
    ((f + λ∘g) * h)(x) = 
    (f + λ∘g)(x) *_A h(x) =
    (f(x) + λ∘_A g(x)) *_A h(x) =
    f(x) *_A h(x) + λ∘_A(g(x) *_A h(x)) =
    (f * h)(x) + λ∘_A(g * h)(x)
  ) →
  
  assert(
    (f * (g + λ∘h))(x) =
    f(x) *_A (g(x) + λ∘_A h(x)) =
    f(x) *_A g(x) + f(x) *_A (λ∘_A h(x)) =
    f(x) *_A g(x) + λ∘_A(f(x) *_A h(x)) =
    (f * g)(x) + λ∘_A(f * h)(x)
  ) →
  
  conclude(isRBilinear(*)) →
  conclude(isRAlgebra(⟨A^S,+,∘,*⟩,R))
}