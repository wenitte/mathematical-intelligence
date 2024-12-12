# 

Source: https://proofwiki.org/wiki/Continuous_Image_of_Compact_Space_is_Compact/Proof_2

Theorem
Let $T_1$ and $T_2$ be topological spaces.
Let $f: T_1 \to T_2$ be a continuous mapping.

If $T_1$ is compact then so is its image $f \sqbrk {T_1}$ under $f$.

That is, compactness is a continuous invariant.


Proof
Suppose $\UU$ is an open cover of $f \sqbrk {T_1}$ by sets open in $T_2$.
Because $f$ is continuous, it follows that $f^{-1} \sqbrk U$ is open in $T_1$ for all $U \in \UU$.
The set $\set {f^{-1} \sqbrk U: U \in \UU}$ is an open cover of $T_1$, because for any $x \in T_1$, it follows that $\map f x$ must be in some $U \in \UU$.
Because $T_1$ is compact, it has a finite subcover $\set {f^{-1} \sqbrk {U_1}, f^{-1} \sqbrk {U_2}, \ldots, f^{-1} \sqbrk {U_r} }$.
It follows that $\set {U_1, U_2, \ldots, U_r}$ is a finite subcover of $f \sqbrk {T_1}$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.5$: Continuous maps on compact spaces: Proposition $5.5.1$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Incorporate what this proof actually says into this page or write a new oneIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous) ... (next): $4.14$




