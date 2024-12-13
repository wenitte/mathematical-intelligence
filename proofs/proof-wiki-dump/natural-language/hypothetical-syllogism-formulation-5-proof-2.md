# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_5/Proof_2

Theorem
$\vdash \paren {q \implies r} \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$


Proof
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
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.3$: Derivable Formulae: Example $2$




