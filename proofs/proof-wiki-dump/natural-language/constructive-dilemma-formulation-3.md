# 

Source: https://proofwiki.org/wiki/Constructive_Dilemma/Formulation_3

Theorem
$\vdash \paren {\paren {p \lor r} \land \paren {p \implies q} \land \paren {r \implies s} } \implies \paren {q \lor s}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \lor r} \land \paren {p \implies q} \land \paren {r \implies s} } \implies \paren {q \lor s} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {\paren {p \lor r} \land \paren {p \implies q} \land \paren {r \implies s} }$

Assumption

(None)




2


1

$\paren {p \implies q} \land \paren {r \implies s}$

Rule of Simplification: $\land \EE_2$

1

Cutting corners: should use Associativity first


3


1

$\paren {p \lor r} \implies \paren {q \lor s}$

Sequent Introduction

2

Constructive Dilemma: Formulation 1


4


1

$p \lor r$

Rule of Simplification: $\land \EE_1$

1




5


1

$q \lor s$

Modus Ponendo Ponens: $\implies \mathcal E$

3, 4




6




$\paren {\paren {p \lor r} \land \paren {p \implies q} \land \paren {r \implies s} } \implies \paren {q \lor s}$

Rule of Implication: $\implies \II$

1 – 5

Assumption 1 has been discharged

$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T48}$




