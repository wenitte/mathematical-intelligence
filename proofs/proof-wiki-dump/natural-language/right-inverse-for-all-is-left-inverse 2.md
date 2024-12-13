# 

Source: https://proofwiki.org/wiki/Right_Inverse_for_All_is_Left_Inverse



Theorem
Let $\struct {S, \circ}$ be a semigroup with a right identity $e_R$ such that:

$\forall x \in S: \exists x_R: x \circ x_R = e_R$
That is, every element of $S$ has a right inverse with respect to the right identity.

Then $x_R \circ x = e_R$, that is, $x_R$ is also a left inverse with respect to the right identity.


Proof
Let $y = x_R \circ x$. Then:














\(\ds y \circ e_R\)

\(=\)







\(\ds y \circ \paren {y \circ y_R}\)





Definition of Right Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {y \circ y} \circ y_R\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds y \circ y_R\)





Product of Semigroup Element with Right Inverse is Idempotent: $y = x_R \circ x$














\(\ds \)

\(=\)







\(\ds e_R\)





Definition of Right Inverse Element




So $x_R \circ x = e_R$, and $x_R$ behaves as a left inverse as well as a right inverse with respect to the right identity.
$\blacksquare$


Also see
Left Inverse for All is Right Inverse
Right Identity while exists Right Inverse for All is Identity
Left Identity while exists Left Inverse for All is Identity


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.4$: Lemmas $3$




