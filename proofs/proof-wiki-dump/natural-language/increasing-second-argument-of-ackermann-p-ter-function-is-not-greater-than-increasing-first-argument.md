# 

Source: https://proofwiki.org/wiki/Increasing_Second_Argument_of_Ackermann-P%C3%A9ter_Function_is_Not_Greater_than_Increasing_First_Argument



Theorem
For all $x, y \in \N$:

$\map A {x + 1, y} \ge \map A {x, y + 1}$
where $A$ is the Ackermann-Péter function.


Proof
Proceed by induction on $y$.

Basis for the Induction
Suppose $y = 0$.
Then:














\(\ds \map A {x + 1, 0}\)

\(=\)







\(\ds \map A {x, 1}\)





Definition of Ackermann-Péter Function



Therefore:

$\map A {x + 1, 0} \ge \map A {x, 1}$
which is the basis for the induction.
$\Box$


Induction Hypothesis
This is the induction hypothesis:

$\map A {x + 1, y} \ge \map A {x, y + 1}$
We want to show that:

$\map A {x + 1, y + 1} \ge \map A {x, y + 2}$


Induction Step
First, observe:














\(\ds \map A {x + 1, y}\)

\(\ge\)







\(\ds \map A {x, y + 1}\)





Induction Hypothesis














\(\ds \)

\(>\)







\(\ds y + 1\)





Ackermann-Péter Function is Greater than Second Argument



Thus, we have shown:

$\paren 1 \quad \map A {x + 1, y} \ge y + 2$
Now, we have:














\(\ds \map A {x + 1, y + 1}\)

\(=\)







\(\ds \map A {x, \map A {x + 1, y} }\)





Definition of Ackermann-Péter Function














\(\ds \)

\(\ge\)







\(\ds \map A {x, y + 2}\)





Ackermann-Péter Function is Strictly Increasing on Second Argument and $\paren 1$



This completes the induction step.
$\Box$

Thus, by the Principle of Mathematical Induction, the result holds for all $x, y \in \N$.
$\blacksquare$





