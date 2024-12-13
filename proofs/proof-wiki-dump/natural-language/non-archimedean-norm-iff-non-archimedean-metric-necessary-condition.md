# 

Source: https://proofwiki.org/wiki/Non-Archimedean_Norm_iff_Non-Archimedean_Metric/Necessary_Condition

Theorem
Let $\struct {R, \norm {\,\cdot\,}}$ be a non-Archimedean normed division ring.
Let $d$ be the metric induced by $\norm {\,\cdot\,}$.

Then $d$ is a non-Archimedean metric.


Proof
By Metric Induced by Norm on Normed Division Ring is Metric then $d$ satisfies the metric space axioms $(\text M 1)$ to $(\text M 4)$.
To complete the proof, all that remains is to show that $d$ is non-Archimedean.

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




$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 2.3$: Topology




