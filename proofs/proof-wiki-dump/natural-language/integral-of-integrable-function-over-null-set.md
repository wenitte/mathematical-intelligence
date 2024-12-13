# 

Source: https://proofwiki.org/wiki/Integral_of_Integrable_Function_over_Null_Set

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \overline \R$ be a $\mu$-integrable function.
Let $N$ be a $\mu$-null set.

Then:

$\ds \int_N f \rd \mu = 0$
where $\ds \int_N$ signifies an integral over $N$.


Proof
We have, from definition: 

$\ds \int_N f \rd \mu = \int f \cdot \chi_N \rd \mu$
Note that if $x \in X \setminus N$, we have: 

$\map {\chi_N} x = 0$
So, if: 

$\map f x \map {\chi_N} x \ne 0$
we must have $x \in N$. 
Since $N$ is a null set, this gives:

$f \cdot \chi_N = 0$ $\mu$-almost everywhere.
From Measurable Function Zero A.E. iff Absolute Value has Zero Integral, we therefore have: 

$\ds \int \size {f \cdot \chi_N} \rd \mu = 0$
Then, from Triangle Inequality for Integrals: Corollary, we have:

$\ds \int f \cdot \chi_N \rd \mu = 0$
That is: 

$\ds \int_N f \rd \mu = 0$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $10.9 \, \text{(ii)}$




