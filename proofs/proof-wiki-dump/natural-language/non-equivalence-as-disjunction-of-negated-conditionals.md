# 

Source: https://proofwiki.org/wiki/Non-Equivalence_as_Disjunction_of_Negated_Conditionals



Theorem
$\neg \paren {p \iff q} \dashv \vdash \neg \paren {p \implies q} \lor \neg \paren {q \implies p}$


Proof 1
By the tableau method of natural deduction:


$\neg \paren {p \iff q} \vdash \neg \paren {p \implies q} \lor \neg \paren {q \implies p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \iff q}$

Premise

(None)




2


1

$\neg \paren {\paren {p \implies q} \land \paren {q \implies p} }$

Sequent Introduction

1

Rule of Material Equivalence


3


1

$\neg \paren {p \implies q} \lor \neg \paren {q \implies p}$

Sequent Introduction

2

De Morgan's Laws: Disjunction of Negations
$\Box$

By the tableau method of natural deduction:


$\neg \paren {p \implies q} \lor \neg \paren {q \implies p} \vdash \neg \paren {p \iff q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \implies q} \lor \neg \paren {q \implies p}$

Premise

(None)




2


1

$\neg \paren {\paren {p \implies q} \land \paren {q \implies p} }$

Sequent Introduction

1

De Morgan's Laws: Disjunction of Negations


3


1

$\neg \paren {p \iff q}$

Sequent Introduction

2

Rule of Material Equivalence

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|cccc||ccccccccc|} \hline
\neg & (p & \iff & q) & \neg & (p & \implies & q) & \lor & \neg & (q & \implies & p) \\
\hline
\F & \F & \T & \F & \F & \F & \T & \F & \F & \F & \F & \T & \F \\
\T & \F & \F & \T & \F & \F & \T & \T & \T & \T & \T & \F & \F  \\
\T & \T & \F & \F & \T & \T & \F & \F & \T & \F & \F & \T & \T  \\
\F & \T & \T & \T & \F & \T & \T & \T & \F & \F & \T & \T & \T  \\
\hline
\end{array}$
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: broken linkIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




