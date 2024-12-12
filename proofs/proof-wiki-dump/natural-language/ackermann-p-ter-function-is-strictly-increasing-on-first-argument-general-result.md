# 

Source: https://proofwiki.org/wiki/Ackermann-P%C3%A9ter_Function_is_Strictly_Increasing_on_First_Argument/General_Result



Theorem
Forall $x, y, z \in \N$ such that:

$x < y$
we have:

$\map A {x, z} < \map A {y, z}$
where $A$ is the Ackermann-Péter function.


Proof
Let $y$ be expressed as:

$y = x + k$
for some $k \in \N_{>0}$.
Proceed by induction on $k$.

Basis for the Induction
Suppose $k = 1$.
Then:

$\map A {x, z} < \map A {x + 1, z}$
by Ackermann-Péter Function is Strictly Increasing on First Argument.
This is the basis for the induction.
$\Box$


Induction Hypothesis
The induction hypothesis is:

$\map A {x, z} < \map A {x + k, z}$
We want to show:

$\map A {x, z} < \map A {x + k + 1, z}$


Induction Step













\(\ds \map A {x + k + 1, z}\)

\(>\)







\(\ds \map A {x + k, z}\)





Ackermann-Péter Function is Strictly Increasing on First Argument














\(\ds \)

\(>\)







\(\ds \map A {x, z}\)





Induction Hypothesis



Thus, the induction step is satisfied.
$\Box$

Thus, by Principle of Mathematical Induction, the result holds forall $x, y, z \in \N$.
$\blacksquare$





