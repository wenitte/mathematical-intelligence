# 

Source: https://proofwiki.org/wiki/Biconditional_Elimination/Sequent_Form/Proof_1



Theorem



\(\text {(1)}: \quad\)









\(\ds p \iff q\)

\(\vdash\)







\(\ds p \implies q\)










\(\text {(2)}: \quad\)









\(\ds p \iff q\)

\(\vdash\)







\(\ds q \implies p\)











Proof
Form 1
By the tableau method of natural deduction:


$p \iff q \vdash p \implies q$


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



$\blacksquare$


Form 2
By the tableau method of natural deduction:


$p \iff q \vdash q \implies p$


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

$q \implies p$

Biconditional Elimination: $\iff \EE_2$

1



$\blacksquare$





