# 

Source: https://proofwiki.org/wiki/Congruence_Relation/Examples/Equal_Sine_of_pi_x_over_6_on_Integers_for_Addition

Example of Congruence Relation
Let $\Z$ denote the set of integers.
Let $\RR$ denote the relation on $\Z$ defined as:

$\forall x, y \in \Z: x \mathrel \RR y \iff \sin \dfrac {\pi x} 6 = \sin \dfrac {\pi y} 6$
Then $\RR$ is not a congruence relation for addition on $\Z$.


Proof
Proof by Counterexample
Note that by Equivalence Relation Examples: Equal $\sin \dfrac {\pi x} 6$ on Integers, $\RR$ is an equivalence relation.
However:














\(\ds \sin \dfrac \pi 6\)

\(=\)







\(\ds \sin \dfrac {5 \pi} 6\)

\(\ds = \dfrac 1 2\)
















\(\, \ds \land \, \)

\(\ds \sin \dfrac {2 \pi} 6\)

\(=\)







\(\ds \sin \dfrac {4 \pi} 6\)

\(\ds = \dfrac {\sqrt 3} 2\)












\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\RR\)







\(\ds 5\)


















\(\, \ds \land \, \)

\(\ds 2\)

\(\RR\)







\(\ds 4\)










But:

$\sin \dfrac {\paren {1 + 2} \pi} 6 = 1$
while:

$\sin \dfrac {\paren {4 + 5} \pi} 6 = -1$

So while we have:

$\paren {x_1 \mathrel \RR x_2} \land \paren {y_1 \mathrel \RR y_2}$
where $x_1 = 1$, $x_2 = 5$, $y_1 = 2$, $y_2 = 4$
we have:

$\paren {x_1 + y_1} \not \mathrel \RR \paren {x_2 + y_2}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.1 \ \text{(b)}$




