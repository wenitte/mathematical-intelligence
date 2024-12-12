# 

Source: https://proofwiki.org/wiki/Equivalences_are_Interderivable


This page has been identified as a candidate for refactoring of advanced complexity.In particular: Something needs to be done here, but I'm not sure what it is. Maybe renaming to use properly defined concepts and more of the suggestion on the talk page.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
If two propositional formulas are interderivable, they are equivalent:

$\paren {p \dashv \vdash q} \dashv \vdash \paren {p \iff q}$


Forward Implication
$\left ({p \dashv \vdash q}\right) \vdash \left ({p \iff q}\right)$
Reverse Implication
$\left ({p \iff q}\right) \vdash \left ({p \dashv \vdash q}\right)$


Proof 1
The result follows directly from the truth table for the biconditional:
$\begin{array}{|cc||ccc|} \hline
p & q & p & \iff & q \\
\hline
\F & \F & \F & \T & \F \\
\F & \T & \F & \F & \T \\
\T & \F & \T & \F & \F \\
\T & \T & \T & \T & \T \\
\hline
\end{array}$

By inspection, it is seen that $\map \MM {p \iff q} = \T$ if and only if $\map \MM p = \map \MM q$.
$\blacksquare$


Proof 2
Let $v$ be an arbitrary interpretation.
Then by definition of interderivable:

$\map v {p \iff q}$ if and only if $\map v p = \map v q$
Since $v$ is arbitrary, $\map v p = \map v q$ holds in all interpretations.
That is:

$p \dashv \vdash q$
$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Exercises, Group $\text{III}$




