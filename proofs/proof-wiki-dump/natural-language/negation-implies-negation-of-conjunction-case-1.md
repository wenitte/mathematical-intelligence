# 

Source: https://proofwiki.org/wiki/Negation_implies_Negation_of_Conjunction/Case_1

Theorem
$\neg p \implies \neg \paren {p \land q}$


Proof
By the tableau method of natural deduction:


$\neg p \implies \neg \paren {p \land q} $


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


2

$p \land q$

Assumption

(None)




3


2

$p$

Rule of Simplification: $\land \EE_1$

2




4


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 1




5


1

$\neg \paren {p \land q}$

Proof by Contradiction: $\neg \II$

2 – 4

Assumption 2 has been discharged


6




$\neg p \implies \neg \paren {p \land q}$

Rule of Implication: $\implies \II$

1 – 5

Assumption 1 has been discharged

$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T43}$




