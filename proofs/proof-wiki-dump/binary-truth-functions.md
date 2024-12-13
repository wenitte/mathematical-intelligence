theorem Binary_Truth_Functions() {
  assert(
    ∃!(f₁,...,f₁₆: B×B→B) ∧
    (∀p,q∈B → 
      (f₁(p,q) = F) ∧
      (f₂(p,q) = T) ∧
      (f₃(p,q) = p) ∧
      (f₄(p,q) = q) ∧
      (f₅(p,q) = ¬p) ∧
      (f₆(p,q) = ¬q) ∧
      (f₇(p,q) = p∧q) ∧
      (f₈(p,q) = p∨q) ∧
      (f₉(p,q) = p→q) ∧
      (f₁₀(p,q) = q→p) ∧
      (f₁₁(p,q) = p↔q) ∧
      (f₁₂(p,q) = ¬(p↔q)) ∧
      (f₁₃(p,q) = ¬(p→q)) ∧
      (f₁₄(p,q) = ¬(q→p)) ∧
      (f₁₅(p,q) = p↑q) ∧
      (f₁₆(p,q) = p↓q)
    )
  )
} ↔

proof Binary_Truth_Functions() {
  lemma Total_Count() {
    assert(|{f: B×B→B}| = 2^(2^2))
  } →
  
  apply(Total_Count()) →
  
  lemma Truth_Table() {
    construct_table(
      inputs: [p,q] = [(T,T), (T,F), (F,T), (F,F)],
      outputs: [
        [T,T,T,T],   // f₂(p,q) = T
        [T,T,T,F],   // f₈(p,q) = p∨q
        [T,T,F,T],   // f₁₀(p,q) = q→p
        [T,T,F,F],   // f₃(p,q) = p
        [T,F,T,T],   // f₉(p,q) = p→q
        [T,F,T,F],   // f₄(p,q) = q
        [T,F,F,T],   // f₁₁(p,q) = p↔q
        [T,F,F,F],   // f₇(p,q) = p∧q
        [F,T,T,T],   // f₁₅(p,q) = p↑q
        [F,T,T,F],   // f₁₂(p,q) = ¬(p↔q)
        [F,T,F,T],   // f₆(p,q) = ¬q
        [F,T,F,F],   // f₁₃(p,q) = ¬(p→q)
        [F,F,T,T],   // f₅(p,q) = ¬p
        [F,F,T,F],   // f₁₄(p,q) = ¬(q→p)
        [F,F,F,T],   // f₁₆(p,q) = p↓q
        [F,F,F,F]    // f₁(p,q) = F
      ]
    )
  } →
  
  assert(
    apply(Truth_Table()) ∧
    distinct_outputs(f₁,...,f₁₆) ∧
    exhaustive(f₁,...,f₁₆)
  )
}