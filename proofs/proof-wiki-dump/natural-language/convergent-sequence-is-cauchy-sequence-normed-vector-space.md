# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_is_Cauchy_Sequence/Normed_Vector_Space

Theorem
Let $\struct{X, \norm{\,\cdot\,} }$ be a normed vector space.

Every convergent sequence in $X$ is a Cauchy sequence.


Proof
Let $\sequence {x_n}$ be a sequence in $X$ that converges to the limit $L \in X$.
Let $\epsilon > 0$. 
Then also $\dfrac \epsilon 2 > 0$.
Because $\sequence {x_n}$ converges to $L$, we have:

$\exists N: \forall n > N: \norm {x_n - L} < \dfrac \epsilon 2$
So if $m > N$ and $n > N$, then:














\(\ds \norm {x_n - x_m}\)

\(=\)







\(\ds \norm {x_n - L + L - x_m}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_n - L} + \norm {x_m - L}\)





Triangle Inequality Axiom of Norm














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)





(by choice of $N$)














\(\ds \)

\(=\)







\(\ds \epsilon\)









Thus $\sequence {x_n}$ is a Cauchy sequence.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




