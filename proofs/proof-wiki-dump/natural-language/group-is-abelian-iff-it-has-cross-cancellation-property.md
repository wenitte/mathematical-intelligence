# 

Source: https://proofwiki.org/wiki/Group_is_Abelian_iff_it_has_Cross_Cancellation_Property



Theorem
Let $G$ be a group.

Then the following are equivalent:

$(1): \quad G$ is abelian
$(2): \quad G$ has the cross cancellation property


Proof
Let us suppress the operation of $G$ for brevity.


$(2) \implies (1)$
Suppose that $G$ has the cross cancellation property.
Then, for all $x, y \in G$:














\(\ds y \paren {x y}\)

\(=\)







\(\ds \paren {y x} y\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds x y\)

\(=\)







\(\ds y x\)





Definition of Cross Cancellation Property



Thus, $G$ is abelian.
$\Box$


$(1) \implies (2)$
Conversely, suppose $G$ is abelian.

Let $a, b, c \in G$ be such that $a b = c a$.
Since $G$ is abelian, $c a = a c$.
We conclude that:

$a b = c a = a c$

Thus, by left cancellation, $b = c$.
$\blacksquare$





