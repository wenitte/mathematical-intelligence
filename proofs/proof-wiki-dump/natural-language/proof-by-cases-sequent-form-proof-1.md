# 

Source: https://proofwiki.org/wiki/Proof_by_Cases/Sequent_Form/Proof_1

Theorem
Proof by Cases can be symbolised by the sequent:

$p \lor q, \paren {p \vdash r}, \paren {q \vdash r} \vdash r$


Proof
By the tableau method of natural deduction:


$p \lor q, \paren {p \vdash r}, \paren {q \vdash r} \vdash r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor q$

Premise

(None)




2


2

$p$

Assumption

(None)




3


2

$r$

By hypothesis

2

as $p \vdash r$


4


4

$q$

Assumption

(None)




5


4

$r$

By hypothesis

4

as $q \vdash r$


6


1

$r$

Proof by Cases: $\text{PBC}$

1 ,  2  –  3 ,  4  –  5

Assumptions  2  and  4 have been discharged

$\blacksquare$





