# 

Source: https://proofwiki.org/wiki/Equal_Elements_of_Field_of_Quotients

Theorem
Let $\struct {D, +, \circ}$ be an integral domain whose zero is $0_D$.
Let $\struct {K, +, \circ}$ be the field of quotients of $\struct {D, +, \circ}$.

Let $x = \dfrac p q \in K$.

Then:

$\forall k \in D^*: x = \dfrac {p \circ k} {q \circ k}$
where:

$D^* := D \setminus \set {0_D}$
that is, $D$ with its zero removed.


Proof
We have that the field of quotients $\struct {K, +, \circ}$ of an integral domain is its inverse completion.
Thus we have:

$\forall x_1, x_2 \in D, y_1, y_2 \in D^*: \dfrac {x_1} {y_1} = \dfrac {x_2} {y_2} \iff x_1 \circ y_2 = x_2 \circ y_1$

So:














\(\ds \paren {p \circ k} \circ q\)

\(=\)







\(\ds p \circ \paren {q \circ k}\)





as $D$ is an integral domain: $\circ$ is commutative and associative








\(\ds \leadsto \ \ \)





\(\ds \frac p q\)

\(=\)







\(\ds \frac {p \circ k} {q \circ k}\)









Hence the result.
Note that in order for $\dfrac {p \circ k} {q \circ k}$ to be defined, $q \circ k \ne 0_D$, that is, $k \ne 0_D$.
$\blacksquare$





