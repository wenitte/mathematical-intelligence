# 

Source: https://proofwiki.org/wiki/Cyclic_Group_of_Order_8_is_not_isomorphic_to_Group_of_Units_of_Integers_Modulo_n/Lemma

Lemma for Cyclic Group of Order 8 is not isomorphic to Group of Units of Integers Modulo $n$
There are only $5$ numbers $n$ with the property that $\map \phi n = 8$, and they are $15$, $16$, $20$, $24$ and $30$.


Proof
Let $p$ be a prime factor of $n$.
By Euler Phi Function is Multiplicative:

$p - 1 = \map \phi p \divides \map \phi n = 8$
so:

$p \in \set {2, 3, 5}$
Let $i, j, k \in \Z^{\ge 0}$ such that $n = 2^i 3^j 5^k$.

By Euler Phi Function is Multiplicative:

$8 = \map \phi n = \map \phi {2^i} \map \phi {3^j} \map \phi {5^k}$
has only $5$ solutions:

$\tuple {i, j, k} = \tuple {0, 1, 1}, \tuple {4, 0, 0}, \tuple {2, 0, 1}, \tuple {3, 1, 0}$ and $\tuple {1, 1, 1}$.
$\blacksquare$





