theorem Octagonal_Numbers_Closed_Form() {
  assert(
    ∀n ∈ ℕ ⇒ O_n = n(3n - 2)
  )  
} ↔

proof Octagonal_Numbers_Closed_Form() {
  setVar(n: ℕ) →
  setDef(
    "Octagonal numbers are k-gonal numbers where k = 8"
  ) →
  lemma Polygonal_Numbers_Closed_Form() {
    assert(
      ∀k,n ∈ ℕ ⇒ P(k,n) = (n/2)((k-2)n - k + 4)
    )
  } →
  apply(Polygonal_Numbers_Closed_Form()) →
  substitute(k = 8) →
  assert(
    O_n = (n/2)((8-2)n - 8 + 4)
  ) →
  simplify(
    (n/2)(6n - 4)
  ) →
  assert(
    O_n = n(3n - 2)
  )
}