# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Disjunction_Distributes_over_Conjunction/Left_Distributive/Formulation_2/Forward_Implication

Theorem
$\vdash \paren {p \lor \paren {q \land r} } \implies \paren {\paren {p \lor q} \land \paren {p \lor r} }$


Proof 1
This proof is derived in the context of the following proof system: instance 1 of a Gentzen proof system.By the tableau method:


$\vdash \paren {p \lor \paren {q \land r} } \implies \paren {\paren {p \lor q} \land \paren {p \lor r} }$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\neg p, p, q$

Axiom






2




$\neg p, p \lor q$

$\beta$-Rule: $\beta \lor$

1




3




$\neg p, p, r$

Axiom






4




$\neg p, p \lor r$

$\beta$-Rule: $\beta \lor$

3




5




$\neg p, \paren {p \lor q} \land \paren {p \lor r}$

$\alpha$-Rule: $\alpha \land$

2, 4




6




$\neg q, \neg r, p, q$

Axiom






7




$\neg q, \neg r, p \lor q$

$\beta$-Rule: $\beta \lor$

6




8




$\neg q, \neg r, p, r$

Axiom






9




$\neg q, \neg r, p \lor r$

$\beta$-Rule: $\beta \lor$

8




10




$\neg q, \neg r, \paren {p \lor q} \land \paren {p \lor r}$

$\alpha$-Rule: $\alpha \land$

7, 9




11




$\neg \paren {q \land r}, \paren {p \lor q} \land \paren {p \lor r}$

$\beta$-Rule: $\beta \land$

10




12




$\neg \paren {p \lor \paren {q \land r} }, \paren {p \lor q} \land \paren {p \lor r}$

$\alpha$-Rule: $\alpha \land$

5, 11




13




$\paren {p \lor \paren {q \land r} } \implies \paren {\paren {p \lor q} \land \paren {p \lor r} }$

$\beta$-Rule: $\beta \implies$

12



$\blacksquare$


Proof 2
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





