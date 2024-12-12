# 

Source: https://proofwiki.org/wiki/Condition_for_Mapping_between_Structures_to_be_Homomorphism

Theorem
Let $\struct {A, \odot}$ and $\struct {B, \circledast}$ be magmas.
Let $\struct {A \times B, \otimes}$ be the external direct product of $\struct {A, \odot}$ and $\struct {B, \circledast}$.

Let $\phi: A \to B$ be a mapping.
Let $\phi$ be considered as a subset of the Cartesian product $A \times B$.
Then:

$\phi$ is a homomorphism
if and only if:

the algebraic structure $\struct {\phi, \otimes_\phi}$ is a submagma of $\struct {A \times B, \otimes}$.


Proof
Let $\phi$ be a homomorphism
Let $\tuple {a, b}, \tuple {c, d} \in A \times B$ such that:














\(\ds \tuple {a, b}\)

\(\in\)







\(\ds \phi\)




















\(\ds \tuple {c, d}\)

\(\in\)







\(\ds \phi\)









Then:














\(\ds \map \phi a\)

\(=\)







\(\ds b\)





Definition of Mapping












\(\, \ds \land \, \)

\(\ds \map \phi c\)

\(=\)







\(\ds d\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map \phi {a \odot c}\)

\(=\)







\(\ds b \circledast d\)





as $\phi$ is a homomorphism








\(\ds \leadstoandfrom \ \ \)





\(\ds \tuple {a \odot c, b \circledast d}\)

\(\in\)







\(\ds \phi\)





Definition of Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds \tuple {a, b} \otimes_\phi \tuple {c, d}\)

\(\in\)







\(\ds \phi\)





Definition of External Direct Product



That is:

$\struct {\phi, \otimes_\phi}$ is a closed subset of $\struct {A \times B, \otimes}$
which means the same thing as:

$\struct {\phi, \otimes_\phi}$ is a submagma of $\struct {A \times B, \otimes}$.
$\Box$

The argument reverses, so:

if $\struct {\phi, \otimes_\phi}$ is a submagma of $\struct {A \times B, \otimes}$
then:

$\phi$ is a homomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 13$: Compositions Induced on Cartesian Products and Function Spaces: Exercise $13.15$




