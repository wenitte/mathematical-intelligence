# 

Source: https://proofwiki.org/wiki/Sequence_is_Bounded_in_Norm_iff_Bounded_in_Metric/Sufficient_Condition

Theorem
Let $\struct {R, \norm {\,\cdot\,}} $ be a normed division ring.
Let $d$ be the metric induced on $R$ be the norm $\norm {\,\cdot\,}$.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $\sequence {x_n} $ be a bounded sequence in the metric space $\struct {R, d}$

Then:

$\sequence {x_n} $ is a bounded sequence in the normed division ring $\struct {R, \norm {\,\cdot\,} }$


Proof
Let $\sequence {x_n} $ be a bounded sequence in the metric space $\struct {R, d}$.
Then:

$\exists K \in \R_{> 0} : \forall n, m : \map d {x_n , x_m} \le K$
By the definition of the metric induced by a norm this is equivalent to:

$\exists K \in \R_{> 0} : \forall n, m : \norm {x_n - x_m} \le K$

Then $\forall n \in \N$:














\(\ds \norm {x_n}\)

\(=\)







\(\ds \norm {x_n - x_1 + x_1}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_n - x_1} + \norm {x_1}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds K + \norm {x_1}\)





by hypothesis: Definition of Bounded Sequence in Metric Space




Hence the sequence $\sequence {x_n}$ is bounded by $K + \norm {x_1}$ in the normed division ring $\struct {R, \norm {\,\cdot\,} }$.
$\blacksquare$


Also see
Definition:Bounded Sequence in Normed Division Ring
Definition:Metric Induced by Norm on Division Ring
Definition:Bounded Sequence in Metric Space




