# 

Source: https://proofwiki.org/wiki/Ring_Zero_is_Unique



Theorem
Let $\struct {R, +, \circ}$ be a ring.
Then the ring zero of $R$ is unique.


Proof 1
The ring zero is, by definition of a ring, the identity element of the additive group $\struct {R, +}$.
The result then follows from Identity of Group is Unique.
$\blacksquare$


Proof 2
From Ring Product with Zero we have that the ring zero of $R$ is indeed a zero element, as suggested by its name.
The result then follows from Zero Element is Unique.
$\blacksquare$


Proof 3
Suppose $0$ and $0'$ are both ring zeroes of $\struct {R, +, \circ}$.
Then by Ring Product with Zero:

$0' \circ 0 = 0$ by dint of $0$ being a ring zero
$0' \circ 0 = 0'$ by dint of $0'$ being a ring zero.
So $0 = 0' \circ 0 = 0'$.
So $0 = 0'$ and there is only one ring zero of $\struct {R, +, \circ}$ after all.
$\blacksquare$





