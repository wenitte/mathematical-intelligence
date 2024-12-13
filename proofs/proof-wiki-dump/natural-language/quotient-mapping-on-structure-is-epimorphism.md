# 

Source: https://proofwiki.org/wiki/Quotient_Mapping_on_Structure_is_Epimorphism



Theorem
Let $\RR$ be a congruence relation on an algebraic structure $\struct {S, \circ}$.

Then the quotient mapping from $\struct {S, \circ}$ to the quotient structure $\struct {S / \RR, \circ_\RR}$ is an epimorphism:

$q_\RR: \struct {S, \circ} \to \struct {S / \RR, \circ_\RR}: \forall x, y \in S: \map {q_\RR} {x \circ y} = \map {q_\RR} x \circ_\RR \map {q_\RR} y$


Proof
The quotient mapping $q_\RR: S \to S / \RR$ is the canonical surjection from $S$ to $S / \RR$.

Next we show that this is a homomorphism:














\(\ds \map {q_\RR} x\)

\(=\)







\(\ds \eqclass x \RR\)





Definition of Quotient Mapping














\(\ds \map {q_\RR} y\)

\(=\)







\(\ds \eqclass y \RR\)





Definition of Quotient Mapping














\(\ds \map {q_\RR} {x \circ y}\)

\(=\)







\(\ds \eqclass {x \circ y} \RR\)





Definition of Quotient Mapping














\(\ds \eqclass {x \circ y} \RR\)

\(=\)







\(\ds \eqclass x \RR \circ_\RR \eqclass y \RR\)





Definition of Operation Induced on Quotient Set








\(\ds \leadsto \ \ \)





\(\ds \map {q_\RR} {x \circ y}\)

\(=\)







\(\ds \map {q_\RR} x \circ_\RR \map {q_\RR} y\)





Definition of Quotient Mapping




Thus the morphism property is shown to hold.

So the quotient mapping $q_\RR: \struct {S, \circ} \to \struct {S / \RR, \circ_\RR}$ has been shown to be a homomorphism which is a surjection, and is thus an epimorphism.
$\blacksquare$


Also see
Definition:Quotient Epimorphism


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: A Little Number Theory




