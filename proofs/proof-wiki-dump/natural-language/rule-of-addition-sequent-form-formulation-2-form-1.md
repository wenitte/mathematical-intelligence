# 

Source: https://proofwiki.org/wiki/Rule_of_Addition/Sequent_Form/Formulation_2/Form_1



Theorem
$\vdash p \implies \paren {p \lor q}$


Proof 1
By the tableau method of natural deduction:


$p \implies \paren {p \lor q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Premise

(None)




2


1

$p \lor q$

Rule of Addition: $\lor \II_1$

1




3




$p \implies \paren {p \lor q}$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged

$\blacksquare$


Proof 2
This proof is derived in the context of the following proof system: Instance 2 of the Hilbert-style systems.By the tableau method:


$p \implies \paren {p \lor q}$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$q \implies \paren {p \lor q}$

Axiom $\text A 2$






2




$p \implies \paren {q \lor p}$

Rule $\text {RST} 1$

1

$p \,/\, q, q \,/\, p$


3




$\paren {p \lor q} \implies \paren {q \lor p}$

Axiom $\text A 3$






4




$\paren {q \lor p} \implies \paren {p \lor q}$

Rule $\text {RST} 1$

3

$p \,/\, q, q \,/\, p$


5




$p \implies \paren {p \lor q}$

Hypothetical Syllogism

2, 4



$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 6$
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Exercise $3 \ \text{(a)}$




