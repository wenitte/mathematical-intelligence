# 

Source: https://proofwiki.org/wiki/NOR_is_Commutative



Theorem
Let $\downarrow$ signify the NOR operation.

Then, for any two propositions $p$ and $q$:

$p \downarrow q \dashv \vdash q \downarrow p$
That is, NOR is commutative.


Proof 1
By the tableau method of natural deduction:


$p \downarrow q \vdash q \downarrow p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \downarrow q$

Premise

(None)




2


1

$\neg \paren {p \lor q}$

Sequent Introduction

1

Definition of Logical NOR


3


1

$\neg \paren {q \lor p}$

Sequent Introduction

2

Disjunction is Commutative


4


1

$q \uparrow p$

Sequent Introduction

3

Definition of Logical NOR
$\Box$

By the tableau method of natural deduction:


$q \downarrow p \vdash p \uparrow q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \downarrow p$

Premise

(None)




2


1

$\neg \paren {q \lor p}$

Sequent Introduction

1

Definition of Logical NOR


3


1

$\neg \paren {p \lor q}$

Sequent Introduction

2

Disjunction is Commutative


4


1

$p \downarrow q$

Sequent Introduction

3

Definition of Logical NOR
$\blacksquare$


Proof by Truth Table
Apply the Method of Truth Tables:

$\begin{array}{|ccc||ccc|} \hline
p & \downarrow & q & q & \downarrow & p \\
\hline
\F & \T & \F & \F & \T & \F \\
\F & \F & \T & \T & \F & \F \\
\T & \F & \F & \F & \F & \T \\
\T & \F & \T & \T & \F & \T \\
\hline
\end{array}$

As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\blacksquare$


Also see
NAND is Commutative


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




