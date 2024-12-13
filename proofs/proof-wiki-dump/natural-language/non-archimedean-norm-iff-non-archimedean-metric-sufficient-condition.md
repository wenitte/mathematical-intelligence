# 

Source: https://proofwiki.org/wiki/Non-Archimedean_Norm_iff_Non-Archimedean_Metric/Sufficient_Condition

Theorem
Let $\struct {R, \norm {\,\cdot\,} }$ be a normed division ring with zero $0$.
Let $d$ be the metric induced by $\norm {\, \cdot \,}$.
Let $d$ be non-Archimedean.
Then:

$\norm {\, \cdot \,}$ is a non-Archimedean norm.


Proof
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










Hence $\norm {\,\cdot\,}$ is non-Archimedean.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 2.3$: Topology




