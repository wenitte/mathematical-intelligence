# 

Source: https://proofwiki.org/wiki/Euclidean_Metric_on_Real_Number_Line_is_Metric



Theorem
The Euclidean metric on the real number line $\R$ is a metric.


Proof 1
The Euclidean metric on the real number line is a special case of the Euclidean metric on the real vector space $\R^n$.
The result follows from Euclidean Metric on Real Vector Space is Metric.
$\blacksquare$


Proof 2
Consider the real number line under the Euclidean metric:

$M = \struct {\R, d}$
where $d$ is the distance function given by:

$\map d {x, y} = \size {x - y}$


Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map d {x, x}\)

\(=\)







\(\ds \size {x - x}\)





Definition of $d$














\(\ds \)

\(=\)







\(\ds \size 0\)




















\(\ds \)

\(=\)







\(\ds 0\)









So Metric Space Axiom $(\text M 1)$ holds for $d$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality













\(\ds \map d {x, y} + \map d {y, z}\)

\(=\)







\(\ds \size {x - y} + \size {y - z}\)





Definition of $d$














\(\ds \)

\(\ge\)







\(\ds \size {\paren {x - y} + \paren {y - z} }\)





Triangle Inequality for Real Numbers














\(\ds \)

\(=\)







\(\ds \size {x - z}\)




















\(\ds \)

\(=\)







\(\ds \map d {x, z}\)





Definition of $d$



So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map d {x, y}\)

\(=\)







\(\ds \size {x - y}\)





Definition of $d$














\(\ds \)

\(=\)







\(\ds \size {y - x}\)




















\(\ds \)

\(=\)







\(\ds \map d {y, x}\)





Definition of $d$



So Metric Space Axiom $(\text M 3)$ holds for $d$.
$\Box$


Proof of Metric Space Axiom $(\text M 4)$













\(\ds x\)

\(\ne\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x - y\)

\(\ne\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \size {x - y}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map d {x, y}\)

\(>\)







\(\ds 0\)





Definition of $d$



So Metric Space Axiom $(\text M 4)$ holds for $d$.
$\blacksquare$


Sources
1999: Theodore W. Gamelin and Robert Everist Greene: Introduction to Topology (2nd ed.) ... (previous) ... (next): One: Metric Spaces: $1$: Open and Closed Sets




