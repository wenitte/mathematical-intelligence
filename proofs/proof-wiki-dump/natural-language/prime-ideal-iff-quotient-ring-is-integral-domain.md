# 

Source: https://proofwiki.org/wiki/Prime_Ideal_iff_Quotient_Ring_is_Integral_Domain



Theorem
Let $\struct {R, +, \circ}$ be a commutative ring with unity.
Let $J$ be an ideal of $R$.

Then $J$ is a prime ideal of $R$ if and only if the quotient ring $R / J$ is an integral domain.


Proof
Since $J \subset R$, it follows from:

Quotient Ring of Commutative Ring is Commutative
and:

Quotient Ring of Ring with Unity is Ring with Unity
that $R / J$ is a commutative ring with unity. 

Let $0_{R / J}$ be the zero of $R / J$.


Sufficient Condition
Let $J$ be a prime ideal.
We need to show that if:

$x + J, \ y + J \in \struct {R / J, +, \circ}$
such that:

$\paren {x + J} \circ \paren {y + J} = \paren {x \circ y} + J = 0_{R / J}$
then:

$x + J = 0_{R/J}$ or $y + J = 0_{R/J}$.
The zero of $R / J$ is $0_{R / J} = J$.
Therefore:

$\paren {x \circ y} + J = 0_{R / J} \implies x \circ y \in J$
Because $J$ is a prime ideal, it follows that either $x \in J$ or $y \in J$.
Without loss of generality we assume that $x \in J$.
But then:

$x + J = J = 0_{R / J}$
$\Box$


Necessary Condition
Let $R / J$ be an integral domain.
Let $x, y \in R$ be such that $x \circ y \in J$.
Then:

$0_{R / J} = J = x \circ y + J = \paren {x + J} \circ \paren {y + J}$
Because $R / J$ is an integral domain it follows that:

$x + J = 0_{R / J}$
or:

$y + J = 0_{R / J}$
If $x + J = 0_{R / J}$, then $x \in J$.
If $y + J = 0_{R / J}$, then $y \in J$.
Thus either $x \in J$ or $y \in J$, and so by definition $J$ is a prime ideal of $R$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $13$




