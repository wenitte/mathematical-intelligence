# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Norm_of_Linear_Transformation/Definition_1_Greater_or_Equal_Definition_3

Theorem
Let $H, K$ be Hilbert spaces.
Let $A: H \to K$ be a bounded linear transformation.
Let:

$\lambda_1 = \sup \set {\norm {A h}_K: \norm h_H \le 1}$
and

$\lambda_3 = \sup \set {\norm {A h}_K: \norm h_H = 1}$

Then:

$\lambda_1 \ge \lambda_3$


Proof
By definition of the supremum:

$\forall h \in H, \norm h_H \le 1 : \norm{A h}_K \le \lambda_1$
In particular:

$\forall h \in H, \norm h_H = 1 : \norm{A h}_K \le \lambda_1$
From Continuum Property:

$\lambda_3 = \sup \set {\norm {A h}_K: \norm h_H = 1}$ exists
By definition of the supremum:

$\lambda_3 \le \lambda_1$
$\blacksquare$





