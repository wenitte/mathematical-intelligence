# 

Source: https://proofwiki.org/wiki/Reflexive_Riesz_Lemma

Theorem
Let $X$ be a reflexive normed vector space.
Let $Y$ be a proper closed linear subspace of $X$. 
Then $\exists x_\alpha \in X$ such that: 

$\norm {x_\alpha} = 1$
with:

$\ds \map d {x_\alpha, Y} = 1$
where $d$ denotes distance to a set.


Proof
By Existence of Distance Functional, there exists a bounded linear functional $f$ on $X$ such that:

$\map f y = 0$ for each $y \in Y$
with norm $1$:

$\norm f = 1$
By the easy direction (sufficiency) of James's Theorem, $\exists x_\alpha \in X$ such that:

$\norm {x_\alpha} = 1$
and $f$ attains its norm at $x_\alpha$:

$\size {\map f {x_\alpha} } = 1$
Since $\map f y = 0$ for each $y \in Y$, we have:

$\forall y \in Y: 1 = \size {\map f {x_\alpha} } = \size {\map f {x_\alpha - y} } \le \norm {x_\alpha - y}$

Taking the infimum over all $y \in Y$, we obtain:

$\ds 1 \le \inf_{y \mathop \in Y} \norm {x_\alpha - y}$
But $\norm {x_\alpha} = 1$, we obtain:

$\ds 1 = \inf_{y \mathop \in Y} \norm {x_\alpha - y}$
By definition of distance to a set:

$\ds \map d {x_\alpha, Y} = 1$
Hence the result.
$\blacksquare$


Also see
Riesz's Lemma




