# 

Source: https://proofwiki.org/wiki/Chinese_Remainder_Theorem/Corollary

Theorem
Let $n_1, n_2, \ldots, n_r$ be pairwise coprime positive integers.
Let $\ds N = \prod_{i \mathop = 1}^r n_i$.
For an integer $k$, let $\Z / k \Z$ denote the ring of integers modulo $k$.
Then we have a ring isomorphism:

$\Z / N \Z \simeq \Z / n_1 \Z \times \cdots \times \Z / n_r \Z$


Proof
Define a mapping:

$\phi: \Z / N \Z \to \Z / n_1 \Z \times \cdots \times \Z / n_r \Z$
by:

$\map \phi {d \pmod N} = \paren {d \pmod {n_1}, \ldots, d \pmod {n_r} }$
Then, by Mappings Between Residue Classes, $\phi$ is well-defined.

By the definition of multiplication and addition in $\Z / k \Z$, $k \in \Z$ we have:

$\paren {a \pmod k} + \paren {b \pmod k} = \paren {a + b} \pmod k$
and

$\paren {a \pmod k} \cdot \paren {b \pmod k} = \paren {a \cdot b} \pmod k$
Thus taking $k = n_1, \ldots, n_r$ separately we see that $\phi$ is a ring homomorphism.

Let:

$\paren {a_1 \pmod {n_1}, \ldots, a_r \pmod {n_r} } \in \Z / n_1 \Z \times \cdots \times \Z / n_r \Z$
By the Chinese Remainder Theorem there exists a unique $x \in \Z / N \Z$ such that:

$\map \phi x = \paren {a_1 \pmod {n_1}, \ldots, a_r \pmod {n_r} }$
Since such an $x$ exists, $\phi$ is surjective.
Since this $x$ is unique modulo $N$, it follows that $\phi$ is injective.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences




