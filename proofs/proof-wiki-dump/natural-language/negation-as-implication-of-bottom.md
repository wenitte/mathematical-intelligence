# 

Source: https://proofwiki.org/wiki/Negation_as_Implication_of_Bottom


It has been suggested that this page or section be merged into Proof by Contradiction.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
$p \implies \bot \dashv\vdash \neg p$


Proof
By the tableau method of natural deduction:


$p \implies \bot \vdash \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \bot$

Premise

(None)




2


2

$p$

Assumption

(None)




3


1,2

$\bot$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2




4


1

$\neg p$

Proof by Contradiction: $\neg \II$

2 – 3

Assumption 2 has been discharged

$\Box$
By the tableau method of natural deduction:


$\neg p \vdash p \implies \bot$


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


2

$p$

Assumption

(None)




3


1,2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

1, 2




4


1

$p \implies \bot$

Rule of Implication: $\implies \II$

2 – 3

Assumption 2 has been discharged

$\blacksquare$





