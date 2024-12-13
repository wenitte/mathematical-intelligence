# 

Source: https://proofwiki.org/wiki/Non-Zero_Real_Numbers_Closed_under_Multiplication



Theorem
The set of non-zero real numbers is closed under multiplication:

$\forall x, y \in \R_{\ne 0}: x \times y \in \R_{\ne 0}$


Proof 1
Recall that Real Numbers form Field under the operations of addition and multiplication.
By definition of a field, the algebraic structure $\struct {\R_{\ne 0}, \times}$ is a group.
Thus, by definition, $\times$ is closed in $\struct {\R_{\ne 0}, \times}$.
$\blacksquare$


Proof 2
Let $x \times y = 0$.
Without loss of generality, suppose that $x \ne 0$.
Then:














\(\ds x \times y\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 x \times \paren {x \times y}\)

\(=\)







\(\ds \frac 1 x \times 0\)





as $x \ne 0$








\(\ds \leadsto \ \ \)





\(\ds \paren {\frac 1 x \times x} \times y\)

\(=\)







\(\ds \frac 1 x \times 0\)





Real Number Axiom $\R \text M1$: Associativity of Multiplication








\(\ds \leadsto \ \ \)





\(\ds 1 \times y\)

\(=\)







\(\ds \frac 1 x \times 0\)





Real Number Axiom $\R \text M4$: Inverses for Multiplication








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \frac 1 x \times 0\)





Real Number Axiom $\R \text M3$: Identity Element for Multiplication








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds 0\)





Real Zero is Zero Element




Thus:

$x \times y = 0, x \ne 0 \implies y = 0$
Mutatis mutandis

$x \times y = 0, y \ne 0 \implies x = 0$
and so:

$x \times y = 0 \implies y = 0 \lor x = 0$

So:














\(\ds \)

\(\)







\(\ds x \times y = 0\)




















\(\ds \)

\(\leadsto\)







\(\ds \paren {x = 0} \lor \paren {y = 0}\)




















\(\ds \)

\(\leadsto\)







\(\ds \neg \paren {x \ne 0 \land y \ne 0}\)





De Morgan's Laws: Disjunction



The result follows by the Rule of Transposition.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Example $8.2$




