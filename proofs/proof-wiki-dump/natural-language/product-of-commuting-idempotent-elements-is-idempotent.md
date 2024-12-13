# 

Source: https://proofwiki.org/wiki/Product_of_Commuting_Idempotent_Elements_is_Idempotent

Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $a, b \in S$ be idempotent elements of $S$.
Let $a$ and $b$ commute:

$a \circ b = b \circ a$

Then $a \circ b$ is idempotent.


Proof
From Semigroup Axiom $\text S 0$: Closure we take it for granted that $\struct {S, \circ}$ is closed under $\circ$.
Hence:














\(\ds \paren {a \circ b} \circ \paren {a \circ b}\)

\(=\)







\(\ds \paren {a \circ \paren {b \circ a} } \circ b\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {a \circ \paren {a \circ b} } \circ b\)





$a$ and $b$ commute














\(\ds \)

\(=\)







\(\ds \paren {a \circ a} \circ \paren {b \circ b}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds a \circ b\)





$a$ and $b$ are idempotent by the premise



Thus $a \circ b$ is idempotent.
$\blacksquare$





