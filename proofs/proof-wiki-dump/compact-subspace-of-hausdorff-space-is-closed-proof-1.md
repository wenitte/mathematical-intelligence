theorem Compact_Subspace_Hausdorff_Is_Closed() {
  assume(H = ⟨A,τ⟩: HausdorffSpace) ∧
  assume(C ⊆ H: CompactSpace) →
  assert(C: ClosedSet(H))
}

proof Compact_Subspace_Hausdorff_Is_Closed() {
  lemma Subspace_Hausdorff() {
    assert(∀S ⊆ H: HausdorffSpace → S: HausdorffSpace)
  } →
  
  setVar(a ∈ A∖C) →
  
  lemma Hausdorff_Separation() {
    assert(∀x ∈ C → ∃Uₓ,Vₓ: OpenSet(H) where {
      a ∈ Uₓ ∧
      x ∈ Vₓ ∧
      Uₓ ∩ Vₓ = ∅
    })
  } →

  branch {
    case Finite_C() {
      assume(C = {x₁,...,xᵣ}: FiniteSet) →
      setVar(Uₐ = ⋂ᵢ₌₁ʳ Uₓᵢ) →
      assert(a ∈ Uₐ ⊆ A∖C)
    }

    case Infinite_C() {
      setVar(𝓥 = {Vₓ | x ∈ C}: OpenCover(C)) →
      apply(CompactDef(C)) →
      assert(∃{Vₓ₁,...,Vₓᵣ} ⊆ 𝓥: FiniteSubcover(C)) →
      setVar(Uₐ = ⋂ᵢ₌₁ʳ Uₓᵢ) →
      assert(Uₐ: OpenSet(H)) ∧
      assert(a ∈ Uₐ) →
      
      forall(b ∈ Uₐ) {
        assert(C ⊆ ⋃ᵢ₌₁ʳ Vₓᵢ) →
        assert(∀i ∈ [1..r]: b ∈ Uₓᵢ ∧ b ∉ Vₓᵢ) →
        assert(b ∉ C)
      } →
      assert(Uₐ ⊆ A∖C)
    }
  } →

  assert(A∖C = ⋃ₐ∈A∖C Uₐ) →
  assert(A∖C: OpenSet(H)) →
  assert(C: ClosedSet(H))
}