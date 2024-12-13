# 

Source: https://proofwiki.org/wiki/Metric_Induced_by_Norm_is_Metric



Theorem
Let $V$ be a normed vector space.
Let $\norm{\,\cdot\,}$ denote its norm.
Let $d$ be the metric induced by $\norm {\,\cdot\,}$.

Then $d$ is a metric.


Proof
Proof of Metric Space Axiom $(\text M 1)$ and Metric Space Axiom $(\text M 4)$
Let $x, y \in V$. 
Then:

$\map d {x, y} = \norm {x - y} \ge 0$
and furthermore:














\(\ds \map d {x, y}\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \norm {x - y}\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x - y\)

\(=\)







\(\ds \mathbf 0_V\)





Norm Axiom $\text N 1$: Positive Definiteness








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)









$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let $x, y, z \in V$.
Then:














\(\ds \map d {x, z}\)

\(=\)







\(\ds \norm {x - z}\)





Definition of Metric Induced by Norm














\(\ds \)

\(=\)







\(\ds \norm {x - y + y - z}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x - y} + \norm {y - z}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map d {x, y} + \map d {y, z}\)





Definition of Metric Induced by Norm



$\Box$


Proof of Metric Space Axiom $(\text M 3)$
Let $x, y \in V$.
Then: 














\(\ds \map d {x, y}\)

\(=\)







\(\ds \norm {x - y}\)





Definition of Metric Induced by Norm














\(\ds \)

\(=\)







\(\ds \norm {-1 \paren {y - x} }\)




















\(\ds \)

\(=\)







\(\ds \norm {-1} \times \norm {y - x}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \norm {y - x}\)




















\(\ds \)

\(=\)







\(\ds \map d {y, x}\)





Definition of Metric Induced by Norm



$\Box$

As $d$ satisfies the metric space axioms, it is a metric.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $3.1$: Norms




