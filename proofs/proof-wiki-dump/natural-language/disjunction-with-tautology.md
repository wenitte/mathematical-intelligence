# 

Source: https://proofwiki.org/wiki/Disjunction_with_Tautology



Theorem
A disjunction with a tautology:

$p \lor \top \dashv \vdash \top$


Proof by Natural Deduction
By the tableau method of natural deduction:


$p \lor \top \vdash \top$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor \top$

Premise

(None)




2


2

$\top$

Assumption

(None)




3


3

$p$

Assumption

(None)




4


3

$p \lor \neg p$

Rule of Addition: $\lor \II_1$

3




5


3

$\top$

Law of Excluded Middle

4




6


1

$\top$

Proof by Cases: $\text{PBC}$

1, 2 – 2, 3 – 5

Assumptions 2 and 3 have been discharged

$\Box$


The validity of the material on this page is questionable.In particular: The above needs to be reviewedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

By the tableau method of natural deduction:


$\top \vdash p \lor \top$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\top$

Premise

(None)




2


1

$p \lor \top$

Rule of Addition: $\lor \II_2$

1



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, in each case, the truth values in the appropriate columns match for all boolean interpretations.

$\begin{array}{|c|c||ccc|} \hline
p & \top & p & \lor & \top \\
\hline
F & T & F & T & T \\
T & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




