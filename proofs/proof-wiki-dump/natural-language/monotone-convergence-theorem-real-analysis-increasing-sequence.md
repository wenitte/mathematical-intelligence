# 

Source: https://proofwiki.org/wiki/Monotone_Convergence_Theorem_(Real_Analysis)/Increasing_Sequence

Theorem
Let $\sequence {x_n}$ be an increasing real sequence which is bounded above.

Then $\sequence {x_n}$ converges to its supremum.


Proof
Suppose $\sequence {x_n}$ is increasing and bounded above.
By the Continuum Property, it has a supremum, $B$.
We need to show that $x_n \to B$ as $n \to \infty$.
Let $\epsilon \in \R_{>0}$.
By the definition of supremum, $B - \epsilon$ is not an upper bound.
Thus:

$\exists N \in \N: x_N > B - \epsilon$
But $\sequence {x_n}$ is increasing.
Hence:

$\forall n > N: x_n \ge x_N > B - \epsilon$
But $B$ is still an upper bound for $\sequence {x_n}$.

Then:










\(\ds \forall n > N: \, \)



\(\ds B - \epsilon\)

\(<\)







\(\ds x_n \le B\)














\(\ds \leadsto \ \ \)

\(\ds \forall n > N: \, \)



\(\ds B - \epsilon\)

\(<\)







\(\ds x_n < B + \epsilon\)





Real Plus Epsilon








\(\ds \leadsto \ \ \)

\(\ds \forall n > N: \, \)



\(\ds \size {x_n - B}\)

\(<\)







\(\ds \epsilon\)





Negative of Absolute Value: Corollary 1




Hence the result.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous): $3.14$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Exercise $4$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.2$: Real Sequences: Theorem $1.2.6$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: $\S 4.17 \ \text{(i)}$
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




