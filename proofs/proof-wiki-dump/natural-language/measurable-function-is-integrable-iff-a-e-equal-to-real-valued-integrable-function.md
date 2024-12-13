# 

Source: https://proofwiki.org/wiki/Measurable_Function_is_Integrable_iff_A.E._Equal_to_Real-Valued_Integrable_Function



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f : X \to \overline \R$ be a $\Sigma$-measurable function.

Then $f$ is $\mu$-integrable if and only if:

there exists a $\mu$-integrable function $g : X \to \R$ such that $g = f$ $\mu$-almost everywhere.


Proof
Sufficient Condition
Suppose that: 

there exists a $\mu$-integrable function $g : X \to \R$ such that $g = f$ $\mu$-almost everywhere.
Then, from A.E. Equal Positive Measurable Functions have Equal Integrals: Corollary 1, we have: 

$f$ is $\mu$-integrable.
$\Box$

Necessary Condition
Suppose that $f$ is $\mu$-integrable.
From Integrable Function is A.E. Real-Valued, we have: 

$\map f x \in \R$ for $\mu$-almost all $x \in X$.
That is, there exists a $\mu$-null set $N \subseteq X$ such that whenever: 

$\size {\map f x} = \infty$
we have $x \in N$.
Define a function $g : X \to \R$ by:

$\map g x = \map f x \map {\chi_{X \setminus N} } x$
for each $x \in X$.
Since $N \in \Sigma$, we have: 

$X \setminus N \in \Sigma$
From Characteristic Function Measurable iff Set Measurable, we have: 

$\chi_{X \setminus N}$ is $\Sigma$-measurable.
From Pointwise Product of Measurable Functions is Measurable, we have: 

$g$ is $\Sigma$-measurable.
Note that whenever $x \in X$ has: 

$\map f x \map {\chi_{X \setminus N} } x \ne \map f x$
we have: 

$\map {\chi_{X \setminus N} } x = 0$
That is, from the definition of set difference: 

$x \in N$
So:

$g = f$ $\mu$-almost everywhere.
From A.E. Equal Positive Measurable Functions have Equal Integrals: Corollary 1, we have: 

$g$ is $\mu$-integrable.
So:

there exists a $\mu$-integrable function $g : X \to \R$ such that $g = f$ $\mu$-almost everywhere.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $2.3$: Integral




