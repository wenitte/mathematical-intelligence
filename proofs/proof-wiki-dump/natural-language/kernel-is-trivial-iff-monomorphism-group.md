# 

Source: https://proofwiki.org/wiki/Kernel_is_Trivial_iff_Monomorphism/Group



Theorem
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be a group homomorphism.
Let $\map \ker \phi$ be the kernel of $\phi$.

Then $\phi$ is a group monomorphism if and only if $\map \ker \phi$ is trivial.


Proof
Necessary Condition
Let $\phi: \struct {S, \circ} \to \struct {T, *}$ be a group monomorphism.
By Homomorphism to Group Preserves Identity, $e_S \in \map \ker \phi$.
If $\map \ker \phi$ contained another element $s \ne e_S$, then $\map \phi s = \map \phi {e_S} = e_T$ and $\phi$ would not be injective, thus not be a group monomorphism.
So $\map \ker \phi$ can contain only one element, and that must be $e_S$, which is therefore the trivial subgroup of $S$.
$\Box$


Sufficient Condition
Now suppose $\map \ker \phi = \set {e_S}$.
Then, for any $x, y \in S$:














\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi y\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x * \paren {\map \phi y}^{-1}\)

\(=\)







\(\ds \map \phi y * \paren {\map \phi y}^{-1}\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds \map \phi {x \circ y^{-1} }\)

\(=\)







\(\ds e_T\)





Definition of Morphism Property








\(\ds \leadsto \ \ \)





\(\ds x \circ y^{-1}\)

\(\in\)







\(\ds \map \ker \phi\)





Definition of Kernel of Group Homomorphism








\(\ds \leadsto \ \ \)





\(\ds x \circ y^{-1}\)

\(=\)







\(\ds e_S\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds e_S \circ y\)





Group Axiom $\text G 2$: Existence of Identity Element








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





Definition of Identity Element




Thus $\phi$ is injective, and therefore a group monomorphism. 
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.4$. Kernel and image: Example $139$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Theorem $22$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Quotient Groups
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 65$
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\S 1.2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 47.8$ Homomorphisms and their elementary properties
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Exercise $1$
2002: John B. Fraleigh: A First Course in Abstract Algebra (7th ed.): Chapter $13$: Corollary $13.18$




