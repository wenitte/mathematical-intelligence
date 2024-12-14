theorem Catenary_Symmetry() {
  assert(
    ∃C[Catenary] ∧
    ∃plane[Cartesian] ∧
    ∃axis[y] ⊂ plane ∧
    ∃point[lowest] ∈ C ∧
    (axis intersects point) ⇒
    (C exhibits_symmetry_about axis)
  )
} ↔

proof Catenary_Symmetry() {
  setVar(C: Catenary) →
  setVar(a: ℝ⁺) →
  setVar(x: ℝ) →
  setVar(y: ℝ) →
  
  assert(C = {(x,y) | y = (a/2)(eˣ/ᵃ + e⁻ˣ/ᵃ)}) →
  assert(y = a·cosh(x/a)) →
  
  lemma Cosh_Even() {
    assert(∀x ∈ ℝ: cosh(-x) = cosh(x))
  } →
  
  apply(Cosh_Even()) →
  assert(a·cosh(-x/a) = a·cosh(x/a)) →
  assert((x,y) ∈ C ↔ (-x,y) ∈ C) →
  assert(C exhibits_symmetry_about y-axis)
}