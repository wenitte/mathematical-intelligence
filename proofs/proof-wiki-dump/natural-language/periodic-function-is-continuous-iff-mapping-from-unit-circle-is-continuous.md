# 

Source: https://proofwiki.org/wiki/Periodic_Function_is_Continuous_iff_Mapping_from_Unit_Circle_is_Continuous



Theorem
Let $f: \R \to \R$ be a periodic real function whose period is $2 \pi$.
Let $\SS$ denote the unit circle whose center is at the origin of the Cartesian plane $\R^2$.
Let $p: \R \to \SS$ be the mapping defined as:

$\forall x \in \R: \map p x = \tuple {\cos x, \sin x}$

Let $f': \SS \to \R$ be the well-defined real-valued function such that:

$f = f' \circ p$
where $f' \circ p$ denotes the composition of $f'$ with $p$.

Then $f$ is continuous if and only if $f'$ is continuous.


Proof
The existence and well-definedness of $f'$ are demonstrated in Periodic Function as Mapping from Unit Circle.


Necessary Condition
Let $f'$ be continuous.
We have that Real Sine Function is Continuous and Cosine Function is Continuous.
Hence from Continuity of Composite with Inclusion: Inclusion on Mapping and Continuous Mapping to Product Space it follows that $p$ is continuous.
Hence $f = f \circ p$ is continuous.
$\Box$


Sufficient Condition
  
Let $f$ be continuous.
Let $U \subseteq \SS$.
Let $p^{-1} \sqbrk U$ be open in $\R$.
Let $b \in U$.
Then:

$\exists a \in p^{-1} \sqbrk U: b = \tuple {\cos a, \sin a}$
Because $p^{-1} \sqbrk U$ be open:

$\exists \delta \in \R_{>0}: \map {B_\delta} a \subseteq p^{-1} \sqbrk U$
Let us assume that $\delta < \pi$.
Thus:

$b \in p \sqbrk {\map {B_\delta} a} \subseteq U$
But we have that:

$p \sqbrk {\map {B_\delta} a} = S \cap \map {B_\delta} b$
as can be seen from the diagram on the right
It follows by calculation that:

$\epsilon = 2 \sin \dfrac \delta 2$
Thus $p \sqbrk {\map {B_\delta} a}$ is an open ball in $\SS$ which has a center at $b$.
Hence it follows that $U$ is open in $\SS$.

We have asserted that $f$ is continuous.
Let $W$ be open in $\RR$.
Then $p^{-1} \sqbrk {f'^{-1} \sqbrk W} = f^{-1} \sqbrk W$ is open in $\RR$.
Hence $f'^{-1} \sqbrk W$ is open in $\SS$.
Thus it follows that $f'$ is continuous.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.8$: Quotient spaces




