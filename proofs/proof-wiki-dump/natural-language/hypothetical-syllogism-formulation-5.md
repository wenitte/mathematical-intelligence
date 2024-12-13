# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_5



Theorem
$\vdash \paren {q \implies r} \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$


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










From Hypothetical Syllogism: Formulation 3 we have:

$(1): \quad \vdash \paren {\paren {p \implies q} \land \paren {q \implies r} } \implies \paren {p \implies r}$

By the tableau method of natural deduction:


$\paren {q \implies r} \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\psi \land \phi$

Assumption

(None)




2


1

$\phi \land \psi$

Sequent Introduction

1

Conjunction is Commutative


3


1

$\chi$

Sequent Introduction

2

Hypothetical Syllogism: Formulation 3 (see $(1)$ above)


4




$\paren {\psi \land \phi} \implies \chi$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged


5




$\psi \implies \paren {\phi \implies \chi}$

Sequent Introduction

4

Rule of Exportation


Expanding the abbreviations leads us back to:

$\vdash \paren {q \implies r} \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$
$\blacksquare$


Proof 2
This proof is derived in the context of the following proof system: Instance 2 of the Hilbert-style systems.By the tableau method:


$\vdash \paren {q \implies r} \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {q \implies r} \implies \paren {\paren {p \lor q} \implies \paren {p \lor r} }$

Axiom $\text A 4$






2




$\paren {q \implies r} \implies \paren {\paren {\neg p \lor q} \implies \paren {\neg p \lor r} }$

Rule $\text {RST} 1$

1

$\neg p \, / \, p$


3




$\paren {q \implies r} \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$

Rule $\text {RST} 2 \, (2)$

2



$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 2$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 5$: Theorem $\text{T5}$
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Exercise $1 \ \text{(a)}$




