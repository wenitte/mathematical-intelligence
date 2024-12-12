# 

Source: https://proofwiki.org/wiki/Biconditional_is_Commutative/Formulation_1



Theorems
The biconditional operator is commutative:

$p \iff q \dashv \vdash q \iff p$


Proof 1
By the tableau method of natural deduction:


$p \iff q \vdash q \iff p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Premise

(None)




2


1

$p \implies q$

Biconditional Elimination: $\iff \EE_1$

1




3


1

$q \implies p$

Biconditional Elimination: $\iff \EE_2$

1




4


1

$q \iff p$

Biconditional Introduction: $\iff \II$

3, 2



$\Box$

By the tableau method of natural deduction:


$q \iff p \vdash p \iff q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \iff p$

Premise

(None)




2


1

$q \implies p$

Biconditional Elimination: $\iff \EE_1$

1




3


1

$p \implies q$

Biconditional Elimination: $\iff \EE_2$

1




4


1

$p \iff q$

Biconditional Introduction: $\iff \II$

3, 2



$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$p \iff q \vdash q \iff p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Premise

(None)




2


1

$\paren {p \implies q} \land \paren {q \implies p}$

Sequent Introduction

1

Rule of Material Equivalence


3


1

$\paren {q \implies p} \land \paren {p \implies q}$

Sequent Introduction

2

Conjunction is Commutative


4


1

$q \iff p$

Sequent Introduction

3

Rule of Material Equivalence
$\Box$

By the tableau method of natural deduction:


$q \iff p \vdash p \iff q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \iff p$

Premise

(None)




2


1

$\paren {q \implies p} \land \paren {p \implies q}$

Sequent Introduction

1

Rule of Material Equivalence


3


1

$\paren {p \implies q} \land \paren {q \implies p}$

Sequent Introduction

2

Conjunction is Commutative


4


1

$p \iff q$

Sequent Introduction

3

Rule of Material Equivalence
$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccc||ccc|} \hline
p & \iff & q & q & \iff & p \\
\hline
\F & \T & \F & \F & \T & \F \\
\F & \F & \T & \T & \F & \F \\
\T & \F & \F & \F & \F & \T \\
\T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




