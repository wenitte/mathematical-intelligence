# 

Source: https://proofwiki.org/wiki/Limit_of_Real_Function/Examples/x_times_Sine_of_Reciprocal_of_x_at_0

Example of Limit of Real Function
Let:

$\map f x = x \map \sin {\dfrac 1 x}$
Then:

$\ds \lim_{x \mathop \to 0} \map f x = 0$


Proof
By definition of the limit of a real function:

$\ds \lim_{x \mathop \to 0} \map f x = A$
if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in \R: 0 < \size x < \delta \implies \size {\map f x - A} < \epsilon$

Let $\epsilon \in \R_{>0}$ be chosen arbitrarily.
Let $\delta = \epsilon$.
Then we have:














\(\ds 0 < \size x\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \size {x \map \sin {\dfrac 1 x} }\)

\(<\)







\(\ds \delta\)





because $\map \sin {\dfrac 1 x} \le 1$ for $x \ne 0$








\(\ds \leadsto \ \ \)





\(\ds \size {x \map \sin {\dfrac 1 x} }\)

\(<\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \size {\map f x - 0}\)

\(<\)







\(\ds \epsilon\)









Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.3$: Limits of functions: Examples $1.3.4$




