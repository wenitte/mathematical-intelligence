# 

Source: https://proofwiki.org/wiki/Existence_of_Arbitrarily_Long_Aliquot_Sequences



Theorem
It is possible to construct an aliquot sequence of arbitrary length which is monotonically increasing.


Proof
Let $p_i$ be the $i$th prime.
Construct the sequence $\sequence {t_i}_{t \mathop = 1}^\infty$ of natural numbers $t_i$ recursively as follows:

$t_1 = 2$
$t_{i + 1} = \map \phi {p_i^{t_i + 1} } - 1 = p_i^{t_i} \paren {p_i - 1} - 1$ for $i \ge 1$
We claim that this sequence has the property:

$(1): \quad p_i^{t_i + 1} \divides \map {\sigma_1} {p_{i + 1}^{t_{i + 1} } }$ for $i \ge 1$

For $i = 1$, $p_1 = 2$ and $t_1 = 2$.

$t_2 = 2^2 \paren {2 - 1} - 1 = 3$
$\map {\sigma_1} {p_2^{t_2} } = \map {\sigma_1} {3^3} = 40$
which is a multiple of $2^3 = 8$.
For $i > 1$:














\(\ds \paren {p_{i + 1} - 1} \map {\sigma_1} {p_{i + 1}^{t_{i + 1} } }\)

\(=\)







\(\ds p_{i + 1}^{t_{i + 1} + 1} - 1\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds p_{i + 1}^{\map \phi {p_i^{t_i + 1} } } - 1\)




















\(\ds \)

\(=\)







\(\ds 0\)

\(\ds \pmod {p_i^{t_i + 1} }\)



Euler's Theorem (Number Theory)



For $i > 1$, $p_{i + 1} - 1 > 2$.
Hence $p_{i + 1} - 1$ is even and composite.
Since $p_i$ is odd and $p_i > \dfrac {p_{i + 1} - 1} 2$ by Bertrand-Chebyshev Theorem:

$p_{i + 1} - 1$ and $p_i^{t_i + 1}$ are coprime.
By Euclid's Lemma, $p_i^{t_i + 1} \divides \map {\sigma_1} {p_{i + 1}^{t_{i + 1} } }$.

We define for $l \ge 1$: $A_l = \set {m \in \N: p_i^{t_i} \divides m, p_i^{t_i + 1} \nmid m, \forall i: 1 \le i \le l}$.
Denote $\map s n$ the aliquot sum of $n$.
Then for $m \in A_l$ where $l \ge 2$, we claim:




\(\text {(2)}: \quad\)









\(\ds \map s m\)

\(>\)







\(\ds m\)










\(\text {(3)}: \quad\)









\(\ds \map s m\)

\(\in\)







\(\ds A_{l - 1}\)









Let $m \in A_l$ where $l \ge 2$.
From definition we have:














\(\ds p_1^{t_1}\)

\(=\)







\(\ds 4 \divides m\)




















\(\ds p_2^{t_2}\)

\(=\)







\(\ds 27 \divides m\)









Hence $m$ is a multiple of $27 \times 4 = 108$.
Since $108$ is abundant, $m$ is also abundant by Multiple of Abundant Number is Abundant.
$\map s m > m$ follows from definition of abundant numbers.

Write $m = p_1^{t_1} \cdots p_l^{t_l} k$, where $k$ is not divisible by $p_1, \dots, p_l$.
Then:














\(\ds \map s m\)

\(=\)







\(\ds \map {\sigma_1} m - m\)




















\(\ds \)

\(=\)







\(\ds \map {\sigma_1} {p_1^{t_1} } \map {\sigma_1} {p_2^{t_2} } \cdots \map {\sigma_1} {p_l^{t_l} } \map {\sigma_1} k - m\)





Divisor Sum Function is Multiplicative














\(\ds \)

\(=\)







\(\ds K p_1^{t_1 + 1} \cdots p_{l - 1}^{t_{l - 1} + 1} - p_1^{t_1} \cdots p_l^{t_l} k\)





for some $K \in \N$, by $(1)$














\(\ds \)

\(=\)







\(\ds p_1^{t_1} \cdots p_{l - 1}^{t_{l - 1} } \paren {K p_1 \cdots p_{l - 1} - p_l^{t_l} k}\)









Since $K p_1 \cdots p_{l - 1}$ is divisible by $p_1, \dots, p_{l - 1}$ while $p_l^{t_l} k$ isn't:

$p_1, \dots, p_{l - 1} \nmid \paren {K p_1 \cdots p_{l - 1} - p_l^{t_l} k}$
Hence for each $i$ where $1 \le i \le l - 1$:

$p_i^{t_i} \divides \map s m, p_i^{t_i + 1} \nmid \map s m$
This shows that $\map s m \in A_{l - 1}$.

Hence to create an aliquot sequence of length $l$, one picks an element $m$ from $A_l$.
Applying $(2)$ and $(3)$ repeatedly, we see that:

$m, \map s m, \map s {\map s m}, \dots, \map {s^l} m$
is a monotonically increasing aliquot sequence of length $l$.
$\blacksquare$


Historical Note
The Existence of Arbitrarily Long Aliquot Sequences was proven by Hendrik Willem Lenstra Jr.


Sources
July 1976: P. Erdős: On Asymptotic Properties of Aliquot Sequences (Math. Comp. Vol. 30: pp. 641 – 645)  www.jstor.org/stable/2005334
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $276$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $276$




