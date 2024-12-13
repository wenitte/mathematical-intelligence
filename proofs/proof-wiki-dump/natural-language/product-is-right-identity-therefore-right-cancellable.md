# 

Source: https://proofwiki.org/wiki/Product_is_Right_Identity_Therefore_Right_Cancellable

Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $e_R \in S$  be a right identity of $S$.

Let $a \in S$ such that:

$\exists b \in S: a \circ b = e_R$
Then $a$ is right cancellable in $\struct {S, \circ}$.


Proof
Let $x, y \in S$ be arbitrary.

Then:














\(\ds x \circ a\)

\(=\)







\(\ds y \circ a\)





Semigroup Axiom $\text S 0$: Closure








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ a} \circ b\)

\(=\)







\(\ds \paren {y \circ a} \circ b\)





Semigroup Axiom $\text S 0$: Closure








\(\ds \leadsto \ \ \)





\(\ds x \circ \paren {a \circ b}\)

\(=\)







\(\ds y \circ \paren {a \circ b}\)





Semigroup Axiom $\text S 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds x \circ e_R\)

\(=\)







\(\ds y \circ e_R\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





Definition of Right Identity



The result follows by definition of right cancellable.
$\blacksquare$


Also see
Product is Left Identity Therefore Left Cancellable




