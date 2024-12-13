# 

Source: https://proofwiki.org/wiki/Quotient_Metric_on_Vector_Space_is_Invariant_Metric_iff_Vector_Subspace_is_Closed

Theorem
Let $K$ be a field.
Let $X$ be a vector space over $K$. 
Let $d$ be an invariant metric on $X$.
Let $N$ be a vector subspace of $X$.
Let $X/N$ be the quotient vector space of $X$ modulo $N$.
Let $\pi : X \to X/N$ be the quotient mapping.
Let $d_N$ be the quotient metric on $X/N$ induced by $d$.

Then $d_N$ is an invariant metric if and only if $N$ is closed.


Proof
From Quotient Metric on Vector Space is Invariant Pseudometric, $d_N$ is an invariant pseudometric.
It remains to show that Metric Space Axiom $(\text M 4)$ holds if and only if $N$ is closed.
Note that Metric Space Axiom $(\text M 4)$ holds if and only if for $x, y \in X$:

$\map {d_N} {\map \pi x, \map \pi y} = 0$
implies that $\map \pi x = \map \pi y$.
That is, if and only if for $x, y \in X$:

$\ds \inf_{z \mathop \in N} \map d {x - y, z} = 0$
implies that $\map \pi x = \map \pi y$. 
That is, if and only if for $x, y \in X$:

$\map d {x - y, N} = 0$
implies that $\map \pi x = \map \pi y$.
From Quotient Mapping is Linear Transformation and Kernel of Quotient Mapping, $\map \pi x = \map \pi y$ is equivalent to $x - y \in N$.
Setting $y = {\mathbf 0}_X$, we can see that:

for $x, y \in X$:
$\map d {x - y, N} = 0$
implies that $x - y \in N$
implies that:

for all $x \in X$:
$\map d {x, N} = 0$
implies that $x \in N$.
Clearly the converse implication also holds.
From Subset of Metric Space is Closed iff contains all Zero Distance Points, we have that:

for all $x \in X$:
$\map d {x, N} = 0$
implies that $x \in N$
holds if and only if $N$ is closed.
Hence Metric Space Axiom $(\text M 4)$ holds if and only if $N$ is closed.
$\blacksquare$





