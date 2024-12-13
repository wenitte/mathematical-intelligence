# 

Source: https://proofwiki.org/wiki/Rule_of_Association/Disjunction/Formulation_2/Proof_2

Theorem
$\vdash \paren {p \lor \paren {q \lor r} } \iff \paren {\paren {p \lor q} \lor r}$


Proof
This proof is derived in the context of the following proof system: Instance 2 of the Hilbert-style systems.By the tableau method:


$\vdash \paren {p \lor \paren {q \lor r} } \iff \paren {\paren {p \lor q} \lor r}$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {p \lor \paren {q \lor r} } \implies \paren {\paren {p \lor q} \lor r}$

Rule of Association: Forward Implication






2




$\paren {\paren {p \lor q} \lor r} \implies \paren {p \lor \paren {q \lor r} }$

Rule of Association: Reverse Implication






3




$\paren {\paren {p \lor \paren {q \lor r} } \implies \paren {\paren {p \lor q} \lor r} } \land \paren {\paren {\paren {p \lor q} \lor r} \implies \paren {p \lor \paren {q \lor r} } }$

Rule $\text {RST} 4$

1, 2




4




$\paren {p \lor \paren {q \lor r} } \iff \paren {\paren {p \lor q} \lor r}$

Rule $\text {RST} 2 (3)$

3



$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 13$




