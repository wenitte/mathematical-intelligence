# 

Source: https://proofwiki.org/wiki/Finite_Subgroup_Test/Proof_1

Theorem
Let $\struct {G, \circ}$ be a group.
Let $H$ be a non-empty finite subset of $G$.

Then:

$H$ is a subgroup of $G$
if and only if:

$\forall a, b \in H: a \circ b \in H$

That is, a non-empty finite subset of $G$ is a subgroup if and only if it is closed.


Proof
Let $H$ be a finite subset of $G$ such that $a, b \in H \implies a \circ b \in H$.
From the Two-Step Subgroup Test, it follows that we only need to show that $a \in H \implies a^{-1} \in H$.
So, let $a \in H$.
First it is straightforward to show by induction that $\set {x \in G: x = a^n: n \in \N} \subseteq H$.
That is, $a \in H \implies \forall n \in \N: a^n \in H$.

Now, since $H$ is finite, we have that the order of $a$ is finite.
Let the order of $a$ be $m$.
From Inverse Element is Power of Order Less 1 we have that $a^{m-1} = a^{-1}$.
As $a^{m-1} \in H$ (from above) the result follows.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 35$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $4$: Subgroups: Proposition $4.2$: Remark $4$




