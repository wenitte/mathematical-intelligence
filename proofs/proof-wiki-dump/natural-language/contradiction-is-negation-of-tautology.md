# 

Source: https://proofwiki.org/wiki/Contradiction_is_Negation_of_Tautology



Theorem
A contradiction implies and is implied by the negation of a tautology:

$\bot \dashv \vdash \neg \top$
That is, a falsehood can not be true, and a non-truth is a falsehood.


Proof by Natural Deduction
By the tableau method of natural deduction:


$\bot \vdash \neg \top$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\bot$

Premise

(None)




2


2

$\top$

Assumption

(None)




3


1

$\neg \top$

Rule of Explosion: $\bot \EE$

1

Any statement we want


4


1

$\bot$

Proof by Contradiction: $\neg \II$

2 – 3

Assumption 2 has been discharged


5


1

$\neg \top$

Rule of Explosion: $\bot \EE$

4


$\Box$

By the tableau method of natural deduction:


$\neg \top \vdash \bot$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \top$

Premise

(None)




2




$p \lor \neg p$

Law of Excluded Middle

(None)

From the Law of Excluded Middle ...


3




$\top$

Law of Excluded Middle

(None)

... we deduce that truth ...


4


1

$\bot$

Principle of Non-Contradiction: $\neg \EE$

1, 3

... is contrary to the assumption of non-truth, which must therefore be false
$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values in the appropriate columns match.
$\begin{array}{|c||cc|} \hline
\top & \neg & \bot \\
\hline
\T & \T & \F \\
\hline
\end{array}$
$\blacksquare$


Proof by Boolean Interpretation
Let $p$ be a propositional formula.
Let $v$ be any arbitrary boolean interpretation of $p$.

Then $\map v p = F \iff \map v {\neg p} = T$ by the definition of the logical not.
Since $v$ is arbitrary, $p$ is false in all interpretations if and only if $\neg p$ is true in all interpretations.

Hence:

$\bot \dashv \vdash \neg \top$
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.

That is, the proposition:

If it's not true, it must be false
is valid only in the context where there are only two truth values.


Also see
Tautology is Negation of Contradiction


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.5$: The Classification of Propositions




