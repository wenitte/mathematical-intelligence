# 

Source: https://proofwiki.org/wiki/Rule_of_Association/Disjunction/Formulation_2



Theorem
$\vdash \paren {p \lor \paren {q \lor r} } \iff \paren {\paren {p \lor q} \lor r}$


Forward Implication
$\vdash \paren {p \lor \paren {q \lor r} } \implies \paren {\paren {p \lor q} \lor r}$


Reverse Implication
$\vdash \paren {p \lor \paren {q \lor r} } \impliedby \paren {\paren {p \lor q} \lor r}$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {p \lor \paren {q \lor r} } \iff \paren {\paren {p \lor q} \lor r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor \paren {q \lor r}$

Assumption

(None)




2


1

$\paren {p \lor q} \lor r$

Sequent Introduction

1

Rule of Association: Formulation 1


3




$\paren {p \lor \paren {q \lor r} } \implies \paren {\paren {p \lor q} \lor r}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\paren {p \lor q} \lor r$

Assumption

(None)




5


4

$p \lor \paren {q \lor r}$

Sequent Introduction

4

Rule of Association: Formulation 1


6




$\paren {\paren {p \lor q} \lor r} \implies \paren {p \lor \paren {q \lor r} }$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \lor \paren {q \lor r} } \iff \paren {\paren {p \lor q} \lor r}$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Proof 2
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
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.13$: Symbolism of sentential calculus
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 11$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T54}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $12.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2): \ 6$: Using logical equivalences: $11$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(1) \ \text{(vi)}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $12 \ (3)$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): or
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): or




