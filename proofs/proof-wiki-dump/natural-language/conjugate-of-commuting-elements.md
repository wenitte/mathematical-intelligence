# 

Source: https://proofwiki.org/wiki/Conjugate_of_Commuting_Elements

Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e_S$.
Let $x, y \in S$ such that $x$ and $y$ are both invertible.

Then $x \circ y \circ x^{-1} = y$ if and only if $x$ and $y$ commute.


Proof
As $\struct {S, \circ}$ is a monoid, it is by definition a semigroup.
Therefore it is taken for granted that $\circ$ is associative, so we can dispense with parentheses.
We also take for granted the fact that $x$ and $y$ are cancellable from Invertible Element of Monoid is Cancellable.

So:














\(\ds x \circ y\)

\(=\)







\(\ds y \circ x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x \circ y \circ x^{-1}\)

\(=\)







\(\ds y \circ x \circ x^{-1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x \circ y \circ x^{-1}\)

\(=\)







\(\ds y\)





Definition of Invertible Element



$\blacksquare$





