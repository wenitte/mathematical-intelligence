# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_is_Cauchy_Sequence/Normed_Division_Ring



Theorem
Let $\struct {R, \norm {\,\cdot\,}} $ be a normed division ring.

Every convergent sequence in $R$ is a Cauchy sequence.


Proof 1
Let $\sequence {x_n}$ be a sequence in $R$ that converges to the limit $l \in R$.
Let $\epsilon > 0$. 
Then also $\dfrac \epsilon 2 > 0$.
Because $\sequence {x_n}$ converges to $l$, we have:

$\exists N: \forall n > N: \norm {x_n - l} < \dfrac \epsilon 2$
So if $m > N$ and $n > N$, then:














\(\ds \norm {x_n - x_m}\)

\(=\)







\(\ds \norm {x_n - l + l - x_m}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_n - l} + \norm {l - x_m}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)





by choice of $N$














\(\ds \)

\(=\)







\(\ds \epsilon\)









Thus $\sequence {x_n}$ is a Cauchy sequence.
$\blacksquare$


Proof 2
Let $d$ be the metric induced on $R$ be the norm $\norm {\,\cdot\,}$.
Let $\sequence {x_n}$ be a sequence in $R$ that converges to the limit $l$ in $\struct {R, \norm {\,\cdot\,}}$.
Thus, by definition, $\sequence {x_n} $ converges to the limit $l$ in $\struct {R, d}$.
By Convergent Sequence is Cauchy Sequence in metric space, $\sequence {x_n} $ is a Cauchy sequence in $\struct {R, d}$.
Thus, by definition, $\sequence {x_n} $ is a Cauchy sequence in $\struct {R, \norm {\,\cdot\,}}$.
$\blacksquare$


Also see
Cauchy's Convergence Criterion on Real Numbers
Cauchy's Convergence Criterion on Complex Numbers


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.2$: Normed Fields: Definition $1.7$




