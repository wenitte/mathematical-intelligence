theorem BanachStarAlgebraStructure() {
  let(A: *-algebra over ℂ, *, B: Banach *-algebra, □, ∥·∥_B) →
  let(φ: A → B, *-algebra isomorphism) →
  define(∥·∥_A: A → ℝ, ∀a ∈ A: ∥a∥_A = ∥φ(a)∥_B) →
  assert(
    (struct(A, *, ∥·∥_A) is Banach *-algebra) ∧
    (struct(B, □, ∥·∥_B) is C*-algebra → struct(A, *, ∥·∥_A) is C*-algebra)
  )
} ↔

proof BanachStarAlgebraStructure() {
  lemma NormProperty() {
    assert(∥·∥_A is algebra norm)
  } →
  
  assert(∀a ∈ A: ∥a*∥_A = ∥a∥_A) {
    let(a ∈ A) →
    chain(
      ∥a*∥_A = ∥φ(a*)∥_B,
      = ∥φ(a)□∥_B [by *-algebra homomorphism],
      = ∥φ(a)∥_B [by Banach *-algebra property],
      = ∥a∥_A [by definition]
    )
  } →
  
  assert(φ: A → B is isometric isomorphism) →
  assert(φ⁻¹: B → A is isometric isomorphism) →
  assert(B complete → A complete) →
  assert(struct(A, ∥·∥_A) is Banach algebra) →
  assert(struct(A, *, ∥·∥_A) is Banach *-algebra) →
  
  lemma CStarProperty() {
    assume(struct(B, □, ∥·∥_B) is C*-algebra) →
    assert(∀b ∈ B: ∥bb□∥_B = ∥b∥_B²) →
    assert(∀a ∈ A: ∥aa*∥_A = ∥a∥_A²) {
      let(a ∈ A) →
      chain(
        ∥aa*∥_A = ∥φ(aa*)∥_B,
        = ∥φ(a)φ(a*)∥_B [by algebra homomorphism],
        = ∥φ(a)φ(a)□∥_B [by *-algebra homomorphism],
        = ∥φ(a)∥_B² [by C*-algebra property],
        = ∥a∥_A² [by definition]
      )
    }
  }
}