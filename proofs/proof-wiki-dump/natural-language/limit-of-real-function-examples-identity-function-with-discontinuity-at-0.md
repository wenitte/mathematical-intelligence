# 

Source: https://proofwiki.org/wiki/Limit_of_Real_Function/Examples/Identity_Function_with_Discontinuity_at_0

Example of Limit of Real Function
Let $f$ be the real function defined as:

$\map f x = \begin {cases} x & : x \ne 0 \\ 1 & : x = 0 \end {cases}$
Then:

$\ds \lim_{x \mathop \to 0} \map f x = 0$


Proof
By definition of the limit of a real function:

$\ds \lim_{x \mathop \to a} \map f x = A$
if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in \R: 0 < \size {x - a} < \delta \implies \size {\map f x - A} < \epsilon$

In this instance, we have:

$\map f x = x$ for $x \ne 0$
$A = 0$
Let $\epsilon \in \R_{>0}$ be arbitrary.
Let $\delta = \epsilon$.
Let $0 < \size {x - 1} < \delta = \epsilon$.
Then we obtain:














\(\ds \size {\map f x - 0}\)

\(=\)







\(\ds \size x\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.3$: Limits of functions: Example $1.3.2$




