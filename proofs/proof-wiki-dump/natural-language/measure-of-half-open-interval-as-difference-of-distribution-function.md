# 

Source: https://proofwiki.org/wiki/Measure_of_Half-Open_Interval_as_Difference_of_Distribution_Function

Theorem
Let $a, b \in \R$. 
Let $\mu$ be a finite Borel measure on $\R$.
Let $F_\mu$ be the distribution function of $\mu$.

Then: 

$\map \mu {\hointl a b} = \map {F_\mu} b - \map {F_\mu} a$


Proof
Note that: 

$\map \mu {\hointl {-\infty} a} < \infty$
since $\mu$ is finite.
Then, we have: 














\(\ds \map {F_\mu} b - \map {F_\mu} a\)

\(=\)







\(\ds \map \mu {\hointl {-\infty} b} - \map \mu {\hointl {-\infty} a}\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\hointl {-\infty} b \setminus \hointl {-\infty} a}\)





Measure of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \map \mu {\hointl a b}\)





Difference of Unbounded Closed Intervals



$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $1.3$: Outer Measures




