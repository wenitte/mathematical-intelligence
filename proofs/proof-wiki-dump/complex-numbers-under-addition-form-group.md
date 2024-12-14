theorem Complex_Numbers_Addition_Group() {
  assert(
    ∀C: Set[Complex] ⇒
    isGroup(⟨C,+⟩)
  )
} ↔

proof Complex_Numbers_Addition_Group() {
  setVar(x,y: Complex) →
  
  // G0: Closure
  lemma Closure() {
    assert(
      ∀a,b ∈ C ⇒ (a + b) ∈ C
    )
  } →

  // G1: Associativity 
  lemma Associativity() {
    assert(
      ∀a,b,c ∈ C ⇒ ((a + b) + c) = (a + (b + c))
    )
  } →

  // G2: Identity Element
  lemma Identity() {
    let e = (0 + 0i) →
    assert(
      ∀z(x + yi) ∈ C ⇒
      (z + e = ((x + 0) + i(y + 0)) = (x + yi)) ∧
      (e + z = ((0 + x) + i(0 + y)) = (x + yi))
    )
  } →

  // G3: Inverse Elements
  lemma Inverse() {
    assert(
      ∀z(x + yi) ∈ C ⇒
      ∃z'(-x - yi) ∈ C: z + z' = 0
    )
  } →

  // Main Proof
  apply(Closure()) ∧
  apply(Associativity()) ∧
  apply(Identity()) ∧
  apply(Inverse()) →
  assert(
    satisfiesGroupAxioms(⟨C,+⟩)
  )
}