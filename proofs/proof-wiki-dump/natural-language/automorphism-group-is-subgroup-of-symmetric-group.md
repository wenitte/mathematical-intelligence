# 

Source: https://proofwiki.org/wiki/Automorphism_Group_is_Subgroup_of_Symmetric_Group

Theorem
Let $\struct {S, *}$ be an algebraic structure.
Let $\Aut S$ be the automorphism group of $\struct {S, *}$.

Then $\Aut S$ is a subgroup of the symmetric group  $\struct {\Gamma \paren S, \circ}$ on $S$.


Proof
An automorphism is an isomorphism $\phi: S \to S$ from an algebraic structure $S$ to itself.
The Identity Mapping is Automorphism, so $\Aut S$ is not empty.
The composite of isomorphisms is itself an isomorphism, as demonstrated on Isomorphism is Equivalence Relation.
So:

$\phi_1, \phi_2 \in \Aut S \implies \phi_1 \circ \phi_2 \in \Aut S$
demonstrating closure.

If $\phi \in \Aut S$, then $\phi$ is bijective and an isomorphism.
Hence from Inverse of Algebraic Structure Isomorphism is Isomorphism, $\phi^{-1}$ is also bijective and an isomorphism.
So $\phi^{-1} \in \Aut S$.

The result follows by the Two-Step Subgroup Test.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.2$. Some lemmas on homomorphisms: Example $134$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Theorem $8.6$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Problem $\text{AA}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 64 \alpha$
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\S 1.2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $24$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Proposition $8.11$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): automorphism
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): automorphism




