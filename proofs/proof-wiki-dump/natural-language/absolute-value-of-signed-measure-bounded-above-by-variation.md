# 

Source: https://proofwiki.org/wiki/Absolute_Value_of_Signed_Measure_Bounded_Above_by_Variation

Theorem
Let $\struct {X, \Sigma}$ be a measurable space. 
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$. 
Let $\size \mu$ be the variation of $\mu$. 

Then: 

$\size {\map \mu A} \le \map {\size \mu} A$
for each $A \in \Sigma$. 


Proof
Let $\tuple {\mu^+, \mu^-}$ be the Jordan decomposition of $\mu$.
Then: 

$\mu = \mu^+ - \mu^-$
and:

$\size \mu = \mu^+ + \mu^-$
We have: 














\(\ds \size {\map \mu A}\)

\(=\)







\(\ds \size {\map {\mu^+} A - \map {\mu^-} A}\)




















\(\ds \)

\(\le\)







\(\ds \size {\map {\mu^+} A} + \size {\map {\mu^-} A}\)





Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map {\mu^+} A + \map {\mu^-} A\)





since $\mu^+ \ge 0$ and $\mu^- \ge 0$














\(\ds \)

\(=\)







\(\ds \map {\size \mu} A\)









$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.1$




