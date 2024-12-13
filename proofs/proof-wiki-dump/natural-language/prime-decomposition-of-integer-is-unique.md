# 

Source: https://proofwiki.org/wiki/Prime_Decomposition_of_Integer_is_Unique

Theorem
Let $n$ be an integer such that $n > 1$.

Then the prime decomposition of $n$ is unique.


Proof
From Integer is Expressible as Product of Primes, $n$ can be expressed as the product of one or more primes.
Let $n = q_1 q_2 \dotsm q_s$ where $q_1, q_2, \ldots, q_s$ are all primes such that:

$(1): \quad n = q_1 \le q_2 \le \dotsb \le q_s$
From Expression for Integer as Product of Primes is Unique, the expression for $(1)$ is unique.

By the Fundamental Theorem of Equivalence Relations, we can partition $\set {q_1, q_2, \dotsc, q_s}$ in $(1)$ according to equality.
Thus the equivalence classes $\eqclass {q_j} =$ contain all repetitions of $q_j$.
Hence the contribution of $q_j$ to $n$ is:

${q_j}^{k_j}$
where $k_j = \card {\eqclass {q_j} =}$, the cardinality of $\eqclass {q_j} =$.
Renaming the representative elements of the various $\eqclass {q_r} =$ as $p_1, p_2, \ldots, p_r$, where $r$ is the number of equivalence classes.
Hence:

$n = {p_1}^{k_1} {p_2}^{k_2} \dotsm {p_r}^{k_r}$


As $n = q_1 \le q_2 \le \dotsb \le q_s$ is a unique representation, so is $n = {p_1}^{k_1} {p_2}^{k_2} \dotsm {p_r}^{k_r}$.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-4}$ The Fundamental Theorem of Arithmetic: Exercise $3$




