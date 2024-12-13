# 

Source: https://proofwiki.org/wiki/NAND_with_Equal_Arguments



Theorem
Let $\uparrow$ signify the NAND operation.

Then, for any proposition $p$:

$p \uparrow p \dashv \vdash \neg p$
That is, the NAND of a proposition with itself corresponds to the negation operation.


Proof 1
By the tableau method of natural deduction:


$p \uparrow p \vdash \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \uparrow p$

Premise

(None)




2


1

$\neg \paren {p \land p}$

Sequent Introduction

1

Definition of Logical NAND


3


1

$\neg p$

Sequent Introduction

2

Rule of Idempotence: Conjunction
$\Box$

By the tableau method of natural deduction:


$\neg p \vdash p \uparrow p$


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

$\neg \paren {p \land p}$

Sequent Introduction

1

Rule of Idempotence: Conjunction


3


1

$p \uparrow p$

Sequent Introduction

2

Definition of Logical NAND
$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables:

$\begin{array}{|ccc||cc|} \hline
p & \uparrow & p & \neg & p \\
\hline
\F & \T & \F & \T & \F \\
\T & \F & \T & \F & \T \\
\hline
\end{array}$

As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\blacksquare$


Also see
NOR with Equal Arguments


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(5)$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




