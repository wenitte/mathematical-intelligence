# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Tollens/Variant/Formulation_2

Theorem
$\vdash \paren {\neg \paren {p \land q} } \iff \paren {p \implies \neg q}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\neg \paren {p \land q} } \iff \paren {p \implies \neg q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \land q}$

Assumption

(None)




2


1

$p \implies \neg q$

Sequent Introduction

1

Modus Ponendo Tollens: Formulation 1: Forward Implication


3




$\paren {\neg \paren {p \land q} } \implies \paren {p \implies \neg q}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$p \implies \neg q$

Assumption

(None)




5


4

$\neg \paren {p \land q}$

Sequent Introduction

4

Modus Ponendo Tollens: Formulation 1: Reverse Implication


6




$\paren {p \implies \neg q} \implies \paren {\neg \paren {p \land q} }$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {\neg \paren {p \land q} } \iff \paren {p \implies \neg q}$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T39}$




