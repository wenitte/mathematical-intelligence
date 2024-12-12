# 

Source: https://proofwiki.org/wiki/Continuity_Defined_by_Closure/Proof_1



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: T_1 \to T_2$ be a mapping.

Then $f$ is continuous if and only if:

$\forall H \subseteq S_1: f \sqbrk {H^-} \subseteq \paren {f \sqbrk H}^-$
where $H^-$ denotes the closure of $H$ in $T_1$.

That is, if and only if the image of the closure is a subset of the closure of the image.


Proof
Necessary Condition
Let $f$ be continuous.
Let $y \in f \sqbrk {\map \cl H}$.
Then:

$\exists x \in \map \cl H: y = \map f x$

Let $U$ be an open set of $T_2$ such that $y \in U$.
Then by definition of continuous mapping:

$f^{-1} \sqbrk U$ is an open set of $T_1$ such that:
$x \in f^{-1} \sqbrk U$
Hence:

$f^{-1} \sqbrk U \cap H \ne \O$
as $x \in \map \cl H$.
Hence:














\(\ds U \cap f \sqbrk H\)

\(\supseteq\)







\(\ds f \sqbrk {f^{-1} \sqbrk U \cap H}\)




















\(\ds \)

\(\ne\)







\(\ds \O\)









and:

$y \in \map \cl {f \sqbrk H}$
That is:

$f \sqbrk {\map \cl H} \subseteq \map \cl {f \sqbrk H}$
$\Box$


Sufficient Condition
Suppose that for all $H \subseteq S_1$:

$f \sqbrk {\map \cl H} \subseteq \map \cl {f \sqbrk H}$
Let $V \subseteq S_2$ be closed in $T_2$.
Then:

$f \sqbrk {\map \cl {f^{-1} \sqbrk V} } \subseteq \map \cl V = V$
So by Set is Closed iff Equals Topological Closure:

$\map \cl {f^{-1} \sqbrk V} \subseteq f^{-1} \sqbrk V$
and so $f^{-1} \sqbrk V$ is closed in $T_1$.
Hence from Continuity Defined from Closed Sets:

$f$ is continuous.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 25$




