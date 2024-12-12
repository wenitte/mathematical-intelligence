# 

Source: https://proofwiki.org/wiki/Exclusive_Or_with_Tautology



Theorem
An exclusive or with a tautology:

$p \oplus \top \dashv \vdash \neg p$


Proof by Natural Deduction
By the tableau method of natural deduction:


$p \oplus \top \vdash \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \oplus \top$

Premise

(None)




2


1

$\left({p \lor \top} \right) \land \neg \left({p \land \top}\right)$

Sequent Introduction

1

Definition of Exclusive Or


3


1

$\top \land \neg \left({p \land \top}\right)$

Sequent Introduction

1

Disjunction with Tautology


4


1

$\neg \left({p \land \top}\right)$

Sequent Introduction

1

Conjunction with Tautology


5


1

$\neg p$

Sequent Introduction

1

Conjunction with Tautology

$\Box$

By the tableau method of natural deduction:


$\neg p \vdash p \oplus \top$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p$

Assumption

(None)




2




$\top$

Rule of Top-Introduction: $\top \II$

(None)




3




$p \lor \top$

Sequent Introduction

2

Disjunction with Tautology


4


1

$\neg \left({p \land \top}\right)$

Sequent Introduction

1

Conjunction with Tautology


5


1

$\left({p \lor \top}\right) \land \neg \left({p \land \top}\right)$

Rule of Conjunction: $\land \II$

3, 4




6


1

$p \oplus \top$

Sequent Introduction

5

Definition of Exclusive Or

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, in each case, the truth values in the appropriate columns match for all boolean interpretations.
$\begin{array}{|c|ccc||cc|} \hline
p & p & \oplus & \top & \neg & p \\
\hline
F & F & T & T & T & F \\
T & T & F & T & F & T \\
\hline
\end{array}$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




