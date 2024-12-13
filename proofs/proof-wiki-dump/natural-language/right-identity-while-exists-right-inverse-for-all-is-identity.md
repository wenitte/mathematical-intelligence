# 

Source: https://proofwiki.org/wiki/Right_Identity_while_exists_Right_Inverse_for_All_is_Identity



Theorem
Let $\struct  {S, \circ}$ be a semigroup with a right identity $e_R$ such that:

$\forall x \in S: \exists x_R: x \circ x_R = e_R$
That is, every element of $S$ has a right inverse with respect to the right identity.

Then $e_R$ is also a left identity, that is, is an identity.


Proof
Let $x \in S$ be any element of $S$.
From Right Inverse for All is Left Inverse we have that $x_R \circ x = e_R$.
Then:














\(\ds e_R \circ x\)

\(=\)







\(\ds \paren {x \circ x_R} \circ x\)





Definition of Right Inverse Element














\(\ds \)

\(=\)







\(\ds x \circ \paren {x_R \circ x}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds x \circ e_R\)





Right Inverse for All is Left Inverse














\(\ds \)

\(=\)







\(\ds x\)





Definition of Right Identity




So $e_R$ behaves as a left identity as well as a right identity.
That is, by definition, $e_R$ is an identity element.
$\blacksquare$


Also see
Left Identity while exists Left Inverse for All is Identity


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.4$: Lemma $4$




