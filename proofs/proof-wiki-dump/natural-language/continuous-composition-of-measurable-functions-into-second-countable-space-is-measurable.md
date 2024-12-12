# 

Source: https://proofwiki.org/wiki/Continuous_Composition_of_Measurable_Functions_into_Second_Countable_Space_is_Measurable

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\struct {X_i, \tau_i}$ for $i = 1, \ldots, n$ and $\struct {Y, \tau_Y}$ be topological spaces such that $X_1, \ldots, X_n$ are second countable. 
Let $f_i: \struct {X, \Sigma} \to \struct {X_i, \map \BB {X_i, \tau_i} }$, $i = 1, \ldots, n$ be measurable functions where $\map \BB {X_i, \tau_i}$ denotes the Borel-sigma algebra.
Let $F: \struct {\ds \prod_{i \mathop = 1}^n X_i, \tau} \to \struct {Y, \tau_Y}$ be continuous where $\tau$ denotes the product topology on the finite Cartesian product $\ds \prod_{i \mathop = 1}^n X_i$. 

Then the composition $h: \struct {X, \Sigma} \to \struct {Y, \map \BB {Y, \tau_Y} }$, $x \mapsto \map F {\map {f_1} x, \ldots, \map {f_n} x}$ is measurable.


Proof
By Mapping Measurable iff Measurable on Generator, it suffices to check that $h$ is measurable on open sets.
Thus let $U \in \tau_Y$ be given.
As $F$ is continuous by assumption, the pre-image $F^{-1} \sqbrk U$ is in $\tau$. 
By:

definition of basis
Countable Product of Second-Countable Spaces is Second-Countable
there exists an at most countable indexing set $J \subseteq \N$ and indexed family of open sets $\family {U^i_j}_{j \mathop \in J} \subseteq \tau_i$, $i = 1, \ldots, n$ such that:

$F^{-1} \sqbrk U = \ds \bigcup_{j \mathop \in J} \prod_{i \mathop = 1}^n U^i_j$
Putting things together:














\(\ds h^{-1} \sqbrk U\)

\(=\)







\(\ds \set {x \in X : \map F {\map {f_1} x ,\ldots, \map {f_n} x} \in U}\)




















\(\ds \)

\(=\)







\(\ds \set {x \in X : \tuple {\map {f_1} x, \ldots, \map {f_n} x} \in F^{-1} \sqbrk U}\)




















\(\ds \)

\(=\)







\(\ds \set {x \in X : \tuple {\map {f_1} x, \ldots, \map {f_n} x} \in \bigcup_{j \mathop \in J} \prod_{i \mathop = 1}^n U^i_j }\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{j \mathop \in J} \set {x \in X : \tuple { \map {f_1} x, \ldots , \map {f_n} x} \in \prod_{i \mathop = 1}^n U^i_j }\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{j \mathop \in J} \bigcap_{i \mathop = 1}^n \set {x \in X : \map {f_i} x \in U^i_j }\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{j \mathop \in J} \bigcap_{i \mathop = 1}^n f_i^{-1} \sqbrk {U^i_j}\)









By assumption each $f_i$ is measurable.
By definition of the Borel-sigma algebra:

$\tau_i \subseteq \map \BB {X_i, \tau_i}$
Hence it follows that every $f_i^{-1} \sqbrk {U^i_j}$ is in $\Sigma$.
Therefore by Sigma-Algebra Closed under Countable Intersection:

$\ds \bigcap_{i \mathop = 1}^n f_i^{-1} \sqbrk {U^i_j}$
is also in $\Sigma$.

Finally, we note that by definition of $\sigma$-algebra, $\Sigma$ contains at most countable unions of measurable sets.
Hence it follows that:

$h^{-1} \sqbrk U = \ds \bigcup_{j \mathop \in J} \bigcap_{i \mathop = 1}^n f_i^{-1} \sqbrk {U^i_j}$ is in $\Sigma$
This concludes the proof. 
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): $10.18$
This statement found in Rudin is concerned with the special case $X = Y = \R$ and $n = 2$; however the idea of his proof generalizes to the above setting.




