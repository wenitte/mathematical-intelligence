# 

Source: https://proofwiki.org/wiki/Closed_Real_Interval_is_Compact/Normed_Vector_Space

Theorem
Let $\R$ be the real number line considered as an Euclidean space.
Let $I = \closedint a b$ be a closed real interval.

Then $I$ is compact.


Proof
We have that $\struct {\R, \size {\, \cdot \,}}$ is a normed vector space.
Let $\sequence {a_n}_{n \mathop \in \N}$ be a sequence in $I$.
$\sequence {a_n}$ is bounded by $a$ and $b$.
By Bolzano-Weierstrass theorem, there exists a convergent subsequence $\sequence {a_{n_k}}_{k \in \N}$ with a limit $L$.
Then:

$\forall k \in \N : a \le a_{n_k} \le b$
Take the limit $k \to \infty$:

$a \le L \le b$
Hence, $L \in I$.
The result follows by definition of compact.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 1.5$: Normed and Banach spaces. Compact sets




