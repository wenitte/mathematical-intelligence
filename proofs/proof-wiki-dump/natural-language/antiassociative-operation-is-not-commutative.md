# 

Source: https://proofwiki.org/wiki/Antiassociative_Operation_is_not_Commutative

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\circ$ be antiassociative on $S$.

Then $\circ$ is not commutative on $S$.


Proof
We will show there are two elements in $S$ that do not commute.
Let $a \in S$.
From Antiassociative Operation has no Idempotent Elements:

$a \circ a \ne a$
So for some $b \in S$: 

$a \circ a = b$
Then:

$\paren {a \circ a} \circ a = b \circ a$
and:

$a \circ \paren {a \circ a} = a \circ b$
From our assumption, $\circ$ is antiassociative.
So:

$\paren {a \circ a} \circ a \ne a \circ \paren {a \circ a}$
Hence for some $a, b \in S$:

$a \circ b \ne b \circ a$
$\blacksquare$





