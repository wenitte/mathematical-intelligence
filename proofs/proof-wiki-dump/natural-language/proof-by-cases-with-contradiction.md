# 

Source: https://proofwiki.org/wiki/Proof_by_Cases_with_Contradiction

Theorem
$\vdash p \iff \left({p \lor q}\right) \land \left({p \lor \neg q}\right)$


Proof
By the tableau method of natural deduction:


$\vdash p \iff \left({p \lor q}\right) \land \left({p \lor \neg q}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Assumption

(None)




2


1

$p \lor q$

Rule of Addition: $\lor \II_1$

1




3


1

$p \lor \neg q$

Rule of Addition: $\lor \II_2$

1




4


1

$\left({p \lor q}\right) \land \left({p \lor \neg q}\right)$

Rule of Conjunction: $\land \II$

2, 3




5




$p \implies \left({p \lor q}\right) \land \left({p \lor \neg q}\right)$

Rule of Implication: $\implies \II$

1 – 4

Assumption 1 has been discharged


6


6

$\left({p \lor q}\right) \land \left({p \lor \neg q}\right)$

Assumption

(None)




7


6

$p \lor \left({q \land \neg q}\right)$

Sequent Introduction

6

Disjunction Distributes over Conjunction


8


8

$p$

Assumption

(None)




9




$\neg \left({q \land \neg q}\right)$

Theorem Introduction

(None)

Principle of Non-Contradiction: Formulation 2


10


6

$p$

Modus Tollendo Ponens $\mathrm {MTP}_2$

7, 9




11


6

$p$

Proof by Cases: $\text{PBC}$

6, 8 – 8, 9 – 10

Assumptions 8 and 9 have been discharged


12




$\left({p \lor q}\right) \land \left({p \lor \neg q}\right) \implies p$

Rule of Implication: $\implies \II$

6 – 11

Assumption 6 has been discharged


13




$p \iff \left({p \lor q}\right) \land \left({p \lor \neg q}\right)$

Biconditional Introduction: $\iff \II$

5, 12



$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T69}$




