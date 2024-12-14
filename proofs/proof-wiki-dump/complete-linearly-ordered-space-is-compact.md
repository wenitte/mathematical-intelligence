theorem Complete_Linearly_Ordered_Space_is_Compact() {
  let(X: Set, ≼: Order, τ: Topology) →
  assert(
    (isLinearlyOrderedSpace(⟨X,≼,τ⟩) ∧ 
     isCompleteLattice(⟨X,≼⟩)) →
    isCompact(⟨X,τ⟩)
  )
} ↔

proof Complete_Linearly_Ordered_Space_is_Compact() {
  apply(Space_is_Compact_iff_Finite_Subcover()) →
  setVar(𝔸: OpenCover(X)) →
  assert(∀A∈𝔸 → (isOpenInterval(A) ∨ isOpenRay(A))) →
  
  setVar(m: X = inf(X)) →
  assert(exists(m) ↔ isCompleteLattice(⟨X,≼⟩)) →
  
  define(C = {x∈X | ∃F⊆𝔸(isFinite(F) ∧ covers(F,[m,x]))}) →
  assert(m∈C) →
  setVar(s = sup(C)) →
  
  assert(∃U∈𝔸(s∈U)) →
  assert(U = (a,b) ∨ U = ↑a ∨ U = ↓b) →
  
  case U_is_open_interval() {
    assume(U = (a,b)) →
    assert(∃V∈𝔸(b∈V)) →
    assert(∃x≻a(∃F⊆𝔸(isFinite(F) ∧ covers(F,[m,x])))) →
    assert(F∪{U,V} covers [m,b]) →
    contradiction(s_is_upper_bound(C))
  } →
  
  case U_is_down_ray() {
    assume(U = ↓b) →
    assert(∃V∈𝔸(b∈V)) →
    assert({U,V} covers [m,b]) →
    contradiction(s_is_supremum(C))
  } →
  
  case U_is_up_ray() {
    assert(U = ↑a) →
    assert(¬isUpperBound(a,C)) →
    assert(∃x≻a(∃F⊆𝔸(isFinite(F) ∧ covers(F,[m,x])))) →
    assert(F∪{U} isFiniteSubcover(𝔸))
  } →
  
  conclude(isCompact(⟨X,τ⟩))
}