theorem ComplementLimitInferior() {
  assert(
    ∀{En}n∈ℕ ⇒ 
    complement(liminf[n→∞] En) = limsup[n→∞] complement(En)
  )
} ↔

proof ComplementLimitInferior() {
  setVar({En}n∈ℕ: SequenceOfSets) →
  
  assert(
    complement(liminf[n→∞] En) =
    complement(⋃[n=0→∞] ⋂[i=n→∞] En)
  ) →
  applyDef(LimitInferiorOfSets) →
  
  assert(
    complement(⋃[n=0→∞] ⋂[i=n→∞] En) =
    ⋂[n=0→∞] complement(⋂[i=n→∞] En)
  ) →
  applyTheorem(DeMorganLaws) →
  
  assert(
    ⋂[n=0→∞] complement(⋂[i=n→∞] En) =
    ⋂[n=0→∞] ⋃[i=n→∞] complement(En)
  ) →
  applyTheorem(DeMorganLaws) →
  
  assert(
    ⋂[n=0→∞] ⋃[i=n→∞] complement(En) =
    limsup[n→∞] complement(En)
  ) →
  applyDef(LimitSuperiorOfSets)
}