# 

Source: https://proofwiki.org/wiki/Continuous_Bijection_from_Compact_to_Hausdorff_is_Homeomorphism



Theorem
Let $T_1$ be a compact space.
Let $T_2$ be a Hausdorff space.
Let $f: T_1 \to T_2$ be a continuous bijection.

Then $f$ is a homeomorphism.


Corollary
Let $T_1$ be a compact space.
Let $T_2$ be a Hausdorff space.
Let $f: T_1 \to T_2$ be a continuous injection.

Then $f$ determines a homeomorphism from $T_1$ to $f \sqbrk {T_1}$.
That is, $f$ is an embedding of $T_1$ into $T_2$.


Proof
Let $g = f^{-1}$.
We need to show that $g: T_2 \to T_1$ is continuous.
For any $V \subseteq T_1$, we have $g^{-1} \sqbrk V = \map f V$.
We are to show that if $V$ is closed in $T_1$, then $g^{-1} \sqbrk V$ is closed in $T_2$.

Suppose $V$ is closed in $T_1$.
Since $T_1$ is compact, $V$ is compact by Closed Subspace of Compact Space is Compact.
So $f \sqbrk V$ is compact from Continuous Image of Compact Space is Compact.
Since $T_2$ is Hausdorff, $f \sqbrk V$ is closed by Compact Subspace of Hausdorff Space is Closed.
But $f \sqbrk V = g^{-1} \sqbrk V$, so $g^{-1} \sqbrk V$ is closed.

From Continuity Defined from Closed Sets, it follows that $g$ is continuous.
Thus by definition, $f$ is a homeomorphism.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous) ... (next): $4.17$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.9$: An inverse function theorem: Theorem $5.9.1$




