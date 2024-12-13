# 

Source: https://proofwiki.org/wiki/Sequence_Converges_to_Within_Half_Limit/Normed_Division_Ring

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring with zero $0$.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $\sequence {x_n}$ be convergent in the norm $\norm {\, \cdot \,}$ to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l \ne 0$

Then:

$\exists N: \forall n > N: \norm {x_n} > \dfrac {\norm l} 2$


Proof
Since $l \ne 0$, by Norm Axiom $\text N 1$: Positive Definiteness:

$\norm l > 0$
Let us choose $N$ such that:

$\forall n > N: \norm {x_n - l} < \dfrac {\norm l} 2$

Then:














\(\ds \norm {x_n - l}\)

\(<\)







\(\ds \frac {\norm l} 2\)














\(\ds \leadsto \ \ \)





\(\ds \norm l - \norm {x_n}\)

\(\le\)







\(\ds \norm {x_n - l}\)





Reverse Triangle Inequality














\(\ds \)

\(<\)







\(\ds \frac {\norm l} 2\)














\(\ds \leadsto \ \ \)





\(\ds \norm {x_n}\)

\(>\)







\(\ds \norm l - \frac {\norm l} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {\norm l} 2\)









$\blacksquare$





