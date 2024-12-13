# 

Source: https://proofwiki.org/wiki/Principle_of_Non-Contradiction/Sequent_Form/Formulation_2/Proof_1

Theorem
$\vdash \neg \paren {p \land \neg p}$


Proof
By the tableau method of natural deduction:


$\vdash \neg \left({p \land \neg p}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \neg p$

Assumption

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1




3


1

$\neg p$

Rule of Simplification: $\land \EE_2$

1




4


1

$\bot$

Principle of Non-Contradiction: $\neg \EE$

2, 3




5




$\neg \left({p \land \neg p}\right)$

Proof by Contradiction: $\neg \II$

1 – 4

Assumption 1 has been discharged

$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T36}$




