theorem Cancellation_Laws_Group() {
  assert(
    ∀G: Group ∧
    ∀a,b,c ∈ G ⇒
    ((b·a = c·a → b = c) ∧     // Right cancellation
     (a·b = a·c → b = c))      // Left cancellation
  )
} ↔

proof Cancellation_Laws_Group() {
  setVar(G: Group) →
  setVar(a,b,c: Element[G]) →
  
  lemma Group_Is_Monoid() {
    assert(
      Group ⊆ Monoid ∧
      ∀x ∈ Group → ∃y ∈ Group: x·y = y·x = e
    )
  } →
  
  lemma Invertible_Elements_Are_Cancellable() {
    assert(
      ∀M: Monoid ∧
      ∀x ∈ M: (∃y ∈ M: x·y = y·x = e) →
      (∀u,v ∈ M: (u·x = v·x → u = v) ∧
                 (x·u = x·v → u = v))
    )
  } →
  
  apply(Group_Is_Monoid()) →
  apply(Invertible_Elements_Are_Cancellable()) →
  assert(
    ∀x ∈ G: x is cancellable →
    ((b·a = c·a → b = c) ∧
     (a·b = a·c → b = c))
  )
}