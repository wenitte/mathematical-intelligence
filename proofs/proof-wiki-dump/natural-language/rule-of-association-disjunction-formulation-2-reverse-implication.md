# 

Source: https://proofwiki.org/wiki/Rule_of_Association/Disjunction/Formulation_2/Reverse_Implication

Theorem
$\vdash \paren {p \lor \paren {q \lor r} } \impliedby \paren {\paren {p \lor q} \lor r}$


Proof
By definition of $\impliedby$, we prove:

$\vdash \paren {\paren {p \lor q} \lor r} \implies \paren {p \lor \paren {q \lor r} }$
This proof is derived in the context of the following proof system: Instance 2 of the Hilbert-style systems.By the tableau method:


$\vdash \paren {\paren {p \lor q} \lor r} \implies \paren {p \lor \paren {q \lor r} }$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$r \implies \paren {q \lor r}$

Axiom $\text A 2$



$r / q, q / p$


2




$\paren {r \implies \paren {q \lor r} } \implies \paren {\paren {\paren {p \lor q} \lor r} \implies \paren {\paren {p \lor q} \lor \paren {q \lor r} } }$

Axiom $\text A 4$



$r / q, \paren {p \lor q} \,/\, p, \paren {q \lor r} \,/\, r$


3




$\paren {\paren {p \lor q} \lor r} \implies \paren {\paren {p \lor q} \lor \paren {q \lor r} }$

Rule $\text {RST} 3$

1, 2




4




$q \implies \paren {r \lor q}$

Axiom $\text A 2$



$r / p$


5




$\paren {q \implies \paren {r \lor q} } \implies \paren {\paren {p \lor q} \implies \paren {p \lor \paren {r \lor q} } }$

Axiom $\text A 4$



$\paren {r \lor q} \,/\, r$


6




$\paren {p \lor q} \implies \paren {p \lor \paren {r \lor q} }$

Rule $\text {RST} 3$

4, 5




7




$\paren {p \lor \paren {r \lor q} } \implies \paren {\paren {r \lor q} \lor p}$

Axiom $\text A 3$



$\paren {r \lor q} \,/\, q$


8




$\paren {p \lor q} \implies \paren {\paren {r \lor q} \lor p}$

Hypothetical Syllogism

6, 7




9




$q \implies \paren {q \lor p}$

Rule of Addition



$p \,/\, q, q \,/\, p$


10




$q \implies \paren {q \lor s}$

Rule of Addition



$s \,/\, q, q \,/\, p$


11




$\paren {q \implies \paren {q \lor s} } \implies \paren {\paren {p \lor q} \implies \paren {p \lor \paren {q \lor s} } }$

Axiom $\text A 4$



$\paren {q \lor s} \,/\, r$


12




$\paren {p \lor q} \implies \paren {p \lor \paren {q \lor s} }$

Rule $\text {RST} 3$

10, 11




13




$\paren {\paren {p \lor q} \implies \paren {p \lor \paren {q \lor s} } } \implies \paren {\paren {r \lor \paren {p \lor q} } \implies \paren {r \lor \paren {p \lor \paren {q \lor s} } } }$

Axiom $\text A 4$



$r \,/\, p, \paren {p \lor q} \,/\, q, \paren {p \lor \paren {q \lor s} } \,/\, r$


14




$\paren {r \lor \paren {p \lor q} } \implies \paren {r \lor \paren {p \lor \paren {q \lor s} } }$

Rule $\text {RST} 3$

12, 13




15




$\paren {\paren {p \lor q} \lor \paren {q \lor r} } \implies \paren {\paren {p \lor \paren {q \lor r} } \lor \paren {p \lor q} }$

Rule $\text {RST} 1$

8

$\paren {p \lor q} \,/\, p, \paren {q \lor r} \,/\, q, p \,/\, r$


16




$\paren {\paren {p \lor \paren {q \lor r} } \lor \paren {p \lor q} } \implies \paren {\paren {p \lor \paren {q \lor r} } \lor \paren {p \lor \paren {q \lor r} } }$

Rule $\text {RST} 1$

14

$\paren {p \lor \paren {q \lor r} } \,/\, r, r \,/\, s$


17




$\paren {\paren {p \lor \paren {q \lor r} } \lor \paren {p \lor \paren {q \lor r} } } \implies \paren {p \lor \paren {q \lor r} }$

Axiom $\text A 1$



$\paren {p \lor \paren {q \lor r} } \,/\, p$


18




$\paren {\paren {p \lor q} \lor \paren {q \lor r} } \implies \paren {\paren {p \lor \paren {q \lor r} } \lor \paren {p \lor \paren {q \lor r} } }$

Hypothetical Syllogism

15, 16




19




$\paren {\paren {p \lor q} \lor \paren {q \lor r} } \implies \paren {p \lor \paren {q \lor r} }$

Hypothetical Syllogism

17, 18




20




$\paren {\paren {p \lor q} \lor r} \implies \paren {p \lor \paren {q \lor r} }$

Hypothetical Syllogism

3, 19



$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 5$ - $D \, 9$




