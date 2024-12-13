# 

Source: https://proofwiki.org/wiki/Reciprocal_Function_is_Discontinuous_at_Zero

Theorem
Let $f$ be the real function defined as:

$\map f x = \dfrac 1 x$
for $x \ne 0$
Then $\map f x$ cannot be extended to a real function $g$ on $\R$ such that $\map g x$ is continuous on $\openint {-1} 1$.


Proof
It is apparent that $f$ is itself not continuous at $x = 0$.
We need to show that whatever we define $\map g 0$ to be, $\ds \lim_{x \mathop \to 0} \map f x \ne \map f 0$.

Let $\map g 0 = c$.
Let $\epsilon$ be selected.
Let $x$ be chosen such that $x < \dfrac 1 c$.
Then $\dfrac 1 x > c$.
It follows that

$\ds \lim_{x \mathop \to 0^+} \map f x > c$
and so:
$\ds \lim_{x \mathop \to 0} \map f x \ne \map f 0$
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: $2.1$ Limits and Continuity: Example $\text D$




