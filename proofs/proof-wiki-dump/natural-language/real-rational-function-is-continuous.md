# 

Source: https://proofwiki.org/wiki/Real_Rational_Function_is_Continuous

Theorem
A real rational function is continuous at every point at which it is defined.
Thus a real rational function is continuous on every interval of $\R$ not containing a root of the denominator of the function.


Proof
Let:

$\map R x = \dfrac {\map P x} {\map Q x}$
be a real rational function, defined at all points of $\R$ at which $\map Q x \ne 0$.
Let $c \in \R$.
From Real Polynomial Function is Continuous‎:

$\ds \lim_{x \mathop \to c} \map P x = \map P c$
and:

$\ds \lim_{x \mathop \to c} \map Q x = \map Q c$
Thus by Quotient Rule for Limits of Real Functions:

$\ds \lim_{x \mathop \to c} \map R x = \lim_{x \mathop \to c} \frac {\map P x} {\map Q x} = \frac {\map P c} {\map Q c}$
whenever $\map Q c \ne 0$.

So whatever value we choose for $c$ such that $\map Q c \ne 0$, we have that $\map P x$ is continuous at $c$.

From the definition of continuity on an interval, the second assertion follows.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.4$: Continuity
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 8.13$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): continuous function (v)




