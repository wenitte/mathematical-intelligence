# 

Source: https://proofwiki.org/wiki/Rule_of_Conjunction/Sequent_Form/Formulation_2

Theorem
The Rule of Conjunction can be symbolised by the sequent:

$\vdash p \implies \paren {q \implies \paren {p \land q} }$


Proof
This proof is derived in the context of the following proof system: Instance 2 of the Hilbert-style systems.By the tableau method:


$\vdash p \implies \paren {q \implies \paren {p \land q} }$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\neg p \lor p$

Law of Excluded Middle






2




$\paren {\neg p \lor p} \implies \paren {p \lor \neg p}$

Axiom $\text A 3$



$\neg p \,/\, p, p \,/\, q$


3




$p \lor \neg p$

Rule $\text {RST} 3$

1, 2




4




$\paren {\neg p \lor \neg q} \lor \neg \paren {\neg p \lor \neg q}$

Rule $\text {RST} 1$

3

$\paren {\neg p \lor \neg q} \,/\, p$


5




$\paren {\neg p \lor \neg q} \lor \paren {p \land q}$

Rule $\text {RST} 2 (1)$






6




$\paren {\paren {\neg p \lor \neg q} \lor \paren {p \land q} } \implies \paren {\neg p \lor \paren {\neg q \lor \paren {p \land q} } }$

Rule of Association



$\neg p \,/\, p, \neg q \,/\, q, \paren {p \land q} \,/\, r$


7




$\neg p \lor \paren {\neg q \lor \paren {p \land q} }$

Rule $\text {RST} 3$

5, 6




8




$p \implies \paren {q \implies \paren {p \land q} }$

Rule $\text {RST} 2 (2)$

7



$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 11, 12$




