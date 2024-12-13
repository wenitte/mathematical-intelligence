# 

Source: https://proofwiki.org/wiki/Lucas-Lehmer_Test



Theorem
Let $q$ be an odd prime.
Let $\sequence {L_n}_{n \mathop \in \N}$ be the recursive sequence in $\Z / \paren {2^q - 1} \Z$ defined by:

$L_0 = 4, L_{n + 1} = L_n^2 - 2 \pmod {2^q - 1}$
Then $2^q - 1$ is prime if and only if $L_{q - 2} = 0 \pmod {2^q - 1}$.


Proof
Consider the sequences:

$U_0 = 0, U_1 = 1, U_{n + 1} = 4 U_n - U_{n - 1}$
$V_0 = 2, V_1 = 4, V_{n + 1} = 4 V_n - V_{n - 1}$

The following equations can be proved by induction:




\(\text {(1)}: \quad\)









\(\ds V_n\)

\(=\)







\(\ds U_{n + 1} - U_{n - 1}\)










\(\text {(2)}: \quad\)









\(\ds U_n\)

\(=\)







\(\ds \frac {\paren {2 + \sqrt 3}^n - \paren {2 - \sqrt 3}^n} {\sqrt {12} }\)










\(\text {(3)}: \quad\)









\(\ds V_n\)

\(=\)







\(\ds \paren {2 + \sqrt 3}^n + \paren {2 - \sqrt 3}^n\)










\(\text {(4)}: \quad\)









\(\ds U_{m + n}\)

\(=\)







\(\ds U_m U_{n + 1} - U_{m - 1} U_n\)










Now, let $p$ be prime and $e \ge 1$.
Suppose $U_n \equiv 0 \pmod {p^e}$.
Then $U_n = b p^e$ for some $b$.
Let $U_{n + 1} = a$.
By the recurrence relation and $(4)$, we have:














\(\ds U_{2 n}\)

\(=\)







\(\ds b p^e \paren {2 a - 4 b p^e} \equiv 2 a U_n\)

\(\ds \pmod {p^{e + 1} }\)


















\(\ds U_{2 n + 1}\)

\(=\)







\(\ds U_{n + 1}^2 - U_n^2 \equiv a^2\)

\(\ds \pmod {p^{e + 1} }\)







Similarly:














\(\ds U_{3 n}\)

\(=\)







\(\ds U_{2 n + 1} U_n - U_{2 n} U_{n - 1} \equiv 3 a^2 U_n\)

\(\ds \pmod {p^{e + 1} }\)


















\(\ds U_{3 n + 1}\)

\(=\)







\(\ds U_{2 n + 1} U_{n + 1} - U_{2 n} U_n \equiv a^3\)

\(\ds \pmod {p^{e + 1} }\)








In general:














\(\ds U_{k n}\)

\(\equiv\)







\(\ds k a^{k - 1} U_n\)

\(\ds \pmod {p^{e + 1} }\)


















\(\ds U_{k n + 1}\)

\(\equiv\)







\(\ds a^k\)

\(\ds \pmod {p^{e + 1} }\)







Taking $k = p$, we get:




\(\text {(5)}: \quad\)









\(\ds U_n \equiv 0 \pmod {p^e}\)

\(\leadsto\)







\(\ds U_{n p} \equiv 0\)

\(\ds \pmod {p^{e + 1} }\)








Expanding $\paren {2 \pm \sqrt 3}^n$ by the Binomial Theorem, we find that $(2)$ and $(3)$ give us:














\(\ds U_n\)

\(=\)







\(\ds \sum_k \binom n {2 k + 1} 2^{n - 2 k - 1} 3^k\)




















\(\ds V_n\)

\(=\)







\(\ds \sum_k \binom n {2 k} 2^{n - 2 k + 1} 3^k\)










Let us set $n = p$ where $p$ is an odd prime.
From Binomial Coefficient of Prime, $\dbinom p k$ is a multiple of $p$ except when $k = 0$ or $k = p$.
We find that:














\(\ds U_p\)

\(\equiv\)







\(\ds 3^{\frac {p - 1} 2}\)

\(\ds \pmod p\)


















\(\ds V_p\)

\(\equiv\)







\(\ds 4\)

\(\ds \pmod p\)







If $p \ne 3$, then from Fermat's Little Theorem:

$3^{p - 1} \equiv 1 \pmod p$
Hence:

$\paren {3^{\frac {p - 1} 2} - 1} \times \paren {3^{\frac {p - 1} 2} + 1} \equiv 0 \pmod p$
$3^{\frac {p - 1} 2} \equiv \pm 1 \pmod p$

When $U_p \equiv -1 \pmod p$, we have:

$U_{p + 1} = 4 U_p - U_{p - 1} = 4 U_p + V_p - U_{p + 1} \equiv -U_{p + 1} \pmod p$
Hence $U_{p + 1} \equiv 0 \pmod p$

When $U_p \equiv +1 \pmod p$, we have:

$U_{p - 1} = 4 U_p - U_{p + 1} = 4 U_p - V_p - U_{p-1} \equiv -U_{p - 1} \pmod p$
Hence $U_{p - 1} \equiv 0 \pmod p$

Thus we have shown that:

$(6) \quad \forall p \in \mathbb P: \exists \map \epsilon p: U_{p + \map \epsilon p} \equiv 0 \pmod p$
where $\map \epsilon p$ is an integer such that $\size {\map \epsilon p} \le 1$.

Now, let $N \in \N$.
Let $m \in \N$ such that $\map m N$ is the smallest positive integer such that:

$U_{\map m N} \equiv 0 \pmod N$
Let $a \equiv U_{m + 1} \pmod N$.
Then $a \perp N$ because:

$\gcd \set {U_n, U_{n + 1} } = 1$
Hence the sequence:

$U_m, U_{m + 1}, U_{m + 2}, \ldots$
is congruent modulo $N$ to $a U_0, a U_1, a U_2, \ldots$.
Then we have:

$(7) \quad U_n \equiv 0 \pmod N \iff n = k \map m N$
for some integral $k$.
(This number $\map m N$ is called the rank of apparition of $N$ in the sequence.)

Now, we have defined the sequence $\sequence {L_n}$ as:

$L_0 = 4, L_{n + 1} = \paren {L_n^2 - 2} \pmod {\paren {2^q - 1} }$
By induction it follows that:

$L_n \equiv V_{2^n} \pmod {\paren {2^q - 1} }$

We have the identity:

$2 U_{n + 1} = 4 U_n + V_n$
So any common factor of $U_n$ and $V_n$ must divide $U_n$ and $2 U_{n + 1}$.
As $U_n \perp U_{n + 1}$, this implies that $\gcd \set {U_n, V_n} \le 2$.
So $U_n$ and $V_n$ have no odd factor in common.
So, if $L_{q - 2} = 0$:














\(\ds U_{2^{q - 1} } = U_{2^{q - 2} } V_{2^{q - 2} }\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {\paren {2^q - 1} }\)


















\(\ds U_{2^{q - 2} }\)

\(\not \equiv\)







\(\ds 0\)

\(\ds \pmod {\paren {2^q - 1} }\)








Now, if $m = \map m {2^q - 1}$ is the rank of apparition of $2^q - 1$, it must be a divisor of $2^{q - 1}$ but not of $2^{q - 2}$.
So $m = 2^{q - 1}$.

Now we prove that $n = 2^q - 1$ must therefore be prime.
Let the prime decomposition of $n$ be $p_1^{e_1} \ldots p_r^{e_r}$.
All primes $p_j$ are greater than $3$ because $n$ is odd and congruent to $\paren {-1}^q - 1 = -2 \pmod 3$.
From $(5), (6), (7)$ we know that $U_t \equiv 0 \pmod {2^q - 1}$, where:

$t = \lcm \set {p_1^{e_1 - 1} \paren {p_1 + \epsilon_1}, \ldots, p_r^{e_r - 1} \paren {p_r + \epsilon_r} }$
where each $\epsilon_j = \pm 1$.
It follows that $t$ is a multiple of $m = 2^{q - 1}$.
Let $\ds n_0 = \prod_{j \mathop = 1}^r p_j^{e_j - 1} \paren {p_j + \epsilon_j}$.
We have:

$\ds n_0 \le \prod_{j \mathop = 1}^r p_j^{e_j - 1} \paren {p_j + \frac {p_j} 5} = \paren {\frac 6 5}^r n$
Also, because $p_j + \epsilon_j$ is even, $t \le \frac {n_0} {2^{r - 1} }$, because a factor of $2$ is lost every time the LCM of two even numbers is taken.
Combining these results, we have:

$m \le t \le 2 \paren {\frac 3 5}^r n \le 4 \paren {\frac 3 5}^r m < 3 m$
Hence $r \le 2$ and $t = m$ or $t = 2 m$, a power of $2$.
Therefore $e_1 = 1$ and $e_r = 1$.
If $n$ is not prime, we must have:

$n = 2^q - 1 = \paren {2^k + 1} \paren {2^l - 1}$
where $\paren {2^k + 1}$ and $\paren {2^l - 1}$ are prime.
When $q$ is odd, that last factorization is obviously impossible, so $n$ is prime.

Conversely, suppose $n = 2^q - 1$ is prime.
We need to show that $V_{2^{q - 2} } \equiv 0 \pmod n$.
All we need to do is show:

$V_{2^{q - 1} } \equiv -2 \pmod n$
because:

$V_{2^{q - 1} } = \paren {V_{2^{q - 2} } }^2 - 2$
Now:














\(\ds V_{2^{q - 1} }\)

\(=\)







\(\ds \paren {\frac {\sqrt 2 + \sqrt 6} 2}^{n + 1} + \paren {\frac {\sqrt 2 - \sqrt 6} 2}^{n + 1}\)




















\(\ds \)

\(=\)







\(\ds 2^{-n} \sum_k \binom {n + 1} {2 k} \sqrt 2^{n + 1 - 2 k} \sqrt 6^{2 k}\)




















\(\ds \)

\(=\)







\(\ds 2^{\frac {1 - n} 2} \sum_k \binom {n + 1} {2 k} 3 k\)









Since $n$ is an odd prime, the binomial coefficient:

$\dbinom {n + 1} {2 k} = \dbinom n {2 k} + \binom n {2 k - 1}$
is divisible by $n$ except when $2 k = 0$ and $2k = n + 1$, from Binomial Coefficient of Prime.
Hence:

$2^{\frac {n - 1} 2} V_{2^{q - 1} } \equiv 1 + 3^{\frac {n + 1} 2} \pmod n$
Here:

$2 \equiv \paren {2^{\frac {q + 1} 2} }^2$
so by Fermat's Little Theorem:

$2^{\frac {n - 1} 2} \equiv \paren {2^{\frac {q + 1} 2} } ^{n - 1} \equiv i$
Finally, by the Law of Quadratic Reciprocity:

$3^{\frac {n - 1} 2} \equiv -1$
since $n \bmod 3 = 1$ and $n \bmod 4 = 3$.
This means:

$V_{2^{q - 1} } \equiv -2$
Hence:

$V_{2^{q - 2} } \equiv 0$
as required.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Source of Name
This entry was named for François Édouard Anatole Lucas and Derrick Henry Lehmer.


Historical Note
The Lucas-Lehmer Test was initially designed by François Édouard Anatole Lucas, and later refined by Derrick Henry Lehmer.
This calculation is particularly suited to binary digital computers, since calculation $\pmod {2^q - 1}$ is very convenient.
Thus we have a relatively quick way to determine the primality of Mersenne numbers.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $2^{521} - 1$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $2^{521} - 1$




