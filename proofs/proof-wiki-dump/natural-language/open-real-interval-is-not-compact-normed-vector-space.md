# 

Source: https://proofwiki.org/wiki/Open_Real_Interval_is_not_Compact/Normed_Vector_Space

Theorem
Let $\R$ be the real number line considered as an Euclidean space.
Let $I = \openint a b$ be an open real interval.

Then $I$ is not compact.


Proof
We have that $\struct {\R, \size {\, \cdot \,}}$ is a normed vector space.
Also, $I$ is bounded by $a$ and $b$.
Consider a sequence $\ds \sequence {x_n}_{n \mathop \in \N}$ with $\ds x_n = a + \frac {b - a} {2n}$.
Let $\epsilon \in \R_{\mathop > 0}$.
Let $\ds N = \frac {b - a} {2 \epsilon}$.
Then for all $n \in \N$ such that $n > N$ we have that:














\(\ds \size {a + \frac {b - a} {2n} - a}\)

\(=\)







\(\ds \size {\frac {b - a} {2n} }\)




















\(\ds \)

\(<\)







\(\ds \frac {b - a} {2N}\)





$b > a$














\(\ds \)

\(=\)







\(\ds \frac {b - a} 2 \frac {2 \epsilon} {b - a}\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Hence, $\sequence {x_n}_{n \mathop \in \N}$ converges to $a$.
By Limit of Subsequence equals Limit of Real Sequence, every subsequence of $\sequence {x_n}_{n \mathop \in \N}$ converges to $a$ as well.
However, $a \notin I$.
By definition, $I$ is not compact.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 1.5$: Normed and Banach spaces. Compact sets




