theorem Biconditional_As_Disjunction() {
  assert(
    ∀p,q ∈ BOOL : (p ↔ q) ↔ ((p ∧ q) ∨ (¬p ∧ ¬q))
  )
} ↔

proof Biconditional_As_Disjunction() {
  setVar(p,q: BOOL) →
  lemma Truth_Table() {
    assert(
      [(F,F): (F↔F)=T ∧ ((F∧F)∨(T∧T))=T] ∧
      [(F,T): (F↔T)=F ∧ ((F∧T)∨(T∧F))=F] ∧
      [(T,F): (T↔F)=F ∧ ((T∧F)∨(F∧T))=F] ∧
      [(T,T): (T↔T)=T ∧ ((T∧T)∨(F∧F))=T]
    )
  } →
  apply(Truth_Table()) →
  assert(
    ∀vals∈{(F,F),(F,T),(T,F),(T,T)} :
    eval(p↔q, vals) = eval((p∧q)∨(¬p∧¬q), vals)
  ) →
  conclude((p↔q) ↔ ((p∧q)∨(¬p∧¬q)))
}