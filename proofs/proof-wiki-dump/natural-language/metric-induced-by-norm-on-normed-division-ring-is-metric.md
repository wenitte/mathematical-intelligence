# 

Source: https://proofwiki.org/wiki/Metric_Induced_by_Norm_on_Normed_Division_Ring_is_Metric



Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring.
Let $d$ be the metric induced by $\norm{\,\cdot\,}$.

Then $d$ is a metric.


Proof
Proof of Metric Space Axiom $(\text M 1)$ and Metric Space Axiom $(\text M 4)$
Let $x, y \in R$. 
Then $\map d {x, y} = \norm {x - y} \ge 0$, and furthermore:














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







\(\ds \mathbf 0_R\)





Norm Axiom $\text N 1$: Positive Definiteness








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)









$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let $x, y, z \in R$.
Then:














\(\ds \map d {x, z}\)

\(=\)







\(\ds \norm {x - z}\)




















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









$\Box$


Proof of Metric Space Axiom $(\text M 3)$
Let $x, y \in R$.
Then: 














\(\ds \map d {x, y}\)

\(=\)







\(\ds \norm {x - y}\)




















\(\ds \)

\(=\)







\(\ds \norm {-1 \paren {y - x} }\)




















\(\ds \)

\(=\)







\(\ds \norm {-1} \times \norm {y - x}\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds \norm {y - x}\)




















\(\ds \)

\(=\)







\(\ds \map d {y, x}\)









$\Box$

As $d$ satisfies the metric space axioms, it is a metric.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.3$: Topology: Problem $42$




