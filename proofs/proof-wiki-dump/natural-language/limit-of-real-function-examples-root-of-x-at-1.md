# 

Source: https://proofwiki.org/wiki/Limit_of_Real_Function/Examples/Root_of_x_at_1

Example of Limit of Real Function
$\ds \lim_{x \mathop \to 1} \sqrt x = 1$


Proof
By definition of the limit of a real function:

$\ds \lim_{x \mathop \to a} \map f x = A$
if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in \R: 0 < \size {x - a} < \delta \implies \size {\map f x - A} < \epsilon$

In this instance, we have:

$\map f x = \sqrt x$
$A = 1$
So:














\(\ds \size {\map f x - A}\)

\(=\)







\(\ds \size {\sqrt x - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\size {x - 1} } {\sqrt x + 1}\)





multiplying top and bottom by $\sqrt x + 1$



for $0 < x < 2$.
Let $\delta = \epsilon$.
Let $0 < \size {x - 1} < \delta = \epsilon$.
Then we obtain:














\(\ds \size {\sqrt x - 1}\)

\(<\)







\(\ds \dfrac \epsilon {\sqrt x + 1}\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)





multiplying top and bottom by $\sqrt x + 1$



$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: $2.1$ Limits and Continuity: Example $\text A$




