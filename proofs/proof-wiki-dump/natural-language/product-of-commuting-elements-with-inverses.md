# 

Source: https://proofwiki.org/wiki/Product_of_Commuting_Elements_with_Inverses

Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e_S$.
Let $x, y \in S$ such that $x$ and $y$ are both invertible.
Then:

$x \circ y \circ x^{-1} \circ y^{-1} = e_S = x^{-1} \circ y^{-1} \circ x \circ y$
if and only if $x$ and $y$ commute.


Proof
As $\struct {S, \circ}$ is a monoid, it is by definition a semigroup.
Therefore $\circ$ is associative, so we can dispense with parentheses.
From Invertible Element of Monoid is Cancellable, we also have that $x, y, x^{-1}, y^{-1}$ are cancellable.

So let :














\(\ds x \circ y\)

\(=\)







\(\ds y \circ x\)





by hypothesis: $x$ and $y$ commute








\(\ds \leadstoandfrom \ \ \)





\(\ds x \circ y \circ x^{-1}\)

\(=\)







\(\ds y\)





Conjugate of Commuting Elements








\(\ds \leadstoandfrom \ \ \)





\(\ds x \circ y \circ x^{-1} \circ y^{-1}\)

\(=\)







\(\ds y \circ y^{-1}\)





Monoid Axiom $\text S 0$: Closure








\(\ds \leadstoandfrom \ \ \)





\(\ds x \circ y \circ x^{-1} \circ y^{-1}\)

\(=\)







\(\ds e_S\)





Invertibility of $y$




Similarly:














\(\ds x \circ y\)

\(=\)







\(\ds y \circ x\)





by hypothesis: $x$ and $y$ commute








\(\ds \leadstoandfrom \ \ \)





\(\ds y^{-1} \circ x \circ y\)

\(=\)







\(\ds x\)





Conjugate of Commuting Elements








\(\ds \leadstoandfrom \ \ \)





\(\ds x^{-1} \circ y^{-1} \circ x \circ y\)

\(=\)







\(\ds x^{-1} \circ x\)





Monoid Axiom $\text S 0$: Closure








\(\ds \leadstoandfrom \ \ \)





\(\ds x^{-1} \circ y^{-1} \circ x \circ y\)

\(=\)







\(\ds e_S\)





Invertibility of $x$



$\blacksquare$





