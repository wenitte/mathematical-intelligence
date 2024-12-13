# 

Source: https://proofwiki.org/wiki/Non-Equivalence_as_Conjunction_of_Disjunction_with_Disjunction_of_Negations

Theorem
$\neg \paren {p \iff q} \dashv \vdash \paren {p \lor q} \land \paren {\neg p \lor \neg q}$


Proof 1
By the tableau method of natural deduction:


$\neg \paren {p \iff q} \vdash \paren {p \lor q} \land \paren {\neg p \lor \neg q} $


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

$\paren {p \lor q} \land \neg \paren {p \land q}$

Sequent Introduction

1

Non-Equivalence as Conjunction of Disjunction with Negation of Conjunction


3


1

$\paren {p \lor q} \land \paren {\neg p \lor \neg q}$

Sequent Introduction

2

De Morgan's Laws: Disjunction of Negations


By the tableau method of natural deduction:


$\paren {p \lor q} \land \paren {\neg p \lor \neg q} \vdash \neg \paren {p \iff q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \lor q} \land \paren {\neg p \lor \neg q}$

Premise

(None)




2


1

$\paren {p \lor q} \land \neg \paren {p \land q}$

Sequent Introduction

1

De Morgan's Laws: Disjunction of Negations


3


1

$\neg \paren {p \iff q}$

Sequent Introduction

2

Non-Equivalence as Conjunction of Disjunction with Negation of Conjunction
$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|cccc||ccccccccc|} \hline
\neg & (p & \iff & q) & (p & \lor & q) & \land & (\neg & p & \lor & \neg & q) \\
\hline
\F & \F & \T & \F & \F & \F & \F & \F & \T & \F & \T & \T & \F \\
\T & \F & \F & \T & \F & \T & \T & \T & \T & \F & \T & \F & \T \\
\T & \T & \F & \F & \T & \T & \F & \T & \F & \T & \T & \T & \F \\
\F & \T & \T & \T & \T & \T & \T & \F & \F & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$





