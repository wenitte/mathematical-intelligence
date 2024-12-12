# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_is_Bounded/Real_Numbers/Proof_2

Theorem
Every Cauchy sequence in $\R$ is bounded.


Proof
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
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.2$: Real Sequences: Theorem $1.2.9$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: the version given here does not actually match this, so revisit it when you get to itIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): Appendix: $\S 18.4$: Subsequences




