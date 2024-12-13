# 

Source: https://proofwiki.org/wiki/Rule_of_Simplification/Sequent_Form/Formulation_2/Proof_1



Theorem
$(1): \quad \vdash p \land q \implies p$
$(2): \quad \vdash p \land q \implies q$


Proof
Form 1
By the tableau method of natural deduction:


$\vdash p \land q \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land q$

Assumption

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1




3




$p \land q \implies p$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged
$\blacksquare$


Form 2
By the tableau method of natural deduction:


$\vdash p \land q \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land q$

Assumption

(None)




2


1

$q$

Rule of Simplification: $\land \EE_2$

1




3




$p \land q \implies q$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$





