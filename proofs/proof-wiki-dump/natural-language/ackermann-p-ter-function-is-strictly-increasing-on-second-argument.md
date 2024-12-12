# 

Source: https://proofwiki.org/wiki/Ackermann-P%C3%A9ter_Function_is_Strictly_Increasing_on_Second_Argument



Theorem
For all $x, y \in \N$:

$\map A {x, y + 1} > \map A {x, y}$
where $A$ is the Ackermann-Péter function.


General Result
For all $x, y, z \in \N$ such that:

$y < z$
we have:

$\map A {x, y} < \map A {x, z}$
where $A$ is the Ackermann-Péter function.


Proof
Proceed by induction on $x$.

Basis for the Induction
Suppose $x = 0$.
Then:














\(\ds \map A {0, y + 1}\)

\(=\)







\(\ds y + 2\)





Definition of Ackermann-Péter Function














\(\ds \)

\(>\)







\(\ds y + 1\)




















\(\ds \)

\(=\)







\(\ds \map A {0, y}\)





Definition of Ackermann-Péter Function



This is the basis for the induction.
$\Box$


Induction Hypothesis
This is the induction hypothesis:
Suppose that:

$\map A {x, y + 1} > \map A {x, y}$
We want to show that:

$\map A {x + 1, y + 1} > \map A {x + 1, y}$


Induction Step
This is the induction step:














\(\ds \map A {x + 1, y + 1}\)

\(=\)







\(\ds \map A {x, \map A {x + 1, y} }\)





Definition of Ackermann-Péter Function














\(\ds \)

\(>\)







\(\ds \map A {x + 1, y}\)





Ackermann-Péter Function is Greater than Second Argument



$\Box$

By the Principle of Mathematical Induction, the result holds.
$\blacksquare$





