# 

Source: https://proofwiki.org/wiki/Power_of_Complex_Number_minus_1



Theorem
Let $z \in \C$ be a complex number.
Then:

$z^n - 1 = \ds \prod_{k \mathop = 0}^{n - 1} \paren {z - \alpha^k}$
where $\alpha$ is a primitive complex $n$th root of unity.


Corollary
Let $z \in \C$ be a complex number.
Then:

$\ds \sum_{k \mathop = 0}^{n - 1} z^k = \prod_{k \mathop = 1}^{n - 1} \paren {z - \alpha^k}$
where $\alpha$ is a primitive complex $n$th root of unity.


Proof
Follows directly from the corollary to the Polynomial Factor Theorem:
If $\zeta_1, \zeta_2, \ldots, \zeta_n \in \C$ such that all are different, and $\map P {\zeta_1} = \map P {\zeta_2} = \ldots = \map P {\zeta_n} = 0$, then:

$\ds \map P z = k \prod_{j \mathop = 1}^n \paren {z - \zeta_j}$
where $k \in \C$.
In this context, each of $\alpha^k$ is a primitive complex $n$th root of unity:

$\paren {\alpha^k}^n = 1$
and the result follows.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 3$. Roots of Unity: $(3.10)$




