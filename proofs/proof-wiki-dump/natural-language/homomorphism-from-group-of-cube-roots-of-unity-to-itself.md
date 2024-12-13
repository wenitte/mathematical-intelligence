# 

Source: https://proofwiki.org/wiki/Homomorphism_from_Group_of_Cube_Roots_of_Unity_to_Itself

Theorem
Let $\struct {U_3, \times}$ denote the multiplicative group of the complex cube roots of unity.
Here, $U_3 = \set {1, \omega, \omega^2}$ where $\omega = e^{2 i \pi / 3}$.

Let $\phi: U_3 \to U_3$ be defined as:

$\forall z \in U_3: \map \phi z = \begin{cases} 1 & : z = 1 \\ \omega^2 & : z = \omega \\ \omega & : z = \omega^2 \end{cases}$

Then $\phi$ is a group homomorphism.


Proof
It is noted that

$\paren {\omega^2}^2 = \omega$
and so $\phi$ is the square function.

By Roots of Unity under Multiplication form Cyclic Group and Cyclic Group is Abelian, $U_3$ is abelian.
Thus for all $a, b \in U_3$:














\(\ds \map \phi a \map \phi b\)

\(=\)







\(\ds a^2 b^2\)




















\(\ds \)

\(=\)







\(\ds a b a b\)





Definition of Abelian Group














\(\ds \)

\(=\)







\(\ds \paren {a b}^2\)




















\(\ds \)

\(=\)







\(\ds \map \phi {a b}\)









showing that $\phi$ is a group homomorphism.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Example $8.4$




