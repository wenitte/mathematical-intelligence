theorem ParacompactT3CharLemma7() {
  let(T = ⟨X,τ⟩: TopologicalSpace) →
  let(𝕌: OpenCover(T)) →
  let(𝕍: ClosedLocallyFiniteRefinement(𝕌)) →
  let(Wx ∈ τ: ∀x ∈ X → (x ∈ Wx ∧ |{V ∈ 𝕍: V ∩ Wx ≠ ∅}| < ∞)) →
  let(𝕎 = {Wx: x ∈ X}: OpenCover(T)) →
  let(𝔸: ClosedLocallyFiniteRefinement(𝕎)) →
  let(V* = X \ ⋃{A ∈ 𝔸: A ∩ V = ∅}: ∀V ∈ 𝕍) →
  let(𝕍* = {V*: V ∈ 𝕍}) →
  let(UV ∈ 𝕌: ∀V ∈ 𝕍 → V ⊆ UV) →
  let(𝕌* = {V* ∩ UV: V ∈ 𝕍}) →
  assert(IsOpenLocallyFiniteRefinement(𝕌*, 𝕌))
} ↔

proof ParacompactT3CharLemma7() {
  lemma L5() {
    assert(∀V ∈ 𝕍 → V ⊆ V*)
  } →
  
  lemma L6() {
    assert(IsOpenLocallyFiniteCover(𝕍*, T))
  } →
  
  lemma L12() {
    assert(∀A ∈ 𝔸 → |{U* ∈ 𝕌*: U* ∩ A ≠ ∅}| < ∞)
  } →

  block OpenCoverProof() {
    apply(OpenSetAxiom_O2()) →
    assert(∀V ∈ 𝕍 → V* ∩ UV ∈ τ) →
    assert(∀V ∈ 𝕍 → V ⊆ V* ∩ UV) →
    assert(∀x ∈ X → ∃V ∈ 𝕍(x ∈ V)) →
    assert(∀x ∈ X → ∃V ∈ 𝕍(x ∈ V* ∩ UV)) →
    conclude(IsOpenCover(𝕌*, T))
  } →

  block RefinementProof() {
    assert(∀V ∈ 𝕍 → V* ∩ UV ⊆ UV ∈ 𝕌) →
    conclude(IsRefinement(𝕌*, 𝕌))
  } →

  block LocallyFiniteProof() {
    forall(x ∈ X) {
      exists(W ∈ τ) {
        assert(x ∈ W ∧ |{A ∈ 𝔸: A ∩ W ≠ ∅}| < ∞) →
        let({A ∈ 𝕍: A ∩ W ≠ ∅} = {A₁,...,Aₖ}: k ∈ ℕ) →
        assert(W ⊆ ⋃ᵢ₌₁ᵏ Aᵢ) →
        apply(L12()) →
        assert(|{U* ∈ 𝕌*: U* ∩ W ≠ ∅}| < ∞)
      }
    } →
    conclude(IsLocallyFinite(𝕌*))
  } →

  conclude(IsOpenLocallyFiniteRefinement(𝕌*, 𝕌))
}