# 

Source: https://proofwiki.org/wiki/LCM_from_Prime_Decomposition



Theorem
Let $a, b \in \Z$.
From Expression for Integers as Powers of Same Primes, let:














\(\ds a\)

\(=\)







\(\ds p_1^{k_1} p_2^{k_2} \ldots p_r^{k_r}\)




















\(\ds b\)

\(=\)







\(\ds p_1^{l_1} p_2^{l_2} \ldots p_r^{l_r}\)
















\(\ds \forall i \in \set {1, 2, \dotsc, r}: \, \)



\(\ds p_i\)

\(\divides\)







\(\ds a\)


















\(\, \ds \lor \, \)

\(\ds p_i\)

\(\divides\)







\(\ds b\)










That is, the primes given in these prime decompositions may be divisors of either of the numbers $a$ or $b$.

Then:

$\lcm \set {a, b} = p_1^{\max \set {k_1, l_1} } p_2^{\max \set {k_2, l_2} } \ldots p_r^{\max \set {k_r, l_r} }$
where $\lcm \set {a, b}$ denotes the lowest common multiple of $a$ and $b$.


General Result
Let $n \in \N$ be a natural number such that $n \ge 2$.
Let $\N_n$ be defined as:

$\N_n := \set {1, 2, \dotsc, n}$
Let $A_n = \set {a_1, a_2, \dotsc, a_n} \subseteq \Z$ be a set of $n$ integers.

From Expression for Integers as Powers of Same Primes, let:

$\ds \forall i \in \N_n: a_i = \prod_{p_j \mathop \in T} {p_j}^{e_{i j} }$
where:

$T = \set {p_j: j \in \N_r}$
such that:

$\forall j \in \N_{r - 1}: p_j < p_{j - 1}$
$\forall j \in \N_r: \exists i \in \N_n: p_j \divides a_i$
where $\divides$ denotes divisibility.

Then:

$\ds \map \lcm {A_n} = \prod_{j \mathop \in \N_r} {p_j}^{\max \set {e_{i j}: \, i \in \N_n} }$
where $\map \lcm {A_n}$ denotes the greatest common divisor of $a_1, a_2, \dotsc, a_n$.


Proof 1













\(\ds \lcm \set {a, b}\)

\(=\)







\(\ds \frac {a b} {\gcd \set {a, b} }\)





Product of GCD and LCM














\(\ds \)

\(=\)







\(\ds \frac {\paren {p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r} } \paren {p_1^{l_1} p_2^{l_2} \ldots p_r^{l_r} } } {p_1^{\min \set {k_1, l_1} } p_2^{\min \set {k_2, l_2} } \cdots p_r^{\min \set {k_r, l_r} } }\)





GCD from Prime Decomposition














\(\ds \)

\(=\)







\(\ds \frac {\paren {p_1^{k_1 + l_1} p_2^{k_2 + l_2} \cdots p_r^{k_r + l_r} } } {p_1^{\min \set {k_1, l_1} } p_2^{\min \set {k_2, l_2} } \cdots p_r^{\min \set {k_r, l_r} } }\)




















\(\ds \)

\(=\)







\(\ds p_1^{k_1 + l_1 - \min \set {k_1, l_1} } p_2^{k_2 + l_2 - \min \set {k_2, l_2} } \cdots p_r^{k_r + l_r - \min \set {k_r, l_r} }\)




















\(\ds \)

\(=\)







\(\ds p_1^{\max \set {k_1, l_1} } p_2^{\max \set {k_2, l_2} } \cdots p_r^{\max \set {k_r, l_r} }\)





Sum Less Minimum is Maximum



$\blacksquare$


Proof 2
Note that if one of the primes $p_i$ does not appear in the prime decompositions of either one of $a$ or $b$, then its corresponding index $k_i$ or $l_i$ will be zero.

Let $a \divides m$.
Then:

$m$ is of the form $p_1^{h_1} p_2^{h_2} \ldots p_r^{h_r}, \forall i: 1 \le i \le r, 0 \le k_i \le h_i$
$a \divides l \iff \forall i: 1 \le i \le r, 0 \le l_i \le h_i$
So:

$a \divides m \land b \divides m \iff \forall i: 1 \le i \le r, 0 \le \max \set {k_i, l_i} \le h_i$

For $m$ to be at its smallest, we want the smallest possible exponent for each of these primes.
So for each $i \in \closedint 1 r$, $h_i$ needs to equal $\max \set {k_i, l_i}$.

Hence the result:

$\lcm \set {a, b} = p_1^{\max \set {k_1, l_1} } p_2^{\max \set {k_2, l_2} } \ldots p_r^{\max \set {k_r, l_r} }$
$\blacksquare$


Examples
$125$ and $150$
The lowest common multiple of $125$ and $150$ is:

$\lcm \set {125, 150} = 750$


$132$ and $154$
The lowest common multiple of $132$ and $154$ is:

$\lcm \set {132, 154} = 924$


$39$ and $143$
The lowest common multiple of $39$ and $143$ is:

$\lcm \set {39, 143} = 429$


$253$ and $506$
The lowest common multiple of $253$ and $506$ is:

$\lcm \set {253, 506} = 506$


$111$ and $1221$
The lowest common multiple of $111$ and $1221$ is:

$\lcm \set {111, 1221} = 1221$


$39$, $102$ and $75$
The lowest common multiple of $39$, $102$ and $75$ is:

$\lcm \set {39, 102, 75} = 33 \, 150$


$p^2 q$ and $p q r$
The lowest common multiple of $p^2 q$ and $p q r$, where $p$, $q$ and $r$ are all primes, is:

$\lcm \set {p^2 q, p q r} = p^2 q r$


Also see
GCD from Prime Decomposition


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-4}$ The Fundamental Theorem of Arithmetic: Exercise $7$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 24 \alpha$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): least common multiple




