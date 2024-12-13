# 

Source: https://proofwiki.org/wiki/NAND_is_Commutative



Theorem
Let $\uparrow$ signify the NAND operation.

Then, for any two propositions $p$ and $q$:

$p \uparrow q \dashv \vdash q \uparrow p$
That is, NAND is commutative.


Proof 1
By the tableau method of natural deduction:


$p \uparrow q \vdash q \uparrow p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \uparrow q$

Premise

(None)




2


1

$\neg \paren {p \land q}$

Sequent Introduction

1

Definition of Logical NAND


3


1

$\neg \paren {q \land p}$

Sequent Introduction

2

Conjunction is Commutative


4


1

$q \uparrow p$

Sequent Introduction

3

Definition of Logical NAND
$\Box$

By the tableau method of natural deduction:


$q \uparrow p \vdash p \uparrow q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \uparrow p$

Premise

(None)




2


1

$\neg \paren {q \land p}$

Sequent Introduction

1

Definition of Logical NAND


3


1

$\neg \paren {p \land q}$

Sequent Introduction

2

Conjunction is Commutative


4


1

$p \uparrow q$

Sequent Introduction

3

Definition of Logical NAND
$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables:

$\begin{array}{|ccc||ccc|} \hline
p & \uparrow & q & q & \uparrow & p \\
\hline
\F & \T & \F & \F & \T & \F \\
\F & \T & \T & \T & \T & \F \\
\T & \T & \F & \F & \T & \T \\
\T & \F & \T & \T & \F & \T \\
\hline
\end{array}$

As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\blacksquare$


Also see
NOR is Commutative


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




