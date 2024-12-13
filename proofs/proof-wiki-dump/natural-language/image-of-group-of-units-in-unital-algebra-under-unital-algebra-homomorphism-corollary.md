# 

Source: https://proofwiki.org/wiki/Image_of_Group_of_Units_in_Unital_Algebra_under_Unital_Algebra_Homomorphism/Corollary

Corollary
Let $R$ be a ring.
Let $A, B$ be unital $R$-algebras.
Let $\phi : A \to B$ be an unital algebra isomorphism.
Let $\map G A$ and $\map G B$ the groups of units of $A$ and $B$ respectively. 

Then:

$\phi \sqbrk {\map G A} = \map G B$


Proof
From Image of Group of Units in Unital Algebra under Unital Algebra Homomorphism, we have:

$\phi \sqbrk {\map G A} \subseteq \map G B$
From Inverse of Algebraic Structure Isomorphism is Isomorphism: General Result, $\phi^{-1} : B \to A$ is a unital algebra isomorphism.
Hence applying Image of Group of Units in Unital Algebra under Unital Algebra Homomorphism again we have:

$\phi^{-1} \sqbrk {\map G B} \subseteq \map G A$
Hence we have:

$\phi \sqbrk {\phi^{-1} \sqbrk {\map G B} } \subseteq \phi \sqbrk {\map G A}$
Since $\phi$ is a surjection, from Image of Preimage of Subset under Surjection equals Subset we have:

$\phi \sqbrk {\phi^{-1} \sqbrk {\map G B} } = \map G B$
Hence we have:

$\map G B \subseteq \phi \sqbrk {\map G A}$
We conclude that:

$\phi \sqbrk {\map G A} = \map G B$
$\blacksquare$





