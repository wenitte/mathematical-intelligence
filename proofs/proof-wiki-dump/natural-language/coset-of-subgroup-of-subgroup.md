# 

Source: https://proofwiki.org/wiki/Coset_of_Subgroup_of_Subgroup

Theorem
Let $G$ be a group.
Let $H, K \le G$ be subgroups of $G$.
Let $K \subseteq H$.

Let $x \in G$.
Then either:

$x K \subseteq H$
or:

$x K \cap H = \O$
where $x K$ denotes the left coset of $K$ by $x$.


Proof
Suppose $x K \cap H \ne \O$.
Then:














\(\ds x K \cap H\)

\(\ne\)







\(\ds \O\)














\(\ds \leadsto \ \ \)

\(\ds \exists y \in G: \, \)



\(\ds y\)

\(\in\)







\(\ds x K \cap H\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds x K\)














\(\ds \leadsto \ \ \)





\(\ds x K\)

\(=\)







\(\ds y K\)





Left Cosets are Equal iff Element in Other Left Coset




We have that:

$y \in H$
and:

$K \subseteq H$
As $H$ is a group, it is closed.
Hence:

$\forall x \in K: y x \in H$
which means, by definition of subset product:

$y K \subseteq H$
Hence the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $8$




