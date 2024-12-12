# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_is_Bounded/Real_Numbers



Theorem
Every Cauchy sequence in $\R$ is bounded.


Proof 1
Let $\sequence {a_n}$ be a Cauchy sequence in $\R$.
Then there exists $N \in \N$ such that:

$\size {a_m - a_n} < 1$
for all $m, n \ge N$.

In particular, by the Triangle Inequality, for all $m \ge N$:














\(\ds \size {a_m}\)

\(=\)







\(\ds \size {a_N + a_m - a_N}\)




















\(\ds \)

\(\le\)







\(\ds \size {a_N} + \size {a_m - a_N}\)




















\(\ds \)

\(\le\)







\(\ds \size {a_N} + 1\)









So $\sequence {a_n}$ is bounded, as claimed.
$\blacksquare$


Proof 2
Let $\sequence {a_n}$ be a Cauchy sequence in $\R$.
Then there exists $N \in \N$ such that:

$\size {a_m - a_n} < 1$
for all $m, n \ge N$.

Note that for $m \le N$:














\(\ds \size {a_m}\)

\(\le\)







\(\ds \max \set {\size {a_1}, \size {a_2}, \dotsc, \size {a_N} }\)




















\(\ds \)

\(<\)







\(\ds \max \set {\size {a_1}, \size {a_2}, \dotsc, \size {a_N} } + 1\)










and for $m > N$:












\(\ds \size {a_m}\)

\(=\)







\(\ds \size {a_N + a_m - a_N}\)




















\(\ds \)

\(\le\)







\(\ds \size {a_N} + \size {a_m - a_N}\)




















\(\ds \)

\(<\)







\(\ds \size {a_N} + 1\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\size {a_1}, \size {a_2}, \dotsc, \size {a_N} } + 1\)









Hence for all $m \in \N$:

$\size {a_m} < \max \set {\size {a_1}, \size {a_2}, \dotsc, \size {a_N} } + 1$

Therefore $\sequence {a_n}$ is bounded, as claimed.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Cauchy sequences: $\S 5.18$




