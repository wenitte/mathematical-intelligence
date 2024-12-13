# 

Source: https://proofwiki.org/wiki/Lipschitz_Equivalence_is_Equivalence_Relation



Theorem
Let $A$ be a set.
Let $\DD$ be the set of all metrics on $A$.
Let $\sim$ be the relation on $\DD$ defined as:

$\forall d_1, d_2 \in \DD: d_1 \sim d_2 \iff d_1$ is Lipschitz equivalent to $d_2$

Then $\sim$ is an equivalence relation.


Proof
Let $A$ be a set and let $\DD$ be the set of all metrics on $A$.

In the following, let $d_1, d_2, d_3 \subseteq \DD$ be arbitrary.

Checking in turn each of the criteria for equivalence:


Reflexivity
Let $d_1$ be a metric on $A$.
Then trivially:

$\forall x, y \in A: 1 \times \map {d_1} {x, y} \le \map {d_1} {x, y} \le 1 \times \map {d_1} {x, y}$
That is, $d_1 \sim d_1$ and so $\sim$ has been shown to be reflexive.
$\Box$


Symmetry
Let $d_1 \sim d_2$.
That is, let $d_1, d_2$ be Lipschitz equivalent metrics on $A$.
Then by definition:

$\forall x, y \in A: h \map {d_1} {x, y} \le \map {d_2} {x, y} \le k \map {d_1} {x, y}$
for some $h, k \in \R_{>0}$.
Then:














\(\ds h \map {d_1} {x, y}\)

\(\le\)







\(\ds \map {d_2} {x, y}\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_1} {x, y}\)

\(\le\)







\(\ds \frac 1 h \map {d_2} {x, y}\)









and:














\(\ds \map {d_2} {x, y}\)

\(\le\)







\(\ds k \map {d_1} {x, y}\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 k \map {d_2} {x, y}\)

\(\le\)







\(\ds \map {d_1} {x, y}\)









That is:

$\forall x, y \in A: \dfrac 1 h \map {d_2} {x, y} \le \map {d_1} {x, y} \le \dfrac 1 k \map {d_2} {x, y}$
for some $\dfrac 1 h, \dfrac 1 k \in \R_{>0}$.
That is, $d_2 \sim d_1$ and so $\sim$ has been shown to be symmetric.

Note that in the definition of Lipschitz equivalent metrics, in the expression $d_1 \sim d_2$ it is not explicitly specified which of $d_1$ and $d_2$ goes in the middle of the defining statement.
This result demonstrates that it does not actually matter.
$\Box$


Transitivity
Let $d_1 \sim d_2$ and $d_2 \sim d_3$.
Then by definition:

$\forall x, y \in A: h_1 \map {d_1} {x, y} \le \map {d_2} {x, y} \le k_1 \map {d_1} {x, y}$
$\forall x, y \in A: h_2 \map {d_2} {x, y} \le \map {d_3} {x, y} \le k_2 \map {d_2} {x, y}$
for some $h_1, k_1, h_2, k_2 \in \R_{>0}$.
Then:














\(\ds h_1 \map {d_1} {x, y}\)

\(\le\)







\(\ds \map {d_2} {x, y}\)














\(\ds \leadsto \ \ \)





\(\ds h_1 h_2 \map {d_1} {x, y}\)

\(\le\)







\(\ds h_2 \map {d_2} {x, y}\)














\(\ds \leadsto \ \ \)





\(\ds h_1 h_2 \map {d_1} {x, y}\)

\(\le\)







\(\ds \map {d_3} {x, y}\)









and:














\(\ds \map {d_2} {x, y}\)

\(\le\)







\(\ds k_1 \map {d_1} {x, y}\)














\(\ds \leadsto \ \ \)





\(\ds k_2 \map {d_2} {x, y}\)

\(\le\)







\(\ds k_1 k_2 \map {d_1} {x, y}\)














\(\ds \leadsto \ \ \)





\(\ds \map {d_3} {x, y}\)

\(\le\)







\(\ds k_1 k_2 \map {d_1} {x, y}\)









So:

$\forall x, y \in A: h_1 h_2 \map {d_1} {x, y} \le \map {d_3} {x, y} \le k_1 k_2 \map {d_1} {x, y}$

That is, $d_1 \sim d_3$ and so $\sim$ has been shown to be transitive.
$\Box$

$\sim$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.4$: Equivalent metrics: Proposal $2.4.3$




