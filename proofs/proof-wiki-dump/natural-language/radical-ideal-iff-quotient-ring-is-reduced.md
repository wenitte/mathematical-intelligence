# 

Source: https://proofwiki.org/wiki/Radical_Ideal_iff_Quotient_Ring_is_Reduced



Theorem
Let $\left({R, +, \circ}\right)$ be a commutative ring with unity.
Let $J$ be an ideal of $R$.

Then $J$ is a radical ideal if and only if the quotient ring $R / J$ is a reduced ring.


Proof
Since $J \subset R$, it follows from:

Quotient Ring of Commutative Ring is Commutative
and:

Quotient Ring of Ring with Unity is Ring with Unity
that $R / J$ is a commutative ring with unity.

Let $0_{R / J}$ be the zero of $R / J$.


Sufficient Condition
Let $J$ be radical.
We need to show that:

if $x + J \in R / J$ such that $\left({x + J}\right)^n = 0_{R / J}$ for some positive integer $n$
then $x + J = 0_{R / J}$.

Let $\left({x + J}\right)^n = 0_{R / J}$.
Then:

$x^n + J = 0_{R / J}$
and therefore:

$x^n \in J$
Because $J$ is radical it follows that:

$x \in J$
That is:

$x + J = 0_{R / J}$
Therefore $R / J$ is reduced.
$\Box$


Necessary Condition
Let $R / J$ be reduced.
Let $x \in R$ be such that $x^n \in J$.
Then:

$0_{R / J} = J = x^n + J = \left({x + J}\right)^n$
Because $A / J$ is reduced, this implies that:

$x + J = 0_{R / J}$
That is:

$x \in J$
This shows that $J$ is radical.
$\blacksquare$





