# 

Source: https://proofwiki.org/wiki/Non-Archimedean_Norm_iff_Non-Archimedean_Metric



Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring with zero $0$.
Let $d$ be the metric induced by $\norm {\,\cdot\,}$.

Then:

$\norm {\, \cdot \,}$ is a non-Archimedean norm if and only if $d$ is a non-Archimedean metric.


Proof
Necessary Condition
Let $x, y, z \in R$.














\(\ds \map d {x, y}\)

\(=\)







\(\ds \norm {x - y}\)





Definition of Metric Induced by $\norm {\,\cdot\,}$














\(\ds \)

\(=\)







\(\ds \norm {\paren {x - z} + \paren {z - y} }\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\norm {x - z}, \norm {z - y} }\)





Definition of Non-Archimedean Division Ring Norm














\(\ds \)

\(=\)







\(\ds \max \set {\map d {x, z}, \map d {z, y} }\)





Definition of Metric Induced by $\norm {\,\cdot\,}$



$\Box$


Sufficient Condition
Let $x, y \in R$.














\(\ds \norm {x + y}\)

\(=\)







\(\ds \norm {x - \paren {-y} }\)




















\(\ds \)

\(=\)







\(\ds \map d {x, - y}\)





Definition of Metric Induced by $\norm {\, \cdot \,}$














\(\ds \)

\(\le\)







\(\ds \max \set {\map d {x, 0}, \map d {0, -y} }\)





Definition of Non-Archimedean Metric














\(\ds \)

\(=\)







\(\ds \max \set {\norm {x - 0 }, \norm {0 - \paren {-y} } }\)





Definition of Metric Induced by $\norm {\, \cdot \,}$














\(\ds \)

\(=\)







\(\ds \max \set {\norm x, \norm y}\)









$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.3$: Topology: Lemma $2.3.2$




