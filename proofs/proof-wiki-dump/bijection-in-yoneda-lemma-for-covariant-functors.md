theorem YonedaBijection() {
  assert(
    ∀C: LocallySmallCategory,
    ∀F: CovariantFunctor(C → Set),
    ∀A ∈ C,
    let I_A = IdentityMorphism(A),
    let h^A = HomFunctor(A, -),
    ∃α: Nat(h^A, F) → F(A): η ↦ η_A(I_A),
    ∃β: F(A) → Nat(h^A, F): u ↦ (X ↦ (f ↦ F(f)(u))),
    Bijection(α, β)
  )
} ↔

proof YonedaBijection() {
  lemma SmallClass() {
    assert(Nat(h^A, F) is SmallClass) →
    proveBy(BijectionProof())
  } →

  lemma Injectivity() {
    setVar(η ∈ Nat(h^A, F)) →
    setVar(B ∈ C) →
    setVar(f ∈ Hom(A,B)) →
    assert(
      η_B(f) 
      = η_B(f ∘ I_A)           [by IdentityMorphism] →
      = η_B((h^A(f))(I_A))     [by HomFunctor] →
      = F(f)(η_A(I_A))         [by NaturalTransformation]
    ) →
    conclude(η determined by α(η))
  } →

  lemma Surjectivity() {
    setVar(u ∈ F(A)) →
    define(β(u) = η where η_B(f) = F(f)(u)) →
    setVar(B,D ∈ C, g: B → D) →
    assert(
      η_D(g_*(f))
      = η_D(g ∘ f)             [by Postcomposition] →
      = F(g ∘ f)(u)            [by definition] →
      = F(g)(F(f)(u))         [by CovariantFunctor] →
      = F(g)(η_B(f))          [by definition]
    ) →
    conclude(DiagramCommutes())
  } →

  lemma ReverseBijection() {
    assert(∀η ∈ Nat(h^A, F): β(α(η)) = η) →
    setVar(u ∈ F(A)) →
    setVar(η = β(u)) →
    assert(
      α(η)
      = η_A(I_A)               [by definition] →
      = F(I_A)(u)              [by definition] →
      = I_{F(A)}(u)            [by Functor] →
      = u                      [by Identity]
    ) →
    conclude(α(β(u)) = u)
  } →
  
  conclude(BijectionProof())
}