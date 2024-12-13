# 

Source: https://proofwiki.org/wiki/LCM_from_Prime_Decomposition/General_Result



Theorem
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


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\ds \map \lcm {A_n} = \prod_{j \mathop \in \N_r} {p_j}^{\max \set {e_{i j}: \, i \in \N_n} }$


Basis for the Induction
$\map P 2$ is the case:

$\ds \gcd \set {a_1, a_2} = \prod_{j \mathop \in \N_r} {p_j}^{\max \set {e_{1 j}, e_{2 j} } }$
This is GCD from Prime Decomposition.

Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds \map \lcm {A_k} = \prod_{j \mathop \in \N_r} {p_j}^{\max \set {e_{i j}: \, i \in \N_k} }$

from which it is to be shown that:

$\ds \map \lcm {A_{k + 1} } = \prod_{j \mathop \in \N_r} {p_j}^{\max \set {e_{i j}: \, i \in \N_{k + 1} } }$


Induction Step
This is the induction step:














\(\ds \map \lcm {A_{k + 1} }\)

\(=\)







\(\ds \map \lcm {A_k \cup a_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \)










This needs considerable tedious hard slog to complete it.In particular: I think we need to prove $\lcm \set {a, b, c} = \lcm \set {\lcm \set {a, b}, c}$To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 2}: \ds \map \lcm {A_n} = \prod_{j \mathop \in \N_r} {p_j}^{\max \set {e_{i j}: i \in \N_n} }$
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-4}$ The Fundamental Theorem of Arithmetic: Exercise $10$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): common multiple
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): common multiple




