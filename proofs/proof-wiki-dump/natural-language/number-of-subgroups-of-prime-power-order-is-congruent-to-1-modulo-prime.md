# 

Source: https://proofwiki.org/wiki/Number_of_Subgroups_of_Prime_Power_Order_is_Congruent_to_1_modulo_Prime



Theorem
Let $G$ be a finite group whose order is $n$.
Let $p$ be a prime number such that $p^k$ is a divisor of $n$.

Then the number of subgroups of order $p^k$ is congruent to $1$ modulo $p$.


Proof
Let $r_k$ denote the number of subgroups of $G$ of order $p^k$.
From Number of Order p Elements in Group with m Order p Subgroups:

The number of elements of order $p$ is $r_1 (p - 1)$.
Since there exists $mp$ elements whose order divide $p$, for some $m \in \Z$:

The number of elements of order $p$ is $mp - 1$.
Thus,

$r_1 \equiv 1 \mod p$.

Let $H_1, H_2, \dots, H_{r_{k - 1}}$ be the $r_{k - 1}$ subgroups of order $p^{k - 1}$.
Let $K_1, K_2, \dots, K_{r_k}$ be the $r_k$ subgroups of order $p^k$.
Suppose $H_i$ is contained in $a_i$ of the subgroups $K_1, K_2, \dots, K_{r_k}$.
Suppose $K_j$ contains $b_j$ of the subgroups $H_1, H_2, \dots, H_{r_{k - 1}}$.
Then:

$a_1 + a_2 + \dots + a_{k - 1} = b_1 + b_2 + \dots + b_k$
is the number of distinct pairs of subgroups $H_i, K_j$ for which $H_i$ is a subgroup of $K_j$.

Let $H$ be one of the subgroups of order $p^{k - 1}$.
Let $K_1, K_2, \dots, K_a$ be the subgroups of order $p^k$ which contain $H$.
Then from Composition Series of Group of Prime Power Order:

$a > 0$
and:

$H$ is normal in $K_1, K_2, ..., K_a$.
Hence, $H$ is also normal $G$.


This article, or a section of it, needs explaining.In particular: why H is normal in GYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By correspondence theorem:

$G / H$ contains the subgroups $K_1 / H, K_2 / H, \dots, K_a / H$.
These are the only subgroups of $G / H$ of order $p$.
Then from above:

$a \equiv 1 \mod p$.
Since this is the case for each $a_i$, we have:

$a_1 + a_2 + \dots + a_{r_{k - 1}} \equiv r_{k - 1} \mod p$.

From Number of Order p^(n-1) Subgroups in Order p^n Group, we have also that:

$b \equiv 1 \mod p$.
and:

$b_1 + b_2 + \dots + b_{r_k} \equiv r_k \mod p$.
Therefore:

$r_{k - 1} \equiv r_k \mod p$.
But $r_1 \equiv 1 \mod p$.
So we have, by induction:

$1 \equiv r_1 \equiv r_2 \equiv \dots \equiv r_k \mod p$.
Hence the result.
$\blacksquare$


Historical Note
This proof is due to Ferdinand Georg Frobenius. 
He showed this result and other generalizations of the Sylow Theorems in a $1895$ paper Verallgemeinerung des Sylow’schen Satzes.


Sources
1895: Ferdinand Georg Frobenius: Verallgemeinerung des Sylow'schen Satzes ("A generalization of Sylow's theorem") (Sitzungsberichte K. Preuss. Akad. Wiss. Berlin pp. 981 – 993)
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 59 \iota$




