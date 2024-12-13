# 

Source: https://proofwiki.org/wiki/Rule_of_Idempotence/Conjunction/Formulation_2

Theorem
The conjunction operator is idempotent:

$\vdash p \iff \paren {p \land p}$


Proof
By the tableau method of natural deduction:


$\vdash p \iff \paren {p \land p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Assumption

(None)




2


1

$p \land p$

Rule of Conjunction: $\land \II$

1, 1




3




$p \implies \paren {p \land p}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$p \land p$

Assumption

(None)




5


4

$p$

Rule of Simplification: $\land \EE_1$

4




6




$\paren {p \land p} \implies p$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$p \iff \paren {p \land p}$

Biconditional Introduction: $\iff \II$

3, 6


$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.13$: Symbolism of sentential calculus
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T41}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $19.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2)$: The remaining rules of inference: $18$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(1) \ \text{(i)}$




