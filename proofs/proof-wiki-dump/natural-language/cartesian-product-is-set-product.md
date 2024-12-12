# 

Source: https://proofwiki.org/wiki/Cartesian_Product_is_Set_Product



Theorem
Let $S$ and $T$ be sets.
Let $S \times T$ be the Cartesian product of $S$ and $T$.
Let $\pr_1: S \times T \to S$ and $\pr_2: S \times T \to T$ be the first and second projections respectively on $S \times T$.

Then $\struct {S \times T, \pr_1, \pr_2}$ is a set product.


Family of Sets
Let $\family {S_i}_{i \mathop \in I}$ be a family of sets.
For all $j \in I$, let $\pr_i: \ds \prod_{j \mathop \in I} \family {S_j} \to S_i$ be the $i$th projection from $\ds \prod_{j \mathop \in I} \family {S_j}$ to $S_i$.

Then $\struct {\ds \prod_{j \mathop \in I} \family {S_j}, \family {\pr_i}_{i \mathop \in I} }$ is a set product.


Proof
Consider any set $X$ and mappings $f_1: X \to S$ and $f_2: X \to T$.
Define $h: X \to S \times T$ by:

$\forall x \in X: \map h x = \tuple {\map {f_1} x, \map {f_2} x}$
Then for all $x \in X$ we have:

$\map {\paren {\pr_1 \mathop \circ h} } x = \pr_1 \tuple {\map {f_1} x, \map {f_2} x} = \map {f_1} x)$
and

$\map {\paren {\pr_2 \mathop \circ h} } x = \pr_2 \tuple {\map {f_1} x, \map {f_2} x} = \map {f_2} x$
So:

$\pr_1 \mathop \circ h = f_1$
$\pr_2 \mathop \circ h = f_2$
Thus $h$ is shown to exist.

Suppose there exists a mapping $k: X \to S \times T$ such that:

$\pr_1 \mathop \circ k = f_1$
$\pr_2 \mathop \circ k = f_2$
Let $x \in X$ and let $\map k x = \tuple {s, t}$.
Then:

$\map {f_1} x = \map {\paren {\pr_1 \mathop \circ k} } x = \map {\pr_1} {s, t} = s$
$\map {f_2} x = \map {\paren {\pr_2 \mathop \circ k} } x = \map {\pr_2} {s, t} = t$
and so:














\(\ds \map k x\)

\(=\)







\(\ds \tuple {s, t}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\map {f_1} x, \map {f_2} x}\)




















\(\ds \)

\(=\)







\(\ds \map h x\)









and so $k = h$.

So $h$ is unique.
Hence the result.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Problem $\text{BB}$: Categorical Matters
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.12$
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 2.5.1$




