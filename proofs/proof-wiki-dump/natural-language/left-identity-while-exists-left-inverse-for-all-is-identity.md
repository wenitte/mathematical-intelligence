# 

Source: https://proofwiki.org/wiki/Left_Identity_while_exists_Left_Inverse_for_All_is_Identity



Theorem
Let $\struct {S, \circ}$ be a semigroup with a left identity $e_L$ such that:

$\forall x \in S: \exists x_L: x_L \circ x = e_L$
That is, every element of $S$ has a left inverse with respect to the left identity.

Then $e_L$ is also a right identity, that is, is an identity.


Proof
From Left Inverse for All is Right Inverse we have that:

$x \circ x_L = e_L$
Then:














\(\ds x \circ e_L\)

\(=\)







\(\ds x \circ \paren {x_L \circ x}\)





Definition of Left Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {x \circ x_L} \circ x\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds e_L \circ x\)





Left Inverse for All is Right Inverse














\(\ds \)

\(=\)







\(\ds x\)





Definition of Left Identity




So $e_L$ behaves as a right identity as well as a left identity.
That is, by definition, $e_L$ is an identity element.
$\blacksquare$


Also see
Right Identity while exists Right Inverse for All is Identity


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.4$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Semigroups: Exercise $5$




