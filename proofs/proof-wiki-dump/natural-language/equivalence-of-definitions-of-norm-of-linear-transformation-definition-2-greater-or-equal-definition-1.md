# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Norm_of_Linear_Transformation/Definition_2_Greater_or_Equal_Definition_1

Theorem
Let $H, K$ be Hilbert spaces.
Let $A: H \to K$ be a bounded linear transformation.
Let: 

$\lambda_1 = \sup \set {\norm {A h}_K: \norm h_H \le 1}$
and

$\lambda_2 = \sup \set {\dfrac {\norm {A h}_K} {\norm h_H}: h \in H, h \ne 0_H}$

Then:

$\lambda_2 \ge \lambda_1$


Proof
Lemma
$\forall \lambda > 0 : \norm{A 0_H}_K = \lambda \norm{0_H}_H$
$\Box$

By definition of the supremum:

$\forall h \in H, h \ne \mathbf 0_H: \dfrac {\norm {A h}_K} {\norm h_H} \le \lambda_2$
Hence:

$\forall h \in H, h \ne \mathbf 0_H: \norm {A h}_K \le \lambda_2 \norm h_H$
From Lemma:

$\norm{A 0_H}_K = \lambda_2 \norm{0_H}_H$
Hence:

$\forall h \in H: \norm {A h}_K \le \lambda_2 \norm h_H$
In particular:










\(\ds \forall h \in H, \norm h_H \le 1: \, \)



\(\ds \norm {A h}_K\)

\(\le\)







\(\ds \lambda_2 \norm h_H\)




















\(\ds \)

\(\le\)







\(\ds \lambda_2\)









From Continuum Property:

$\lambda_1 = \sup \set {\norm {A h}_K: \norm h_H \le 1}$ exists
By definition of the supremum:

$\lambda_1 \le \lambda_2$
$\blacksquare$





