# 

Source: https://proofwiki.org/wiki/Sequence_Converges_to_Within_Half_Limit/Complex_Numbers

Theorem
Let $\sequence {z_n}$ be a sequence in $\C$.
Let $\sequence {z_n}$ be convergent to the limit $l$.
That is, let $\ds \lim_{n \mathop \to \infty} z_n = l$ where $l \ne 0$.

Then:

$\exists N: \forall n > N: \cmod {z_n} > \dfrac {\cmod l} 2$


Proof
Suppose $l > 0$.
Let us choose $N$ such that:

$\forall n > N: \cmod {z_n - l} < \dfrac {\cmod l} 2$

Then:














\(\ds \cmod {z_n - l}\)

\(<\)







\(\ds \frac {\cmod l} 2\)














\(\ds \leadsto \ \ \)





\(\ds \cmod l - \cmod {z_n}\)

\(\le\)







\(\ds \cmod {z_n - l}\)





Reverse Triangle Inequality














\(\ds \)

\(<\)







\(\ds \frac {\cmod l} 2\)














\(\ds \leadsto \ \ \)





\(\ds \cmod {z_n}\)

\(>\)







\(\ds \cmod l - \frac {\cmod l} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {\cmod l} 2\)









$\blacksquare$





