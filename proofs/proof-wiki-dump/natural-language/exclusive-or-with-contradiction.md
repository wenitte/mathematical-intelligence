# 

Source: https://proofwiki.org/wiki/Exclusive_Or_with_Contradiction



Theorem
An exclusive or with a contradiction:

$p \oplus \bot \dashv \vdash p$


Proof by Natural Deduction
By the tableau method of natural deduction:


$p \oplus \bot \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \oplus \bot$

Premise

(None)




2


1

$\left({p \lor \bot} \right) \land \neg \left({p \land \bot}\right)$

Sequent Introduction

1

Definition of Exclusive Or


3


1

$p \land \neg \left({p \land \bot}\right)$

Sequent Introduction

2

Disjunction with Contradiction


4


1

$p \land \neg \bot$

Sequent Introduction

3

Conjunction with Contradiction


5


1

$p \land \top$

Sequent Introduction

4

Tautology is Negation of Contradiction


6


1

$p$

Sequent Introduction

5

Conjunction with Tautology

$\Box$

By the tableau method of natural deduction:


$p \vdash p \oplus \bot$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Premise

(None)




2


1

$p \land \top$

Sequent Introduction

1

Conjunction with Tautology


3


1

$\left({p \lor \bot}\right) \land \top$

Sequent Introduction

2

Disjunction with Contradiction


4


1

$\left({p \lor \bot}\right) \land \neg \bot$

Sequent Introduction

3

Tautology is Negation of Contradiction


5


1

$\left({p \lor \bot}\right) \land \neg \left({p \land \bot}\right)$

Sequent Introduction

4

Conjunction with Contradiction


6


1

$p \oplus \bot$

Sequent Introduction

5

Definition of Exclusive Or

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, in each case, the truth values in the appropriate columns match for all boolean interpretations.
$\begin{array}{|c|ccc||c|ccc|} \hline
p & p & \oplus & \bot & p \\
\hline
F & F & F & F & F \\
T & T & T & F & T \\
\hline
\end{array}$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




