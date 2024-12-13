# 

Source: https://proofwiki.org/wiki/Lucas%27_Theorem


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $p$ be a prime number.
Let $n, k \in \Z_{\ge 0}$.

Then:

$\dbinom n k \equiv \dbinom {\floor {n / p} } {\floor {k / p} } \dbinom {n \bmod p} {k \bmod p} \pmod p$
where:

$\dbinom n k$ denotes a binomial coefficient
$n \bmod p$ denotes the modulo operation
$\floor \cdot$ denotes the floor function.


Corollary
Let the representations of $n$ and $k$ to the base $p$ be given by:

$n = a_r p^r + \cdots + a_1 p + a_0$
$k = b_r p^r + \cdots + b_1 p + b_0$
Then:

$\ds \dbinom n k \equiv \prod_{j \mathop = 0}^r \dbinom {a_j} {b_j} \pmod p$


Proof
First we show that:

$\dbinom n k \equiv \dbinom {\floor {n / p} } {\floor {k / p} } \dbinom {n \bmod p} {k \bmod p} \pmod p$

Consider $\dbinom n k$ as the fraction:

$\dfrac {n \paren {n - 1} \paren {n - 2} \cdots \paren {n - k + 1} } {k \paren {k - 1} \paren {k - 2} \cdots 1}$

This can be expressed as:

$(1): \quad \dbinom n k = \paren {\dfrac n k} \paren {\dfrac {n - 1} {k - 1} } \paren {\dfrac {n - 2} {k - 2} } \cdots \paren {\dfrac {n - k + 1} 1}$
Let $k = s p + t$ from the Division Theorem.
Thus:

$t = k \bmod p$
The denominators of the first $t$ factors in $(1)$ do not have $p$ as a divisor.
Now let $n = u p + v$, again from the Division Theorem.
Thus:

$v = n \bmod p$

Now, when dealing with non-multiples of $p$, we can work modulo $p$ in both the numerator and denominator, from Common Factor Cancelling in Congruence.
So we consider the first $t$ factors of $(1)$ modulo $p$.
These are:

$\paren {\dfrac {u p + v} {s p + t} } \paren {\dfrac {u p + v - 1} {s p + t - 1} } \cdots \paren {\dfrac {u p + v - t + 1} {s p + 1} } \equiv \paren {\dfrac v t} \paren {\dfrac {v - 1} {t - 1} } \cdots \paren {\dfrac {v - t + 1} 1} \pmod p$

So, these first $t$ terms of $(1)$ taken together are congruent modulo $p$ to the corresponding terms of:

$\dbinom {n \bmod p} {k \bmod p}$
These differ by multiples of $p$.

So we are left with $k - k \bmod p$ factors.
These fall into $\floor {k / p}$ groups, each of which has $p$ consecutive values.
Each of these groups contains exactly one multiple of $p$.
The other $p - 1$ factors in a given group are congruent (modulo $p$) to $\paren {p - 1}!$ so they cancel out in numerator and denominator.

We now need to investigate the $\left \lfloor {k / p} \right \rfloor$ multiples of $p$ in the numerator and denominator.
We divide each of them by $p$ and we are left with the binomial coefficient:

$\dbinom {\floor {\paren {n - k \bmod p} / p} } {\floor {k / p} }$
Now, if $k \bmod p \le n \bmod p$, this equals:

$\dbinom {\floor {n / p} } {\floor {k / p} }$
Otherwise, if $k \bmod p > n \bmod p$, the other factor:

$\dbinom {n \bmod p} {k \bmod p}$
is zero.
So the formula holds in general.
$\blacksquare$


Source of Name
This entry was named for François Édouard Anatole Lucas.


Sources
1878: Édouard Lucas: Théorie des Fonctions Numériques Simplement Périodiques (Amer. J. Math. Vol. 1, no. 3: pp. 197 – 240)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $10 \ \text{(e)}$




