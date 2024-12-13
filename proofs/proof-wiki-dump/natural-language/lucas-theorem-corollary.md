# 

Source: https://proofwiki.org/wiki/Lucas%27_Theorem/Corollary



Corollary to Lucas' Theorem
Let $p$ be a prime number.
Let $n, k \in \Z$.

Let the representations of $n$ and $k$ to the base $p$ be given by:

$n = a_r p^r + \cdots + a_1 p + a_0$
$k = b_r p^r + \cdots + b_1 p + b_0$
Then:

$\ds \dbinom n k \equiv \prod_{j \mathop = 0}^r \dbinom {a_j} {b_j} \pmod p$
where $\dbinom n k$ denotes a binomial coefficient.


Proof
Consider the representations of $n$ and $k$ to the base $p$:

$n = a_r p^r + \cdots + a_1 p + a_0$
$k = b_r p^r + \cdots + b_1 p + b_0$
Let:

$n_1 = \floor {n / p}$
$k_1 = \floor {k / p}$
We have that:

$n \bmod p = a_0$
$k \bmod p = b_0$
$n_1 = a_r p^{r - 1} + a_{r - 1} p^{r - 2} \cdots + a_1$
$k_1 = b_r p^{r - 1} + b_{r - 1} p^{r - 2} \cdots + b_1$
It follows from Lucas' Theorem that:

$\dbinom n k \equiv \dbinom {n_1} {k_1} \dbinom {a_0} {b_0} \pmod p$

Now we do the same again to the representation to the base $p$ of $n_1$ and $n_2$.
Thus:

$\dbinom n k \equiv \dbinom {\floor {n_1 / p}} {\floor {k_1 / p} } \dbinom {a_1} {b_1} \dbinom {a_0} {b_0} \pmod p$
and so on until:

$\floor {n_r / p}$
and:

$\floor {k_r / p}$
Hence the result.
$\blacksquare$


Source of Name
This entry was named for François Édouard Anatole Lucas.


Sources
1947: N.J. Fine: Binomial Coefficients Modulo a Prime (Amer. Math. Monthly Vol. 54: pp. 589 – 592)  www.jstor.org/stable/2304500
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $10 \ \text{(f)}$




