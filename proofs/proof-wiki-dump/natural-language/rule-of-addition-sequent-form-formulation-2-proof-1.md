# 

Source: https://proofwiki.org/wiki/Rule_of_Addition/Sequent_Form/Formulation_2/Proof_1



Theorem



\(\text {(1)}: \quad\)









\(\ds \vdash p\)

\(\implies\)







\(\ds \paren {p \lor q}\)










\(\text {(2)}: \quad\)









\(\ds \vdash q\)

\(\implies\)







\(\ds \paren {p \lor q}\)











Proof
Form 1
By the tableau method of natural deduction:


$p \implies \paren {p \lor q} $


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

$p \lor q$

Rule of Addition: $\lor \II_1$

1




3




$p \implies \paren {p \lor q}$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged

$\blacksquare$


Form 2
By the tableau method of natural deduction:


$q \implies \paren {p \lor q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q$

Premise

(None)




2


1

$p \lor q$

Rule of Addition: $\lor \II_2$

1




3




$q \implies \paren {p \lor q}$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged

$\blacksquare$





