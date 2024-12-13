# 

Source: https://proofwiki.org/wiki/Limit_of_Real_Function/Examples/Sine_of_Reciprocal_of_x_at_0

Example of Limit of Real Function
Let:

$\map f x = \map \sin {\dfrac 1 x}$
Then:

$\ds \lim_{x \mathop \to 0} \map f x$
does not exist.


Proof
By definition of the limit of a real function:

$\ds \lim_{x \mathop \to a} \map f x = A$
if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in \R: 0 < \size {x - a} < \delta \implies \size {\map f x - A} < \epsilon$

Let $\epsilon = \dfrac 1 2$.
Let $\delta \in \R_{>0}$.
Let $n \in \N$ such that $N = \dfrac 2 {\pi \paren {1 + 4 n} } < \delta$.
Then:

$\sin N = 1$
and so it is not the case that:

$0 < \size x < \delta \implies \size {\map f x} < \epsilon$
It follows that $\map \sin {\dfrac 1 x}$ has no limit at $x = 0$.
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: $2.1$ Limits and Continuity: Example $\text B$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.3$: Limits of functions: Examples $1.3.4$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 16$




