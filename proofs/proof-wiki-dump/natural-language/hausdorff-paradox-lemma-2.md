# 

Source: https://proofwiki.org/wiki/Hausdorff_Paradox/Lemma_2

Hausdorff Paradox: Lemma
Let $G$ be the free product of the groups $G_1 = \set {e_1, \phi}$ and $G_2 = \set {e_2, \psi, \psi^2}$.
Let $U := \mathbb D^3 \subset \R^3$ be a unit ball in real Euclidean space of $3$ dimensions.
Let $\phi$ and $\psi$ be represented by the axes of rotation $a_\phi$ and $a_\psi$ passing through the center of $U$ such that:

$\phi$ is a rotation by $180 \degrees$, that is $\pi$ radians about $a_\phi$
$\psi$ is a rotation by $120 \degrees$, that is $\dfrac {2 \pi} 3$ radians about $a_\psi$
Hence consider $G$ as the group of all rotations generated by $\phi$ and $\psi$.
The identity of $G$ is then the identity mapping $\mathbf I_3$.

The group $G$ can be partitioned into $3$ disjoint sets:

$G = A \cup B \cup C$
such that:




\(\text {(1)}: \quad\)









\(\ds A \circ \phi\)

\(=\)







\(\ds B \cup C\)










\(\text {(2)}: \quad\)









\(\ds A \circ \psi\)

\(=\)







\(\ds B\)










\(\text {(3)}: \quad\)









\(\ds A \circ \psi^2\)

\(=\)







\(\ds C\)











Proof
We construct $A$, $B$ and $C$ by recursion on the lengths of the elements of $G$.
Let:














\(\ds \mathbf I_3\)

\(\in\)







\(\ds A\)




















\(\ds \psi\)

\(\in\)







\(\ds B\)




















\(\ds \psi^2\)

\(\in\)







\(\ds C\)









Then we construct the Cayley table for $G$ as follows:

$\begin {array} {c|ccc}
\circ & \alpha \in A & \alpha \in B & \alpha \in C \\
\hline
\text {$\alpha$ ends with $\psi^{\pm 1}$}: & \alpha \phi \in B & \alpha \phi \in A & \alpha \phi \in A \\
\text {$\alpha$ ends with $\phi$}: & \alpha \psi \in B & \alpha \psi \in C & \alpha \psi \in A \\
\text {$\alpha$ ends with $\phi$}: & \alpha \psi^{-1} \in C & \alpha \psi^{-1} \in A & \alpha \psi^{-1} \in B \\
\end {array}$
This guarantees that the conditions $(1)$, $(2)$ and $(3)$ are satisfied.
$\blacksquare$


Sources
1973: Thomas J. Jech: The Axiom of Choice ... (previous) ... (next): $1.$ Introduction: $1.3$ A paradoxical decomposition of the sphere: Lemma $1.4$



