# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_4



Theorem
$\vdash \paren {p \implies q} \implies \paren {\paren {q \implies r} \implies \paren {p \implies r} }$


Proof 1
Let us use the following abbreviations














\(\ds \phi\)

\(\text{ for }\)







\(\ds p \implies q\)




















\(\ds \psi\)

\(\text{ for }\)







\(\ds q \implies r\)




















\(\ds \chi\)

\(\text{ for }\)







\(\ds p \implies r\)










By the tableau method of natural deduction:


$\paren {p \implies q} \implies \paren {\paren {q \implies r} \implies \paren {p \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {\phi \land \psi} \implies \chi$

Theorem Introduction

(None)

Hypothetical Syllogism: Formulation 3


2




$\phi \implies \paren {\psi \implies \chi}$

Sequent Introduction

1

Rule of Exportation

Expanding the abbreviations leads us back to:

$\vdash \paren {p \implies q} \implies \paren {\paren {q \implies r} \implies \paren {p \implies r} }$
$\blacksquare$


Proof 2
This proof is derived in the context of the following proof system: instance 1 of a Hilbert proof system.By the tableau method:


$\vdash \paren {p \implies q} \implies \paren {\paren {q \implies r} \implies \paren {p \implies r} }$


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


2

$p \implies q$

Assumption

(None)




3


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2




4


4

$q \implies r$

Assumption

(None)




5


1, 2, 4

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

3, 4




6


2, 4

$p \implies r$

Deduction Rule

5




7


2

$\paren {q \implies r} \implies \paren {p \implies r}$

Deduction Rule

6




8




$\paren {p \implies q} \implies \paren {\paren {q \implies r} \implies \paren {p \implies r} }$

Deduction Rule

7


$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 5$: Theorem $\text{T4}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(2) \ \text{(iii)}$




