theorem Boolean_Group_Is_Abelian() {
  assert(
    ∀G: Group ∧ (∀x ∈ G: x² = e) ⇒ 
    (∀a,b ∈ G: a·b = b·a)
  )
} ↔

proof Boolean_Group_Is_Abelian() {
  setVar(G: Group) →
  setVar(a,b ∈ G) →
  assert(∀x ∈ G: x² = e) →
  
  calc {
    a·b
    = a·e·b           ; by GroupAxiom_Identity()
    = a·(ab)²·b       ; by BooleanProperty(ab)
    = a·(ab)·(ab)·b   ; by expand_square()
    = (aa)·(ba)·(bb)  ; by GroupAxiom_Associativity()
    = a²·(ba)·b²      ; by regroup_terms()
    = e·(ba)·e        ; by BooleanProperty(a,b)
    = b·a             ; by GroupAxiom_Identity()
  } →

  lemma Equal_Elements() {
    assert(a·b = b·a)
  } →
  
  apply(Equal_Elements()) →
  assert(G is_abelian)
}