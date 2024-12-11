# 

Source: https://proofwiki.org/wiki/Ackermann-P%C3%A9ter_Function_at_(2,y)



Theorem
For every $y \in \N$:

$\map A {2, y} = 2 y + 3$
where $A$ is the Ackermann-Péter function.


Proof
Proceed by induction on $y$.


Basis for the Induction
Suppose $y = 0$.
Then:














\(\ds \map A {2, 0}\)

\(=\)







\(\ds \map A {1, 1}\)





Definition of Ackermann-Péter Function














\(\ds \)

\(=\)







\(\ds 3\)





Ackermann-Péter Function at (1,y)



This is the basis for the induction.
$\Box$


Induction Hypothesis
This is the induction hypothesis:
Suppose:

$\map A {2, y} = 2 y + 3$
We want to show that:

$\map A {2, y + 1} = 2 \paren {y + 1} + 3 = 2 y + 5$


Induction Step
This is the induction step:














\(\ds \map A {2, y + 1}\)

\(=\)







\(\ds \map A {1, \map A {2, y} }\)





Definition of Ackermann-Péter Function














\(\ds \)

\(=\)







\(\ds \map A {1, 2 y + 3}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds 2 y + 5\)





Ackermann-Péter Function at (1,y)



$\Box$

By the Principle of Mathematical Induction, the result holds for all $y \in \N$.
$\blacksquare$





