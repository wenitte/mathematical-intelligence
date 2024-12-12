# 

Source: https://proofwiki.org/wiki/Continuous_Image_of_Connected_Space_is_Connected/Proof_1

Theorem
Let $T_1$ and $T_2$ be topological spaces.
Let $S_1 \subseteq T_1$ be connected.
Let $f: T_1 \to T_2$ be a continuous mapping.

Then the image $f \sqbrk {S_1}$ is connected.


Proof
Let $i: f \sqbrk {T_1} \to T_2$ be the inclusion mapping.
Let $g: T_1 \to f \sqbrk {T_1}$ be the surjective restriction of $f$.
Then $f = i \circ g$.
Hence, by Continuity of Composite with Inclusion: Inclusion on Mapping, it follows that $g$ is continuous.

We use a Proof by Contradiction.
Suppose that $A \mid B$ is a partition of $f \sqbrk {T_1}$.
Then it follows that $g^{-1} \sqbrk A \mid g^{-1} \sqbrk B$ is a partition of $T_1$.


This article, or a section of it, needs explaining.In particular: Add the justification for the above - may already exist as a result, otherwise add a proof something like Preimage of Partition is Partition.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.2$: Connectedness: Proposition $6.2.10$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness: Functions and Products




