# 

Source: https://proofwiki.org/wiki/Conjunction_with_Law_of_Excluded_Middle

Theorem
$\vdash p \iff \paren {p \land q} \lor \paren {p \land \neg q}$


Proof
By the tableau method of natural deduction:


$\vdash p \iff \paren {p \land q} \lor \paren {p \land \neg q} $


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




$q \lor \neg q$

Law of Excluded Middle

(None)




3


3

$q$

Assumption

(None)




4


1, 3

$p \land q$

Rule of Conjunction: $\land \II$

1, 2




5


1, 3

$\paren {p \land q} \lor \paren {p \land \neg q}$

Rule of Addition: $\lor \II_1$

4




6


6

$\neg q$

Assumption

(None)




7


1, 6

$p \land \neg q$

Rule of Conjunction: $\land \II$

1, 6




8


1, 6

$\paren {p \land q} \lor \paren {p \land \neg q}$

Rule of Addition: $\lor \II_2$

7




9


1

$\paren {p \land q} \lor \paren {p \land \neg q}$

Proof by Cases: $\text{PBC}$

2, 3 – 5, 6 – 8

Assumptions 3 and 6 have been discharged


10




$p \implies \paren {p \land q} \lor \paren {p \land \neg q}$

Rule of Implication: $\implies \II$

1 – 9

Assumption 1 has been discharged


11


11

$\paren {p \land q} \lor \paren {p \land \neg q}$

Assumption

(None)




12


11

$p \land \paren {q \lor \neg q}$

Sequent Introduction

11

Conjunction Distributes over Disjunction


13


11

$p$

Rule of Simplification: $\land \EE_2$

11




14




$\paren {p \land q} \lor \paren {p \land \neg q} \implies p$

Rule of Implication: $\implies \II$

11 – 13

Assumption 11 has been discharged


15




$p \iff \paren {p \land q} \lor \paren {p \land \neg q}$

Biconditional Introduction: $\iff \II$

12, 14



$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T68}$




