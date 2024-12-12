# 

Source: https://proofwiki.org/wiki/Ackermann-P%C3%A9ter_Function_is_Strictly_Increasing_on_Second_Argument/General_Result



Theorem
For all $x, y, z \in \N$ such that:

$y < z$
we have:

$\map A {x, y} < \map A {x, z}$
where $A$ is the Ackermann-Péter function.


Proof
Let $z$ be expressed as:

$z = y + k$
for some $k \in \N_{>0}$.
Proceed by induction on $k$.

Basis for the Induction
Suppose $k = 1$.
Then:














\(\ds \map A {x, y}\)

\(<\)







\(\ds \map A {x, y + 1}\)





Ackermann-Péter Function is Strictly Increasing on Second Argument



This is the basis for the induction.
$\Box$


Induction Hypothesis
This is the induction hypothesis:
Suppose that:

$\map A {x, y} < \map A {x, y + k}$
We want to show that:

$\map A {x, y} < \map A {x, y + k + 1}$


Induction Step
This is the induction step:














\(\ds \map A {x, y}\)

\(<\)







\(\ds \map A {x, y + k}\)





Induction Hypothesis














\(\ds \)

\(<\)







\(\ds \map A {x, y + k}\)





Ackermann-Péter Function is Strictly Increasing on Second Argument



$\Box$

By Principle of Mathematical Induction, the result follows.
$\blacksquare$





