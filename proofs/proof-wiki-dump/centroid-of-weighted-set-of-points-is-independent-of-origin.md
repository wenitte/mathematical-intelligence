theorem Centroid_Independence() {
  assert(
    ∀O',O ∈ ℝ^n,
    ∀S = {A_1,...,A_n} ⊂ ℝ^n,
    ∀W: S → ℝ,
    let l = vec(OO'),
    let a_i = vec(OA_i),
    let w_i = W(A_i),
    let G = centroid(S,W,O),
    let G' = centroid(S,W,O') ⇒
    vec(OG) - l = vec(OG')
  )
} ↔

proof Centroid_Independence() {
  setVar(O,O': ℝ^n) →
  setVar(S: {A_1,...,A_n}) →
  setVar(W: S → ℝ) →
  
  assert(
    vec(OG) = (Σ(i=1 to n)(w_i * a_i)) / (Σ(i=1 to n)(w_i))
  ) →
  
  lemma Position_Vectors_From_New_Origin() {
    assert(
      ∀i ∈ [1,n]: vec(O'A_i) = a_i - l
    )
  } →
  
  assert(
    vec(OG') = (Σ(i=1 to n)(w_i * (a_i - l))) / (Σ(i=1 to n)(w_i))
  ) →
  
  assert(
    vec(OG') = (Σ(i=1 to n)(w_i * a_i)) / (Σ(i=1 to n)(w_i)) - 
    (l * Σ(i=1 to n)(w_i)) / (Σ(i=1 to n)(w_i))
  ) →
  
  assert(
    vec(OG') = vec(OG) - l
  )
}