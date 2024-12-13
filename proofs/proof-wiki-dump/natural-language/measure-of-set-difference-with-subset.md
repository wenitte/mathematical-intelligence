# 

Source: https://proofwiki.org/wiki/Measure_of_Set_Difference_with_Subset



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $S, T \in \Sigma$ be such that $S \subseteq T$, and suppose that $\mu \paren S < +\infty$.

Then:

$\mu \paren {T \setminus S} = \mu \paren T - \mu \paren S$
where $T \setminus S$ denotes set difference.


Signed Measure
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$.
Let $S, T \in \Sigma$ be such that $S \subseteq T$ with $\size {\map \mu S} < \infty$.

Then: 

$\map \mu {T \setminus S} = \map \mu T - \map \mu S$


Proof













\(\ds T\)

\(=\)







\(\ds \paren {T \setminus S} \cup \paren {T \cap S}\)





Set Difference Union Intersection














\(\ds \)

\(=\)







\(\ds \paren {T \setminus S} \cup S\)





Intersection with Subset is Subset








\(\ds \leadsto \ \ \)





\(\ds \mu \paren T\)

\(=\)







\(\ds \mu \paren {T \setminus S} + \mu \paren S\)





Measure is Finitely Additive Function, Set Difference Intersection with Second Set is Empty Set








\(\ds \leadsto \ \ \)





\(\ds \mu \paren T - \mu \paren S\)

\(=\)







\(\ds \mu \paren {T \setminus S})\)





Subtraction defined as $\mu \paren S < +\infty$



$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $1.2$: Measures




