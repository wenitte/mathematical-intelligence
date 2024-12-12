# 

Source: https://proofwiki.org/wiki/Continuous_Image_of_Compact_Space_is_Compact/Corollary_3/Proof_1

Corollary to Continuous Image of Compact Space is Compact
Let $S$ be a compact topological space.
Let $f: S \to \R$ be a continuous real-valued function.

Then $f$ attains its bounds on $S$.


Proof
By Continuous Image of Compact Space is Compact: Corollary $2$, $f \sqbrk S$ is bounded.
By Supremum of Bounded Above Set of Reals is in Closure:

$\map \sup {f \sqbrk S} \in \map \cl {f \sqbrk S}$
and by Infimum of Bounded Below Set of Reals is in Closure:

$\map \inf {f \sqbrk S} \in \map \cl {f \sqbrk S}$

From Continuous Image of Compact Space is Compact, $f \sqbrk S$ is compact in $\R$.
From Non-Closed Set of Real Numbers is not Compact, it follows from the Rule of Transposition that $f \sqbrk S$ is closed in $\R$.
From Closed Set equals its Closure:

$f \sqbrk S = \map \cl {f \sqbrk S}$
Hence the result that:

$\map \sup {f \sqbrk S} \in f \sqbrk S$
and:

$\map \inf {f \sqbrk S} \in f \sqbrk S$
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous) ... (next): $4.16$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.5$: Continuous maps on compact spaces: Corollary $5.5.4$




