# 

Source: https://proofwiki.org/wiki/Rule_of_Idempotence/Disjunction/Formulation_2



Theorem
The disjunction operation is idempotent:

$\vdash p \iff \paren {p \lor p}$

This can be expressed as two separate theorems:

Forward Implication
$\vdash p \implies \left({p \lor p}\right)$
Reverse Implication
$\vdash \left({p \lor p}\right) \implies p$


Proof
By the tableau method of natural deduction:


$p \iff \paren {p \lor p} $


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

$p \lor p$

Rule of Addition: $\lor \II_1$

1




3




$p \implies \paren {p \lor p}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$p \lor p$

Assumption

(None)




5


5

$\neg p$

Assumption

(None)




6


4, 5

$p$

Modus Tollendo Ponens $\mathrm {MTP}_1$

4, 5




7


4, 5

$\bot$

Principle of Non-Contradiction: $\neg \EE$

6, 5




8


5

$p$

Proof by Contradiction: $\neg \II$

5 – 7

Assumption 5 has been discharged


9




$\paren {p \lor p} \implies p$

Rule of Implication: $\implies \II$

4 – 8

Assumption 4 has been discharged


10




$p \iff \paren {p \lor p}$

Biconditional Introduction: $\iff \II$

3, 9



$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.13$: Symbolism of sentential calculus
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T47}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $19.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2)$: The remaining rules of inference: $18$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(1) \ \text{(ii)}$




