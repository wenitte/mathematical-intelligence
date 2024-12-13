# 

Source: https://proofwiki.org/wiki/Proof_by_Contradiction/Variant_3/Formulation_2



Theorem
$\vdash \paren {p \implies \neg p} \implies \neg p$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {p \implies \neg p} \implies \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \neg p$

Assumption

(None)




2


1

$\neg p$

Sequent Introduction

1

Proof by Contradiction: Variant 3: Formulation 1


3




$\paren {p \implies \neg p} \implies \neg p$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged
$\blacksquare$


Proof 2
This proof is derived in the context of the following proof system: Instance 2 of the Hilbert-style systems.By the tableau method:


$\vdash \paren {p \implies \neg p} \implies \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {p \lor p} \implies p$

Axiom $\text A 1$






2




$\paren {\neg p \lor \neg p} \implies \neg p$

Rule $\text {RST} 1$

1

$\neg p \, / \, p$


3




$\paren {p \implies \neg p} \implies \neg p$

Rule $\text {RST} 2 \, (2)$

2


$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $\text D 1$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 5$: Theorem $\text T20$




