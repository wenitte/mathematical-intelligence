# 

Source: https://proofwiki.org/wiki/Isomorphism_of_Finite_Group_with_Permutations_of_Quotient_with_Subgroup

Theorem
Let $G$ be a finite group.
Let $H$ be a subgroup of $G$.
Let $H$ contain no non-trivial normal subgroup of $G$.
Let $G / H$ denote the left coset space of $G$ by $H$.

Then $G$ is isomorphic to a subgroup of the group of permutations $\map \Gamma {G / H}$ of $G / H$.


Proof
Let a homomorphism $\phi: G \to \map \Gamma {G / H}$ be defined as:

$\forall x \in G: \map {\map \phi g} {x H} = \paren {g x} H$
By Kernel is Normal Subgroup of Domain, $\ker \phi$ is a normal subgroup of $G$.
So:














\(\ds g\)

\(\in\)







\(\ds \ker \phi\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall x \in G: \, \)



\(\ds \paren {g x} H\)

\(=\)







\(\ds x H\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall x \in G: \, \)



\(\ds x^{-1} g x\)

\(\in\)







\(\ds H\)









That is, $\ker \phi$ is the intersection of $H$ and all its conjugates.
Thus:

$\ker \phi \subseteq H$
But $H$ contains no non-trivial normal subgroup of $G$.
Thus $\ker \phi$ is the trivial subgroup of $G$
Thus by Kernel is Trivial iff Group Monomorphism:

$G$ is isomorphic to $\Img \phi$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 85$




