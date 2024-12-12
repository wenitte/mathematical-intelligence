# 

Source: https://proofwiki.org/wiki/Expression_for_Integers_as_Powers_of_Same_Primes/General_Result



Theorem
Let $a_1, a_2, \dotsc, a_n \in \Z$ be integers.
Let their prime decompositions be given by:

$\ds a_i = \prod_{\substack {p_{i j} \mathop \divides a_i \\ \text {$p_{i j}$ is prime} } } {p_{i j} }^{e_{i j} }$

Then there exists a set $T$ of prime numbers:

$T = \set {t_1, t_2, \dotsc, t_v}$
such that:

$t_1 < t_2 < \dotsb < t_v$
$\ds a_i = \prod_{j \mathop = 1}^v {t_j}^{g_{i j} }$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 2}$, let $\map P n$ be the proposition:

for all $a_i \in \set {a_1, a_2, \ldots, a_n}$: there exists a set $T = \set {t_1, t_2, \dotsc, t_v}$ of prime numbers such that $t_1 < t_2 < \dotsb < t_v$ such that:
$\ds a_i = \prod_{j \mathop = 1}^v {t_j}^{g_{i j} }$


Basis for the Induction
$\map P 2$ is the case:
there exist prime numbers $t_1 < t_2 < \dotsb < t_v$ such that:














\(\ds a_1\)

\(=\)







\(\ds \prod_{j \mathop = 1}^v {t_j}^{g_{1 j} }\)




















\(\ds a_2\)

\(=\)







\(\ds \prod_{j \mathop = 1}^v {t_j}^{g_{2 j} }\)










This has been proved in Expression for Integers as Powers of Same Primes.
Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

for all $a_i \in \set {a_1, a_2, \ldots, a_k}$: there exists a set $T = \set {t_1, t_2, \dotsc, t_v}$ of prime numbers such that $t_1 < t_2 < \dotsb < t_v$ such that:
$\ds a_i = \prod_{j \mathop = 1}^v {t_j}^{g_{i j} }$

from which it is to be shown that:

for all $a_i \in \set {a_1, a_2, \ldots, a_{k + 1} }$: there exists a set $T' = \set {t_1, t_2, \dotsc, t_w}$ of prime numbers such that $t_1 < t_2 < \dotsb < t_w$ such that:
$\ds a_i = \prod_{j \mathop = 1}^w {t_j}^{g_{i j} }$


Induction Step
This is the induction step:














\(\ds a_{k + 1}\)

\(=\)







\(\ds \prod_{\substack {q_i \mathop \divides a_{k + 1} \\ \text {$q_i$ is prime} } } {q_i}^{e_i}\)





Definition of Prime Decomposition














\(\ds a_k\)

\(=\)







\(\ds \prod_{j \mathop = 1}^v {t_j}^{g_{k j} }\)





by the induction hypothesis



Let $E = \set {q_i: q_i \divides a_{k + 1} , \text {$q_i$ is prime} }$.

Then let:

$T' = E \cup T$
and let the elements of $T$ be renamed as:

$T' = \set {t_1, t_2, \ldots, t_w}$
where all the $t_1, t_2, \dotsc, t_w$ are distinct, and:

$t_1 < t_2 < \dotsb < t_w$

Then we have that:














\(\ds a_{k + 1}\)

\(=\)







\(\ds \prod_{q_i \mathop \in E} {q_i}^{e_i} \times \prod_{t_i \mathop \in T' \mathop \setminus E} {t_i}^0\)




















\(\ds \)

\(=\)







\(\ds \prod_{t_j \mathop \in T'} {t_j}^{g_j}\)





where $g_j = \begin {cases} e_i & : t_j = q_i \\ 0 & : t_j \notin E \end{cases}$














\(\ds \)

\(=\)







\(\ds {t_1}^{g_1} {t_2}^{g_2} \dotsm {t_w}^{g_w}\)





for some $g_1, g_2, \dotsc, g_w \in \Z_{\ge 0}$




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore, for all $n \in \Z_{\ge 2}$:

for all $a_i \in \set {a_1, a_2, \ldots, a_n}$: there exists a set $T = \set {t_1, t_2, \dotsc, t_v}$ of prime numbers such that $t_1 < t_2 < \dotsb < t_v$ such that:
$\ds a_i = \prod_{j \mathop = 1}^v {t_j}^{g_{i j} }$
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-4}$ The Fundamental Theorem of Arithmetic: Exercise $10$




