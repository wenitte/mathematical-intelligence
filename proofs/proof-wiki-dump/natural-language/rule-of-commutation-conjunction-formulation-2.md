# 

Source: https://proofwiki.org/wiki/Rule_of_Commutation/Conjunction/Formulation_2

Theorem
$\vdash \paren {p \land q} \iff \paren {q \land p}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \land q} \iff \paren {q \land p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land q$

Assumption

(None)




2


1

$q \land p$

Sequent Introduction

1

Conjunction is Commutative


3




$\paren {p \land q} \implies \paren {q \land p}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$q \land p$

Assumption

(None)




5


4

$p \land q$

Sequent Introduction

4

Conjunction is Commutative


6




$\paren {q \land p} \implies \paren {p \land q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \land q} \iff \paren {q \land p}$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.13$: Symbolism of sentential calculus
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 8$
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 21 - 22$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T24}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $11.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2): \ 6$: Using logical equivalences: $10$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(1) \ \text{(iii)}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $12 \ (4)$




