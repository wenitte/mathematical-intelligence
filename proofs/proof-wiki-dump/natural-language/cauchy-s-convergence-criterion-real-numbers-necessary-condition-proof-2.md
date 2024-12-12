# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Convergence_Criterion/Real_Numbers/Necessary_Condition/Proof_2

Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $\sequence {x_n}$ be convergent.

Then $\sequence {x_n}$ is a Cauchy sequence.


Proof
Let $\sequence {x_n}$ be a sequence in $\R$ that converges to the limit $l \in \R$.
Let $\epsilon > 0$. 
Then also $\dfrac \epsilon 2 > 0$.
Because $\sequence {x_n}$ converges to $l$, we have:

$\exists N: \forall n > N: \size {x_n - l} < \dfrac \epsilon 2$
So if $m > N$ and $n > N$, then:














\(\ds \size {x_n - x_m}\)

\(=\)







\(\ds \size {x_n - l + l - x_m}\)




















\(\ds \)

\(\le\)







\(\ds \size {x_n - l} + \size {l - x_m}\)





Triangle Inequality














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)





by choice of $N$














\(\ds \)

\(=\)







\(\ds \epsilon\)









Thus $\sequence {x_n}$ is a Cauchy sequence.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.2$: Real Sequences: Theorem $1.2.9$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): Appendix: $\S 18.4$: Subsequences




