# 

Source: https://proofwiki.org/wiki/GCD_from_Prime_Decomposition



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

$\gcd \set {a, b} = p_1^{\min \set {k_1, l_1} } p_2^{\min \set {k_2, l_2} } \ldots p_r^{\min \set {k_r, l_r} }$
where $\gcd \set {a, b}$ denotes the greatest common divisor of $a$ and $b$.


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

$\ds \map \gcd {A_n} = \prod_{j \mathop \in \N_r} {p_j}^{\min \set {e_{i j}: \, i \in \N_n} }$
where $\map \gcd {A_n}$ denotes the greatest common divisor of $A_n$.
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\ds \map \gcd {A_n} = \prod_{j \mathop \in \N_r} {p_j}^{\min \set {e_{i j}: \, i \in \N_n} }$


Basis for the Induction
$\map P 2$ is the case:

$\ds \gcd \set {a_1, a_2} = \prod_{j \mathop \in \N_r} {p_j}^{\min \set {e_{1 j}, e_{2 j} } }$
This is GCD from Prime Decomposition.

Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds \map \gcd {A_k} = \prod_{j \mathop \in \N_r} {p_j}^{\min \set {e_{i j}: \, i \in \N_k} }$

from which it is to be shown that:

$\ds \map \gcd {A_{k + 1} } = \prod_{j \mathop \in \N_r} {p_j}^{\min \set {e_{i j}: \, i \in \N_{k + 1} } }$


Induction Step
This is the induction step:














\(\ds \map \gcd {A_{k + 1} }\)

\(=\)







\(\ds \map \gcd {A_k \cup a_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \)










This needs considerable tedious hard slog to complete it.In particular: I think we need to prove $\gcd \set {a, b, c} = \gcd \set {\gcd \set {a, b}, c}$To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 2}: \ds \map \gcd {A_n} = \prod_{j \mathop \in \N_r} {p_j}^{\min \set {e_{i j}: i \in \N_n} }$


Proof
Note that if one of the primes $p_i$ does not appear in the prime decompositions of either one of $a$ or $b$, then its corresponding index $k_i$ or $l_i$ will be zero.

Let $d \divides a$.
Then:

$d$ is of the form $p_1^{h_1} p_2^{h_2} \ldots p_r^{h_r}, \forall i: 1 \le i \le r, 0 \le h_i \le k_i$
$d \divides a \iff \forall i: 1 \le i \le r, 0 \le h_i \le l_i$
So:

$d \divides a \land d \divides b \iff \forall i: 1 \le i \le r, 0 \le h_i \le \min \set {k_i, l_i}$

For $d$ to be at its greatest, we want the largest possible exponent for each of these primes.
So for each $i \in \closedint 1 r$, $h_i$ needs to equal $\min \set {k_i, l_i}$.

Hence the result:

$\gcd \set {a, b} = p_1^{\min \set {k_1, l_1} } p_2^{\min \set {k_2, l_2} } \ldots p_r^{\min \set {k_r, l_r} }$
$\blacksquare$


Examples
$121$ and $66$
The greatest common divisor of $121$ and $66$ is:

$\gcd \set {121, 66} = 11$


$169$ and $273$
The greatest common divisor of $169$ and $273$ is:

$\gcd \set {169, 273} = 13$


$51$ and $87$
The greatest common divisor of $51$ and $87$ is:

$\gcd \set {51, 87} = 3$


$2187$ and $999$
The greatest common divisor of $2187$ and $999$ is:

$\gcd \set {2187, 999} = 27$


$64$ and $81$
The greatest common divisor of $64$ and $81$ is:

$\gcd \set {64, 81} = 1$


$39$, $102$ and $75$
The greatest common divisor of $39$, $102$ and $75$ is:

$\gcd \set {39, 102, 75} = 3$


$p^2 q$ and $p q r$
The greatest common divisor of $p^2 q$ and $p q r$, where $p$, $q$ and $r$ are all primes, is:

$\gcd \set {p^2 q, p q r} = p q$


Also see
LCM from Prime Decomposition


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-4}$ The Fundamental Theorem of Arithmetic: Exercise $5$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 24 \alpha$




