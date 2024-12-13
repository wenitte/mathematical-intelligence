# 

Source: https://proofwiki.org/wiki/Measure_of_Set_Difference_with_Subset/Signed_Measure

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$.
Let $S, T \in \Sigma$ be such that $S \subseteq T$ with $\size {\map \mu S} < \infty$.

Then: 

$\map \mu {T \setminus S} = \map \mu T - \map \mu S$


Proof
Let $\struct {\mu^+, \mu^-}$ be the Jordan decomposition of $\mu$.
Then, since: 

$\size {\map \mu S} < \infty$
We have: 

$\map {\mu^+} S < \infty$ and $\map {\mu^-} S < \infty$
Then, we have: 














\(\ds \map \mu {T \setminus S}\)

\(=\)







\(\ds \map {\mu^+} {T \setminus S} - \map {\mu^-} {T \setminus S}\)





Definition of Jordan Decomposition














\(\ds \)

\(=\)







\(\ds \paren {\map {\mu^+} T - \map {\mu^+} S} - \paren {\map {\mu^-} T - \map {\mu^-} S}\)





Measure of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \paren {\map {\mu^+} T - \map {\mu^-} T} - \paren {\map {\mu^+} S - \map {\mu^-} S}\)




















\(\ds \)

\(=\)







\(\ds \map \mu T - \map \mu S\)





Definition of Jordan Decomposition



$\blacksquare$





