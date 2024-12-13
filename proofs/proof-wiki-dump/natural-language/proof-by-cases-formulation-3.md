# 

Source: https://proofwiki.org/wiki/Proof_by_Cases/Formulation_3

Theorem
$\vdash \paren {\paren {p \lor q} \land \paren {p \implies r} \land \paren {q \implies r} } \implies r$


Proof
By the tableau method of natural deduction:


$\paren {\paren {p \lor q} \land \paren {p \implies r} \land \paren {q \implies r} } \implies r$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {\paren {p \lor r} \land \paren {p \implies q} \land \paren {r \implies s} } \implies \paren {q \lor s}$

Theorem Introduction

(None)

Constructive Dilemma: Formulation 3


2




$\paren {\paren {p \lor q} \land \paren {p \implies r} \land \paren {q \implies r} } \implies \paren {r \lor r}$

Substitution

1

$r \ / \ q$, $q \ / \ r$, $s \ / \ r$


3


3

$\paren {p \lor q} \land \paren {p \implies r} \land \paren {q \implies r}$

Assumption

(None)




4


3

$r \lor r$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3




5


3

$r$

Sequent Introduction

4

Rule of Idempotence: Disjunction


6




$\paren {\paren {p \lor q} \land \paren {p \implies r} \land \paren {q \implies r} } \implies r$

Rule of Implication: $\implies \II$

3 – 5

Assumption 3 has been discharged

$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T49}$




