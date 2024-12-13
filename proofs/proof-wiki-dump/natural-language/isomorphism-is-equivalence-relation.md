# 

Source: https://proofwiki.org/wiki/Isomorphism_is_Equivalence_Relation



Theorem
Isomorphism is an equivalence on a set of magmas.

This result applies to all magmas: rings, groups, R-algebraic structures etc.


Proof
To prove a relation is an equivalence, we need to prove it is reflexive, symmetric and transitive.
So, checking in turn each of the criteria for equivalence:


Reflexive
From Identity Mapping is Automorphism, the identity mapping $I_S: S \to S$ is an automorphism, which is an isomorphism from a magma onto itself.
So $S \cong S$, and isomorphism is seen to be reflexive.
$\Box$


Symmetric
If $S \cong T$, then $\exists \phi: S \to T$ such that $\phi$ is an isomorphism.
Thus, from Inverse of Algebraic Structure Isomorphism is Isomorphism, $\phi^{-1}: T \to S$ is also an isomorphism, and $T \cong S$.
Thus we have shown that $S \cong T \implies T \cong S$, so $\cong$ is symmetric.
$\Box$


Transitive
Let $S_1 \cong S_2$, and $S_2 \cong S_3$.
We can define these two isomorphisms:

$\phi: S_1 \to S_2$
$\psi: S_2 \to S_3$

From Composite of Isomorphisms in Algebraic Structure is Isomorphism, we have that $\psi \circ \phi$ is an isomorphism between $S_1$ and $S_3$.

Thus we have shown that $\cong$ is transitive.
$\Box$

Thus isomorphism is reflexive, symmetric and transitive, and therefore an equivalence.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.3$. Isomorphism
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 26$. Vector Spaces and Modules: Theorem $26.1$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Exercise $\text{H}$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.2$: Homomorphisms
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 62$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 46.1$ Isomorphic groups
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Proposition $8.9$




