# 

Source: https://proofwiki.org/wiki/Law_of_Excluded_Middle/Sequent_Form/Proof_2

Theorem
The Law of Excluded Middle can be symbolised by the sequent:

$\vdash p \lor \neg p$


Proof
This proof is derived in the context of the following proof system: Instance 2 of the Hilbert-style systems.By the tableau method:


$\vdash p \lor \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {q \implies r} \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$

Theorem Introduction

(None)

Hypothetical Syllogism


2




$\paren {\paren {p \lor p} \implies p} \implies \paren {\paren {p \implies \paren {p \lor p} } \implies \paren {p \implies p} }$

Rule $\text {RST} 1$

1

$p \lor p \, / \, q$, $p \, / \, r$


3




$\paren {p \lor p} \implies p$

Axiom $\text A 1$






4




$\paren {p \implies \paren {p \lor p} } \implies \paren {p \implies p}$

Rule $\text {RST} 3$

2, 3




5




$p \implies \paren {p \lor p}$

Axiom $\text A 2$, Rule $\text {RST} 1$



$p \, / \, q$


6




$p \implies p$

Rule $\text {RST} 3$

4, 5




7




$\neg p \lor p$

Rule $\text {RST} 2 \, (2)$

6




8




$\paren {p \lor q} \implies \paren {q \lor p}$

Axiom $\text A 3$






9




$\paren {\neg p \lor p} \implies \paren {p \lor \neg p}$

Rule $\text {RST} 1$

8

$p \, / \, q$, $\neg p \, / \, p$


10




$p \lor \neg p$

Rule $\text {RST} 3$

7, 9



$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.3$: Derivable Formulae: Example $3$




