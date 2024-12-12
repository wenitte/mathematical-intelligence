# 

Source: https://proofwiki.org/wiki/Antiassociative_Operation_has_no_Idempotent_Elements

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\circ$ be antiassociative on $S$.

Then no element of $S$ is idempotent under $ \circ$.
That is:

$\forall x \in S: x \circ x \ne x$


Proof
Aiming for a contradiction, suppose $a \in S$ such that $a$ is idempotent under $\circ$.
That is:

$a \circ a = a$
Then:

$\paren {a \circ a} \circ a = a \circ a$
and 

$a \circ \paren {a \circ a} = a \circ a$

This contradicts our assumption that $\circ$ is antiassociative on $S$.
$\blacksquare$





