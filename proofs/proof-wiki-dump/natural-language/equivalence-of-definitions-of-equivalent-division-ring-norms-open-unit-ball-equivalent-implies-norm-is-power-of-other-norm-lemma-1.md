# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Equivalent_Division_Ring_Norms/Open_Unit_Ball_Equivalent_implies_Norm_is_Power_of_Other_Norm/Lemma_1

Theorem
Let $R$ be a division ring.
Let $\norm {\, \cdot \,}_1: R \to \R_{\ge 0}$ be a norm on $R$.
Let $\norm {\, \cdot \,}_1$ satisfy:

$\forall x \in R, x \ne 0_R:\norm x_1 \ge 1$

Then:

$\norm {\, \cdot \,}_1$ is the trivial norm.


Proof
We prove the contrapositive.
Let $\norm {\, \cdot \,}_1$ be a nontrivial norm.
Then:

$\exists y \in R: \norm y_1 \ne 0, \norm y_1 \ne 1$.
By Real Numbers form Totally Ordered Field either $\norm y_1 < 1$ or $\norm y_1 > 1$.
Suppose $\norm y_1 > 1$.
By Norm axiom $(\text N 1)$: Positive Definiteness:

$y \ne 0_R$
By Norm of Inverse in Division Ring:

$\norm {y^{-1} }_1 = \dfrac 1 {\norm y_1} < 1$
So either $\norm y_1 < 1$ or $\norm {y^{-1} }_1 < 1$

So:

$\exists x \in R, x \ne 0_R:\norm x_1 < 1$
The theorem now follows by the Rule of Transposition. 
$\blacksquare$





