# 

Source: https://proofwiki.org/wiki/Sequence_is_Bounded_in_Norm_iff_Bounded_in_Metric/Necessary_Condition

Theorem
Let $\struct {R, \norm {\,\cdot\,}} $ be a normed division ring.
Let $d$ be the metric induced on $R$ be the norm $\norm {\,\cdot\,}$.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $\sequence {x_n} $ be a bounded sequence in the normed division ring $\struct {R, \norm {\,\cdot\,}}$ 

Then:

$\sequence {x_n} $ is a bounded sequence in the metric space $\struct {R, d}$


Proof
Let $\sequence {x_n} $ be a bounded sequence in $\struct {R, \norm {\,\cdot\,} }$.
Then:

$\exists K \in \R_{\gt 0} : \forall n : \norm {x_n} \le K$

Then $\forall n, m \in \N$:














\(\ds \map d { x_n , x_m }\)

\(=\)







\(\ds \norm {x_n - x_m}\)





Definition of Metric Induced by Norm on Division Ring














\(\ds \)

\(\le\)







\(\ds \norm {x_n} + \norm {x_m}\)





Norm of Difference














\(\ds \)

\(\le\)







\(\ds K + K\)





Definition of Bounded Sequence in Normed Division Ring














\(\ds \)

\(=\)







\(\ds 2 K\)










Hence the sequence $\sequence {x_n} $ is bounded by $2 K$ in the metric space $\struct {R, d}$.
$\blacksquare$


Also see
Definition:Bounded Sequence in Normed Division Ring
Definition:Metric Induced by Norm on Division Ring
Definition:Bounded Sequence in Metric Space




