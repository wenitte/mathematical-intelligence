# 

Source: https://proofwiki.org/wiki/Proper_Ideal_iff_Quotient_Ring_is_Non-Null



Theorem
Let $A$ be a commutative ring.
Let $\mathfrak a \subseteq A$ be an ideal.
The following statements are equivalent:

$(1): \quad \mathfrak a$ is a proper ideal
$(2): \quad$ The quotient ring $A / \mathfrak a$ is a non-null ring.


Proof
1 implies 2
Let $\mathfrak a$ be a proper ideal.
Then:

$\exists x \in A \setminus \mathfrak a$
By definition of congruence modulo subgroup:

$x + \mathfrak a \ne 0 + \mathfrak a$
in the quotient ring $A / \mathfrak a$.
Hence $A / \mathfrak a$ is a non-null ring.
$\Box$


2 implies 1
Let $A / \mathfrak a$ be a non-null ring.
Then:

$\exists x, y \in A: x + \mathfrak a \ne y + \mathfrak a$
By definition of congruence modulo subgroup:

$x - y \notin \mathfrak a$
Since $x - y \in A$:

$\mathfrak a \ne A$
$\blacksquare$


Also see
Proper Ideal of Ring is Contained in Maximal Ideal




