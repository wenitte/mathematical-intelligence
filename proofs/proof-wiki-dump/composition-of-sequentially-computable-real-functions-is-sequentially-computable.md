theorem Function_Composition_Sequential_Computability() {
  assert(
    ∀f,g: ℝ→ℝ, 
    (isSequentiallyComputable(f) ∧ isSequentiallyComputable(g)) ∧
    (∀x∈ℝ: h(x) = f(g(x))) 
    ⇒ isSequentiallyComputable(h)
  )
} ↔

proof Function_Composition_Sequential_Computability() {
  setVar(f,g: ℝ→ℝ) →
  assume(isSequentiallyComputable(f) ∧ isSequentiallyComputable(g)) →
  setVar(h: ℝ→ℝ, h(x) = f(g(x))) →
  
  lemma Sequence_Computability() {
    setVar({xₙ}: ComputableSequence) →
    assert(isSequentiallyComputable(g) ⇒ isComputable({g(xₙ)})) →
    assert(isSequentiallyComputable(f) ⇒ isComputable({f(g(xₙ))}))
  } →
  
  apply(Sequence_Computability()) →
  
  assert(∀n∈ℕ: h(xₙ) = f(g(xₙ))) →
  assert(isComputable({h(xₙ)})) →
  
  assert(
    ∀{xₙ}: ComputableSequence ⇒ isComputable({h(xₙ)})
  ) →
  
  conclude(isSequentiallyComputable(h))
}