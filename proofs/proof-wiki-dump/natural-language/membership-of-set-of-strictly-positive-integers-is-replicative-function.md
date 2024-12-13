# 

Source: https://proofwiki.org/wiki/Membership_of_Set_of_Strictly_Positive_Integers_is_Replicative_Function

Theorem
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = \sqbrk {x \in \Z_{> 0} }$
where $\sqbrk \cdots$ is Iverson's convention.

Then $f$ is a replicative function.


Proof
Let $x \in \R$ such that $x > 0$.
Then for all $k \in \Z$ such that $0 \le k < n$:

$x + \dfrac k n \in \Z_{> 0}$
and so from Membership of Set of Integers is Replicative Function:

$\ds \sum_{k \mathop = 0}^{n - 1} \sqbrk {x + \frac k n \in \Z_{> 0} } = \sqbrk {n x \in \Z_{> 0} }$

Let $x \le 0$.
Then for all $k \in \Z$ such that $0 \le k < n$:

$x + \dfrac k n < 1$
and so:

$\ds \sum_{k \mathop = 0}^{n - 1} \sqbrk {x + \frac k n \in \Z_{> 0} } = 0 = \sqbrk {n x \in \Z_{> 0} }$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $39 \ \text{c)}$




