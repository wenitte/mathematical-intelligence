theorem Clopen_Points_Modified_Fort_Space() {
  assert(
    ∀T = (S, τ_[a,b]): ModifiedFortSpace(T) →
    (∀p ∈ (S\{a,b}) ⇒ isOpen(p,T) ∧ isClosed(p,T)) ∧
    (¬isOpen(a,T) ∧ isClosed(a,T)) ∧
    (¬isOpen(b,T) ∧ isClosed(b,T))
  )
}

proof Clopen_Points_Modified_Fort_Space() {
  setVar(T: ModifiedFortSpace) →
  setVar(S: Set) →
  setVar(p: Point) →

  lemma OpenPoints() {
    assert(p ∈ S\{a,b}) →
    assert(∀X ⊆ S\{a,b} ⇒ isOpen(X,T)) →
    assert({p} ⊆ S\{a,b}) →
    conclude(isOpen(p,T))
  } →

  lemma NonOpenPoints() {
    assert(¬isFinite(S\{a})) →
    assert(¬isFinite(S\{b})) →
    conclude(¬isOpen(a,T) ∧ ¬isOpen(b,T))
  } →

  lemma ClosedPoints() {
    assert(∀q ∈ S ⇒ isFinite({q})) →
    assert(∀q ∈ S ⇒ (a ∈ S\{q} ∨ b ∈ S\{q})) →
    assert(∀q ∈ S ⇒ isCofinite(S\{q})) →
    assert(∀q ∈ S ⇒ isOpen(S\{q},T)) →
    conclude(∀q ∈ S ⇒ isClosed(q,T))
  } →

  apply(OpenPoints()) ∧
  apply(NonOpenPoints()) ∧
  apply(ClosedPoints()) →
  conclude(
    (∀p ∈ (S\{a,b}) ⇒ isOpen(p,T) ∧ isClosed(p,T)) ∧
    (¬isOpen(a,T) ∧ isClosed(a,T)) ∧
    (¬isOpen(b,T) ∧ isClosed(b,T))
  )
}