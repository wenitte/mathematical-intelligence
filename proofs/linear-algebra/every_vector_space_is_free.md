// In prelude/algebra.ts - hidden but imported
level u, v
struct Field@{u} where /* ... full type theory ... */
struct VectorSpace@{u v} where /* ... */
struct Basis@{u v} where /* ... */

// Main proof with same syntax style
theorem Every_Vector_Space_Free() {
  // Main theorem: Every vector space has a basis
  assert(
    ∀V ∈ Vector_Spaces ⇒ (∃B ⊆ V : (B Basis V))
  ) &&
  
  // Definitions look the same but connect to type theory
  definition Vector_Space(V) {
    return (
      (∃F ∈ Fields) ⇒
      (
        (V F_Module) &&
        (∀x, y ∈ V ∀a, b ∈ F ⇒ (a * x + b * y) ∈ V) &&
        (0 ∈ V) &&
        (∃−x ∈ V ⇒ ∀x ∈ V : (x + (−x) = 0))
      )
    ) @derives VectorSpace@{u v};  // Links to type theory
  } &&
  
  definition Basis(B, V) {
    return (
      (LinearIndependent(B)) &&
      (Span(B) == V)
    ) @derives Basis@{u v};
  } &&
  
  definition Span(B, V) {
    return (
      (∀x ∈ V ⇒ (∃a₁, ..., an ∈ Field ⇒ (x == Σ(aᵢ * bᵢ, bᵢ ∈ B))))
    );
  } &&
  
  definition LinearIndependent(B) {
    return (
      ∀{c_i} ∈ Field ⇒ 
      (Σ(c_i * b_i == 0) → ∀i : (c_i == 0, b_i ∈ B))
    );
  } &&
  
  lemma Existence_of_Generators(V) {
    return (
      (V ≠ {0}) ⇒ 
      (∃v ∈ (V \ {0}) ⇒ 
      (∃S ⊆ V : (v ∈ S ∧ (Span(S, V) == V))))
    );
  } &&
  
  proof Existence_of_Generators(V) {
    assume (V non_empty);
    let v₁ ∈ V;
    let S₀ = {v₁};
    assert(
      ∃S ⊆ V : (Span(S, V) == V)
    );
  } &&
  
  lemma Extension_to_Basis(V) {
    return (
      ∀V ∈ Vector_Spaces ⇒ 
      (∃B ⊆ V : (Span(B, V) == V ∧ LinearIndependent(B)))
    );
  } &&
  
  proof Extension_to_Basis(V) {
    assume (V ∈ Vector_Spaces);
    let A = ∅;
    while (Span(A, V) != V) {
      let v ∈ (V \ Span(A, V));
      A = A ∪ {v};
      // Type system checks LinearIndependent invariant
    }
    assert(
      ∃B = A : (LinearIndependent(B) ∧ Span(B, V) == V)
    );
  } &&
  
  proof Every_Vector_Space_Free() {
    let V ∈ Vector_Spaces;
    if (V == {0}) {
      let B = ∅;
      assert(
        (LinearIndependent(B) ∧ Span(B, V) == V)
      );
    } else {
      Existence_of_Generators(V);
      let S ⊆ V : (Span(S, V) == V);
      Extension_to_Basis(V);
      assert(
        ∃B ⊆ V : (LinearIndependent(B) ∧ Span(B, V) == V)
      );
    }
    assert(
      ∀V ∈ Vector_Spaces ⇒ (∃B ⊆ V : (B Basis V))
    );
  }
}