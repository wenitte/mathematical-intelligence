# 

Source: https://proofwiki.org/wiki/Exponents_of_Primes_in_Prime_Decomposition_are_Less_iff_Divisor


It has been suggested that this page be renamed.In particular: This is important enough to have a shorter titleTo discuss this page in more detail, feel free to use the talk page.


Theorem
Let $a, b \in \Z_{>0}$.

Then $a \divides b$ if and only if:

$(1): \quad$ every prime $p_i$ in the prime decomposition of $a$ appears in the prime decomposition of $b$
and:

$(2): \quad$ the exponent of each $p_i$ in $a$ is less than or equal to its exponent in $b$.


Proof
Let $a, b \in \Z_{>0}$.
Let their prime decomposition be:

$a = p_1^{k_1} p_2^{k_2} \dotsm p_n^{k_n}$
$b = q_1^{l_1} q_2^{l_2} \dotsm q_n^{l_n}$


Necessary Condition
Let:

$(1): \quad$  prime in the prime decomposition of $a$ appear in the prime decomposition of $b$
and:

$(2): \quad$ its exponent in $a$ be less than or equal to its exponent in $b$.

Then:














\(\ds a\)

\(=\)







\(\ds p_1^{k_1} p_2^{k_2} \dotsm p_r^{k_r}\)




















\(\ds b\)

\(=\)







\(\ds p_1^{l_1} p_2^{l_2} \dotsm p_r^{l_r} \dotsm p_s^{l_s}\)









where:

$k_1 \le l_1, k_2 \le l_2, \dotsc, k_r \le l_r, r \le s$
Thus:

$d = p_1^{l_1 - k_1} p_2^{l_2 - k_2} \dotsm p_r^{l_r - k_r} \in \Z$
and so:

$b = a d$
So $a \divides b$.
$\Box$


Sufficient Condition
Let $a \divides b$.
Let $a = p_1^{k_1} p_2^{k_2} \dotsm p_r^{k_r}$ be the prime decomposition of $a$.
Then:

$\forall i \in \N_r: p_i^{k_i} \divides a$
Hence by Divisor Relation on Positive Integers is Partial Ordering each $p_i^{k_i}$ also divides $b$.
Thus:

$\exists c \in \Z: b = p_i^{k_i} c$
The prime decomposition of $b$ is therefore:

$b = p_i^{k_i} \times \paren {\text {prime decomposition of $c$} }$
which may need to be rearranged.
So $p_i$ must occur in the prime decomposition of $b$ with an exponent at least as big as $k_i$.
The result follows.
$\blacksquare$





