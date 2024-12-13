# 

Source: https://proofwiki.org/wiki/Natural_Number_is_Divisor_or_Multiple_of_Divisor_of_Another



Theorem
In the words of Euclid:

Any number is either a part or parts of any number, the less of the greater.
(The Elements: Book $\text{VII}$: Proposition $4$)


Proof
Let $A, BC$ be two (natural) numbers and let $BC < A$.
We need to show that $BC$ is either an aliquot part or aliquant part of $A$.
That is, either $BC$ is a divisor of $A$, or it is a multiple of some divisor of $A$.


$A$ and $BC$ are either coprime or they are not.

First, suppose $A$ and $BC$ are coprime.
Then if $BC$ be divided into the units in it, each unit of $BC$ will be some aliquot part of $A$, so that $BC$ is an aliquant part of $A$.

Next, let $A$ and $BC$ not be coprime.
Then $BC$ either divides $A$ or it does not.
If $BC$ divides $A$ then $BC$ is an aliquot part of $A$.
But if not, then let $D$ be the GCD of $A$ and $BC$ by Euclid's algorithm.
Let $BC$ be divided into the numbers equal to $D$, namely $BE, EF, FC$.
Then each of the numbers $BE, EF, FC$ is also an aliquot part of $A$.
That is, $BC$ is an aliquant part of $A$.
$\blacksquare$


Historical Note
This proof is Proposition $4$ of Book $\text{VII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VII}$. Propositions




