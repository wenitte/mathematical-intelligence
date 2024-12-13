# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Disjunction_Distributes_over_Conjunction/Left_Distributive/Formulation_2/Forward_Implication/Proof_2

Theorem
$\vdash \paren {p \lor \paren {q \land r} } \implies \paren {\paren {p \lor q} \land \paren {p \lor r} }$


Proof
This proof is derived in the context of the following proof system: Instance 2 of the Hilbert-style systems.By the tableau method:


$\vdash \paren {p \lor \paren {q \land r} } \implies \paren {\paren {p \lor q} \land \paren {p \lor r} }$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {q \land r} \implies q$

Rule of Simplification



$q / p, r / q$


2




$\paren {\paren {q \land r} \implies q} \implies \paren {\paren {p \lor \paren {q \land r} } \implies \paren {p \lor q} }$

Axiom $A 4$



$\paren {q \land r} \, / \, q, q \, / \, r$


3




$\paren {p \lor \paren {q \land r} } \implies \paren {p \lor q}$

Rule $RST \, 3$

1, 2




4




$\paren {q \land r} \implies \paren {r \land q}$

Rule of Commutation



$q / p, r / q$


5




$\paren {r \land q} \implies r$

Rule of Simplification



$r / p$


6




$\paren {q \land r} \implies r$

Hypothetical Syllogism

4, 5




7




$\paren {\paren {q \land r} \implies r} \implies \paren {\paren {p \lor \paren {q \land r} } \implies \paren {p \lor r} }$

Axiom $A4$



$\paren {q \land r} \, / \, q$


8




$\paren {p \lor \paren {q \land r} } \implies \paren {p \lor r}$

Rule $RST \, 3$

6, 7




9




$\paren {p \lor q} \implies \paren {\paren {p \lor r} \implies \paren {\paren {p \lor q} \land \paren {p \lor r} } }$

Rule of Conjunction



$\paren {p \lor q} \, / \, p, \paren {p \lor r} \, / \, q$


10




$\paren {p \lor \paren {q \land r} } \implies \paren {\paren {p \lor r} \implies \paren {\paren {p \lor q} \land \paren {p \lor r} } }$

Hypothetical Syllogism

3, 9




11




$\paren {\paren {p \lor \paren {q \land r} } \implies \paren {\paren {p \lor r} \implies \paren {p \lor q} \land \paren {p \lor r} } } \\ \implies \paren {\paren {p \lor r} \implies \paren {\paren {p \lor \paren {q \land r} } \implies \paren {p \lor q} \land \paren {p \lor r} } }$

Principle of Commutation



$\paren {p \lor \paren {q \land r} } \, / \, p, \paren {p \lor r} \, / \, q, \paren {\paren {p \lor q} \land \paren {p \lor r} } \, / \, r$


12




$\paren {p \lor r} \implies \paren {\paren {p \lor \paren {q \land r} } \implies \paren {p \lor q} \land \paren {p \lor r} }$

Rule $RST \, 3$

10, 11




13




$\paren {p \lor \paren {q \land r} } \implies \paren {\paren {p \lor \paren {q \land r} } \implies \paren {p \lor q} \land \paren {p \lor r} }$

Hypothetical Syllogism

8, 12




14




$\paren {p \lor \paren {q \land r} } \implies \paren {p \lor q} \land \paren {p \lor r}$







$\blacksquare$


This article contains statements that are justified by handwavery.In particular: The result establishing 13 -> 14 needs to be cited.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 29 - 31$




