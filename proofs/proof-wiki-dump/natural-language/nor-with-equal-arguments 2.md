# 

Source: https://proofwiki.org/wiki/NOR_with_Equal_Arguments



Theorem
Let $\downarrow$ signify the NOR operation.

Then for any proposition $p$:

$p \downarrow p \dashv \vdash \neg p$
That is, the NOR of a proposition with itself corresponds to the negation operator.


Proof 1
By the tableau method of natural deduction:


$p \downarrow p \vdash \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \downarrow p$

Premise

(None)




2


1

$\neg \paren {p \lor p}$

Sequent Introduction

1

Definition of Logical NOR


3


1

$\neg p$

Sequent Introduction

2

Rule of Idempotence: Disjunction
$\Box$

By the tableau method of natural deduction:


$\neg p \vdash p \downarrow p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p$

Premise

(None)




2


1

$\neg \paren {p \lor p}$

Sequent Introduction

1

Rule of Idempotence: Disjunction


3


1

$p \downarrow p$

Sequent Introduction

2

Definition of Logical NOR

$\blacksquare$


Proof by Truth Table
Apply the Method of Truth Tables:

$\begin {array} {|ccc||cc|} \hline
p & \downarrow & p & \neg & p \\
\hline
\F & \T & \F & \T & \F \\
\T & \F & \T & \F & \T \\
\hline
\end{array}$

As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\blacksquare$


Also see
NAND with Equal Arguments


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




