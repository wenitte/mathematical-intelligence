# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Implication/Formulation_2/Reverse_Implication

Theorem
$\vdash \paren {\neg p \lor q} \implies \paren {p \implies q}$


Proof
By the tableau method of natural deduction:


$\paren {\neg p \lor q} \implies \paren {p \implies q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \lor q$

Assumption

(None)




2


1

$p \implies q$

Sequent Introduction

1

Rule of Material Implication: Formulation 1


3




$\paren {\neg p \lor q} \implies \paren {p \implies q}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.5: \ 2 \ \text{(i)}$




