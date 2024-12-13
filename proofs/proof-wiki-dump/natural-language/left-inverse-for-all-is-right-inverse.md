# 

Source: https://proofwiki.org/wiki/Left_Inverse_for_All_is_Right_Inverse



Theorem
Let $\struct {S, \circ}$ be a semigroup with a left identity $e_L$ such that:

$\forall x \in S: \exists x_L: x_L \circ x = e_L$
That is, every element of $S$ has a left inverse with respect to the left identity.

Then $x \circ x_L = e_L$, that is, $x_L$ is also a right inverse with respect to the left identity.


Proof
Let $y = x \circ x_L$. Then:














\(\ds e_L \circ y\)

\(=\)







\(\ds \paren {y_L \circ y} \circ y\)





Definition of Left Inverse Element














\(\ds \)

\(=\)







\(\ds y_L \circ \paren {y \circ y}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds y_L \circ y\)





Product of Semigroup Element with Left Inverse is Idempotent: $y = x \circ x_L$














\(\ds \)

\(=\)







\(\ds e_L\)





Definition of Left Inverse Element




So $x \circ x_L = e_L$, and $x_L$ behaves as a right inverse as well as a left inverse with respect to the left identity.
$\blacksquare$


Also see
Right Inverse for All is Left Inverse
Left Identity while exists Left Inverse for All is Identity
Right Identity while exists Right Inverse for All is Identity


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.4$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Semigroups: Exercise $5$




