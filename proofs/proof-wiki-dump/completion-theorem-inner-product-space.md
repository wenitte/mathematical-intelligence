theorem Completion_Inner_Product_Space() {
  let(GF ∈ {ℝ, ℂ}) ∧
  let(V: InnerProductSpace(GF)) ∧
  let(⟨·,·⟩_V: InnerProduct(V)) ∧
  let(∥·∥_V: InducedNorm(⟨·,·⟩_V)) ∧
  let(H: NormedSpace) ∧
  let(∥·∥_H: Norm(H)) →
  assert(
    IsCompletion(H, V, ∥·∥_V) →
    ∃⟨·,·⟩_H: InnerProduct(H) [
      ExtensionOf(⟨·,·⟩_H, ⟨·,·⟩_V) ∧
      IsHilbertSpace(H, ⟨·,·⟩_H)
    ]
  )
}

proof Completion_Inner_Product_Space() {
  // Show norm satisfies parallelogram law
  let(φ: LinearIsometry(V, H)) →
  assert(IsDense(φ(V), H)) →
  
  lemma ParallelogramLawPreservation() {
    ∀u,v ∈ V [
      ∥u + v∥_V^2 + ∥u - v∥_V^2 = 2(∥u∥_V^2 + ∥v∥_V^2) →
      ∥φ(u) + φ(v)∥_H^2 + ∥φ(u) - φ(v)∥_H^2 = 2(∥φ(u)∥_H^2 + ∥φ(v)∥_H^2)
    ]
  } →

  lemma DensityExtension() {
    ∀x,y ∈ H ∃{xₙ},{yₙ} ∈ φ(V)ℕ [
      lim(n→∞, xₙ) = x ∧
      lim(n→∞, yₙ) = y ∧
      ∥xₙ + yₙ∥_H^2 + ∥xₙ - yₙ∥_H^2 = 2(∥xₙ∥_H^2 + ∥yₙ∥_H^2)
    ]
  } →

  cases(GF) {
    case ℝ:
      define(⟨x,y⟩_H := (∥x + y∥_H^2 - ∥x - y∥_H^2)/4) →
      assert(InducesNorm(⟨·,·⟩_H, ∥·∥_H)) →
      assert(∀u,v ∈ V [⟨φ(u),φ(v)⟩_H = ⟨u,v⟩_V])
    
    case ℂ:
      define(⟨x,y⟩_H := ∑ₖ₌₀³(iᵏ∥x + iᵏy∥_H^2)/4) →
      assert(InducesNorm(⟨·,·⟩_H, ∥·∥_H)) →
      assert(∀u,v ∈ V [⟨φ(u),φ(v)⟩_H = ⟨u,v⟩_V])
  } →
  
  conclude(
    ExtensionOf(⟨·,·⟩_H, ⟨·,·⟩_V) ∧
    IsHilbertSpace(H, ⟨·,·⟩_H)
  )
}