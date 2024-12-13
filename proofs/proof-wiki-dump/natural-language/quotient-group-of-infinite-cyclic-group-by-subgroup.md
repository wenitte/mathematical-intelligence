# 

Source: https://proofwiki.org/wiki/Quotient_Group_of_Infinite_Cyclic_Group_by_Subgroup

Theorem
Let $C_n$ be the cyclic group of order $n$.

Then:

$C_n \cong \dfrac {\struct {\Z, +} } {\struct {n \Z, +} } = \dfrac \Z {n \Z}$
where:

$\Z$ is the additive group of integers
$n \Z$ is the additive group of integer multiples
$\Z / n \Z$ is the quotient group of $\Z$ by $n \Z$.

Thus, every cyclic group is isomorphic to one of:

$\Z, \dfrac \Z \Z, \dfrac \Z {2 \Z}, \dfrac \Z {3 \Z}, \dfrac \Z {4 \Z}, \ldots$


Proof
Let $C_n = \gen {a: a^n = e_{C_n} }$, that is, let $a$ be a generator of $C_n$.
Let us define $\phi: \struct {\Z, +} \to C_n$ such that:

$\forall k \in \Z: \map \phi k = a^k$
Then from the First Isomorphism Theorem:

$\Img \phi = C_n = \struct {\Z, +} / \map \ker \phi$

We now need to show that $\map \ker \phi = n \Z$.
We have:

$\map \ker \phi = \set {k \in \Z: a^k = e_{C_n} }$
Let $x \in \map \ker \phi$.
Then $a^x = e_{C_n}$ and thus:

$n \divides x$
The result follows.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.4$. Kernel and image: Example $141$




