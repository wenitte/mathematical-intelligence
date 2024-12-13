# 

Source: https://proofwiki.org/wiki/Ring_Homomorphism_from_Ring_with_Unity_to_Integral_Domain_Preserves_Unity

Theorem
Let $\struct {R, +_R, \circ_R}$ be a ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $\struct {D, +_D, \circ_D}$ be an integral domain whose zero is $0_D$ and whose unity is $1_D$.
Let $\phi: R \to D$ be a ring homomorphism such that:

$\map \ker \phi \ne R$
where $\map \ker \phi$ denotes the kernel of $\phi$.

Then $\map \phi {1_R} = 1_D$.


Proof
Aiming for a contradiction, suppose $\map \phi {1_R} = 0_D$.
Let $x \in R$ be arbitrary.
Then:














\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi {x \circ_R 1_R}\)





Definition of Unity of Ring














\(\ds \)

\(=\)







\(\ds \map \phi x \circ_D \map \phi {1_R}\)





Definition of Ring Homomorphism














\(\ds \)

\(=\)







\(\ds \map \phi x \circ_D 0_D\)





by hypothesis














\(\ds \)

\(=\)







\(\ds 0_D\)





Definition of Ring Zero



But this contradicts the assertion that $\map \ker \phi \ne R$.
It follows that $\map \phi {1_R} \ne 0_D$.

Then we have:














\(\ds 1_D \circ_D \map \phi {1_R}\)

\(=\)







\(\ds \map \phi {1_R}\)





Definition of Unity of Ring














\(\ds \)

\(=\)







\(\ds \map \phi {1_R \circ_R 1_R}\)





Definition of Unity of Ring














\(\ds \)

\(=\)







\(\ds \map \phi {1_R} \circ_D \map \phi {1_R}\)





Definition of Ring Homomorphism








\(\ds \leadsto \ \ \)





\(\ds 1_D\)

\(=\)







\(\ds \map \phi {1_R}\)





Cancellation Law for Ring Product of Integral Domain



Hence the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $9$




