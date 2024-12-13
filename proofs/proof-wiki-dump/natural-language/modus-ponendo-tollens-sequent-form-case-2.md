# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Tollens/Sequent_Form/Case_2

Theorem
$\neg \left({p \land q}\right), q \vdash \neg p$


Proof
By the tableau method of natural deduction:


$\neg \left({p \land q}\right), q \vdash \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \left({p \land q}\right)$

Premise

(None)




2


2

$q$

Premise

(None)




3


3

$p$

Assumption

(None)




4


2, 3

$p \land q$

Rule of Conjunction: $\land \II$

3, 2




5


1, 2, 3

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 1




6


1, 2

$\neg p$

Proof by Contradiction: $\neg \II$

3 – 5

Assumption 3 has been discharged

$\blacksquare$





