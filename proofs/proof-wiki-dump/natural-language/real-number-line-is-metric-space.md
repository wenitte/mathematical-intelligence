# 

Source: https://proofwiki.org/wiki/Real_Number_Line_is_Metric_Space



Theorem
Let $\R$ be the real number line.
Let $d: \R \times \R \to \R$ be defined as:

$\map d {x_1, x_2} = \size {x_1 - x_2}$
where $\size x$ is the absolute value of $x$.

Then $d$ is a metric on $\R$ and so $\struct {\R, d}$ is a metric space.


Proof
Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map d {x, x}\)

\(=\)







\(\ds \size {x - x}\)





Definition of $d$














\(\ds \)

\(=\)







\(\ds 0\)





Definition of Absolute Value



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





Definition of Absolute Value














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





\(\ds \size {x - y}\)

\(>\)







\(\ds 0\)





Definition of Absolute Value








\(\ds \leadsto \ \ \)





\(\ds \map d {x, y}\)

\(>\)







\(\ds 0\)





Definition of $d$



So Metric Space Axiom $(\text M 4)$ holds for $d$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 2$: Metric Spaces: Theorem $2.2$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $28$. Euclidean Topology: $1$




