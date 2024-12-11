# 

Source: https://proofwiki.org/wiki/Ackermann-P%C3%A9ter_Function_is_Greater_than_Second_Argument


This article needs to be linked to other articles.In particular: categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of basic complexity.In particular: separate pages for each induction proofUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
For all $x, y \in \N$:

$\map A {x, y} > y$
where $A$ is the Ackermann-Péter function.


Proof
First, perform induction on $x$.

Basis for the Induction
Suppose $x = 0$.
Then:














\(\ds \map A {0, y}\)

\(=\)







\(\ds y + 1\)





Definition of Ackermann-Péter Function














\(\ds \)

\(>\)







\(\ds y\)









This is the basis for the induction.
$\Box$


Induction Hypothesis $\paren 1$
This is the induction hypothesis
Suppose that, for every $y \in \N$:

$\map A {x, y} > y$
We want to show that, for every $y \in \N$:

$\map A {x + 1, y} > y$


Induction Step
This is the induction step:
We will now perform another induction on $y$.

Basis for the Induction
Suppose $y = 0$.
Then:














\(\ds \map A {x + 1, 0}\)

\(=\)







\(\ds \map A {x, 1}\)





Definition of Ackermann-Péter Function














\(\ds \)

\(>\)







\(\ds 1\)





Induction Hypothesis $\paren 1$














\(\ds \)

\(>\)







\(\ds 0\)









This is the basis for the induction.
$\Box$


Induction Hypothesis $\paren 2$
This is the induction hypothesis:
Suppose that:

$\map A {x + 1, y} > y$
We want to show that:

$\map A {x + 1, y + 1} > y + 1$


Induction Step
This is the induction step:














\(\ds \map A {x + 1, y + 1}\)

\(=\)







\(\ds \map A {x, \map A {x + 1, y} }\)





Definition of Ackermann-Péter Function














\(\ds \)

\(>\)







\(\ds \map A {x + 1, y}\)





Induction Hypothesis $\paren 1$














\(\ds \)

\(\ge\)







\(\ds y + 1\)





Induction Hypothesis $\paren 2$



$\Box$

By the Principle of Mathematical Induction, the Induction Step $\paren 1$ holds.
$\Box$

By the Principle of Mathematical Induction, the result holds.
$\blacksquare$





