# 

Source: https://proofwiki.org/wiki/Rule_of_Association/Conjunction/Formulation_2

Theorem
$\vdash \paren {p \land \paren {q \land r} } \iff \paren {\paren {p \land q} \land r}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \land \paren {q \land r} } \iff \paren {\paren {p \land q} \land r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \paren {q \land r}$

Assumption

(None)




2


1

$\paren {p \land q} \land r$

Sequent Introduction

1

Rule of Association: Formulation 1


3




$\paren {p \land \paren {q \land r} } \implies \paren {\paren {p \land q} \land r}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\paren {p \land q} \land r$

Assumption

(None)




5


4

$p \land \paren {q \land r}$

Sequent Introduction

4

Rule of Association: Formulation 1


6




$\paren {\paren {p \land q} \land r} \implies \paren {p \land \paren {q \land r} }$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \land \paren {q \land r} } \iff \paren {\paren {p \land q} \land r}$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.13$: Symbolism of sentential calculus
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 10$
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 27$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T25}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $12.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2): \ 6$: Using logical equivalences: $11$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(1) \ \text{(v)}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $12 \ (2)$




