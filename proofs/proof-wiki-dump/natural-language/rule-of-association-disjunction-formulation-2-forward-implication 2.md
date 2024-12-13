# 

Source: https://proofwiki.org/wiki/Rule_of_Association/Disjunction/Formulation_2/Forward_Implication

Theorem
$\vdash \paren {p \lor \paren {q \lor r} } \implies \paren {\paren {p \lor q} \lor r}$


Proof
This proof is derived in the context of the following proof system: Instance 2 of the Hilbert-style systems.By the tableau method:


$\vdash \paren {p \lor \paren {q \lor r} } \implies \paren {\paren {p \lor q} \lor r}$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {\paren {p \lor q} \lor r} \implies \paren {p \lor \paren {q \lor r} }$

Rule of Association: Reverse Implication






2




$\paren {q \lor r} \implies \paren {r \lor q}$

Axiom $\text A 3$



$q \,/\, p, r \,/\, q$


3




$\paren {\paren {q \lor r} \implies \paren {r \lor q} } \implies \paren {\paren {p \lor \paren {q \lor r} } \implies \paren {p \lor \paren {r \lor q} } }$

Axiom $\text A 4$



$\paren {q \lor r} \,/\, q, \paren {r \lor q} \,/\, r$


4




$\paren {p \lor \paren {q \lor r} } \implies \paren {p \lor \paren {r \lor q} }$

Rule $\text {RST} 3$

2, 3




5




$\paren {\paren {p \lor q} \lor r} \implies \paren {p \lor \paren {r \lor q} }$

Hypothetical Syllogism

1, 4




6




$\paren {p \lor \paren {r \lor q} } \implies \paren {\paren {r \lor q} \lor p}$

Axiom $\text A 3$



$\paren {r \lor q} \,/\, q$


7




$\paren {\paren {p \lor q} \lor r} \implies \paren {\paren {r \lor q} \lor p}$

Hypothetical Syllogism

5, 6




8




$\paren {r \lor \paren {p \lor q} } \implies \paren {\paren {p \lor q} \lor r}$

Axiom $\text A 3$



$r \,/\, p, \paren {p \lor q} \,/\, q$


9




$\paren {r \lor \paren {p \lor q} } \implies \paren {\paren {r \lor q} \lor p}$

Hypothetical Syllogism

7, 8




10




$\paren {q \lor p} \implies \paren {p \lor q}$

Axiom $\text A 3$



$p / q, q / p$


11




$\paren {\paren {q \lor p} \implies \paren {p \lor q} } \implies \paren {\paren {r \lor \paren {q \lor p} } \implies \paren {r \lor \paren {p \lor q} } }$

Axiom $\text A 4$



$r \,/\, p, \paren {q \lor p} \,/\, q, \paren {p \lor q} \,/\, r$


12




$\paren {r \lor \paren {q \lor p} } \implies \paren {r \lor \paren {p \lor q} }$

Rule $\text {RST} 3$

10, 11




13




$\paren {r \lor \paren {q \lor p} } \implies \paren {\paren {r \lor q} \lor p}$

Hypothetical Syllogism

9, 12




14




$\paren {p \lor \paren {q \lor r} } \implies \paren {\paren {p \lor q} \lor r}$

Rule $\text {RST} 1$

13

$r / p, p / r$

$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 10$




