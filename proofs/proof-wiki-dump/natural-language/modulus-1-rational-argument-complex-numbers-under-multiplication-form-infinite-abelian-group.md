# 

Source: https://proofwiki.org/wiki/Modulus_1_Rational_Argument_Complex_Numbers_under_Multiplication_form_Infinite_Abelian_Group

Theorem
Let $S$ be the set defined as:

$S = \set {\cos \theta + i \sin \theta: \theta \in \Q}$
Then the algebraic structure $\struct {S, \times}$ is an infinite abelian group.


Proof
By definition of polar form of complex numbers, the elements of $S$ are also elements of the circle group $\struct {K, \times}$:

$K = \set {z \in \C: \cmod z = 1}$
$S$ is infinite by construction.
Thus $S \subseteq C$ and trivially $S \ne \O$.
Let $a, b \in S$.
Then:

$a = \cos \theta_1 + i \sin \theta_1$
and:

$b = \cos \theta_2 + i \sin \theta_2$
for some $\theta_1, \theta_2 \in \Q$.
We have that:














\(\ds a \times b\)

\(=\)







\(\ds \paren {\cos \theta_1 + i \sin \theta_1} \paren {\cos \theta_2 + i \sin \theta_2}\)




















\(\ds \)

\(=\)







\(\ds \map \cos {\theta_1 + \theta_2} + i \map \sin {\theta_1 + \theta_2}\)




















\(\ds \)

\(\in\)







\(\ds S\)









and:














\(\ds b^{-1}\)

\(=\)







\(\ds \cos \theta_2 - i \sin \theta_2\)




















\(\ds \)

\(\in\)







\(\ds S\)









Hence by the Two-Step Subgroup Test, $\struct {S, \times}$ is a subgroup of $\struct {K, \times}$.
It has been established that $S$ is an infinite set.
Hence by definition $\struct {S, \times}$ is an infinite group.
Finally, from Subgroup of Abelian Group is Abelian, $\struct {S, \times}$ is an abelian group.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: Examples: $(1) \ \text {(c)}$




