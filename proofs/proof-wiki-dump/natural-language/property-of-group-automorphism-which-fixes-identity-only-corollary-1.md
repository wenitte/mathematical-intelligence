# 

Source: https://proofwiki.org/wiki/Property_of_Group_Automorphism_which_Fixes_Identity_Only/Corollary_1

Theorem
Let $G$ be a finite group whose identity is $e$.
Let $\phi: G \to G$ be a group automorphism.
Let $\phi$ have the property that:

$\forall g \in G \setminus \set e: \map \phi t \ne t$
That is, the only fixed element of $\phi$ is $e$.

Then:

$\forall x \in G: \exists g \in G: x = g^{-1} \, \map \phi g$


Proof
Let $\psi: G \to G$ be the mapping:

$\forall x \in G: \map \psi x = x^{-1} \, \map \phi x$
From Property of Group Automorphism which Fixes Identity Only:

$\forall x, y \in G: x^{-1} \, \map \phi x = y^{-1} \, \map \phi y \implies x = y$
That is, $\psi$ is an injection.
From Injection from Finite Set to Itself is Surjection, it follows that $\psi$ is a surjection.
That is:

$\forall x \in G: \exists g \in G: x = \map \psi g$
which is a restatement of the hypothesis.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $26$




