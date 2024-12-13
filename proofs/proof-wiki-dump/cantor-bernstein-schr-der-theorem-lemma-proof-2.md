theorem Cantor_Bernstein_Lemma() {
  let(S: Set) ∧
  let(T: Set | T ⊆ S) ∧
  let(f: Function[S → T] | isInjective(f))
  assert(
    ∃g: Function[S → T] | isBijective(g)
  )
} ↔

proof Cantor_Bernstein_Lemma() {
  define(E: Function[𝒫(S) → 𝒫(S)]) →
  assert(∀K ∈ 𝒫(S): E(K) = S \ (T \ f[K])) →
  assert(∀K ∈ 𝒫(S): E(K) = (S \ T) ∪ f[K]) →
  
  lemma Monotonicity() {
    assert(isIncreasing(E)) ↔
    apply(Image_Subset_Relation()) ∧
    apply(Union_Preserves_Subsets())
  } →
  
  apply(Knaster_Tarski_Lemma(𝒫(S))) →
  assert(∃X ∈ 𝒫(S): E(X) = X) →
  
  setVar(X: Set | E(X) = X) →
  assert(S \ (T \ f[X]) = X) →
  assert(T \ f[X] = S \ X) →
  
  define(f': Function[X → f[X]] | f' = restrict(f, X)) →
  lemma Bijection_Parts() {
    assert(isBijective(f')) ↔
    apply(Injection_To_Image_Is_Bijection(f'))
  } →
  
  define(I: Function[S\X → T\f[X]] | I = identityMap(S\X)) →
  assert(isBijective(I)) →
  
  define(g: Function[S → T] | g = f' ∪ I) →
  lemma Final_Bijection() {
    assert(isBijective(g)) ↔
    apply(Union_Of_Disjoint_Bijections(f', I))
  } →
  
  conclude(g)
}