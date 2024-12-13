# 

Source: https://proofwiki.org/wiki/Product_of_Semigroup_Element_with_Left_Inverse_is_Idempotent



Theorem
Let $\struct {S, \circ}$ be a semigroup with a left identity $e_L$.
Let $x \in S$ such that $\exists x_L: x_L \circ x = e_L$, that is $x$ has a left inverse with respect to the left identity.

Then:

$\paren {x \circ x_L} \circ \paren {x \circ x_L} = x \circ x_L$
That is, $x \circ x_L$ is idempotent.


Proof













\(\ds \paren {x \circ x_L} \circ \paren {x \circ x_L}\)

\(=\)







\(\ds x \circ \paren {x_L \circ x} \circ x_L\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds x \circ e_L \circ x_L\)





Definition of Left Inverse Element














\(\ds \)

\(=\)







\(\ds x \circ x_L\)





Definition of Left Identity



$\blacksquare$


Also see
Product of Semigroup Element with Right Inverse is Idempotent


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Semigroups: Exercise $5$




