# 

Source: https://proofwiki.org/wiki/Ring_Without_Unity_may_have_Quotient_Ring_with_Unity

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $I$ be an ideal of $R$.
Let $\struct {R / I, +, \circ}$ be the associated quotient ring.

Then $\struct {R / I, +, \circ}$ may have a unity even if $\struct {R, +, \circ}$ has not.


Proof
Consider the external direct product of rings $\Z \oplus 2 \Z$.

From Integer Multiples form Commutative Ring, $2 \Z$ does not admit a unity.
By Unity of External Direct Sum of Rings, neither does $\Z \oplus 2 \Z$.

Now consider the ideal $\set 0 \times 2 \Z$ of $\Z \oplus 2 \Z$.
We have for all $a \in \Z$ and $b, c \in 2 \Z$ that:

$\tuple {0, b} - \tuple {0, c} = \tuple {0, b - c}$
$\tuple {a, b} \cdot \tuple {0, c} = \tuple {0, b \cdot c}$
so by the Test for Ideal, indeed $\set 0 \times 2 \Z$ is an ideal in $\Z \oplus 2 \Z$.

By Quotient Ring of External Direct Sum of Rings, we have:

$\paren {\Z \oplus 2 \Z} / \paren {\set 0 \times 2 \Z} \cong \paren {Z / \set 0} \oplus \paren {2 \Z / 2 \Z}$
By Quotient Ring by Null Ideal and Quotient Ring Defined by Ring Itself is Null Ring, this last ring is isomorphic to $\Z \times \set 0 \cong \Z$.

Since $\Z$ has a unity, this construction provides an example of the required kind.
$\blacksquare$


Also see
Quotient Ring of Ring with Unity is Ring with Unity - this result demonstrates that its converse does not hold.




