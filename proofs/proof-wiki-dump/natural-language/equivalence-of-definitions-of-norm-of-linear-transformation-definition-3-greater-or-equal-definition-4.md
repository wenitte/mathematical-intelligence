# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Norm_of_Linear_Transformation/Definition_3_Greater_or_Equal_Definition_4

Theorem
Let $H, K$ be Hilbert spaces.
Let $A: H \to K$ be a bounded linear transformation.
Let:

$\lambda_3 = \sup \set {\norm {A h}_K: \norm h_H = 1}$
and

$\lambda_4 = \inf \set {c > 0: \forall h \in H: \norm {A h}_K \le c \norm h_H}$

Let:

$\lambda_3 \ge \lambda_4$


Proof
Lemma
$\forall \lambda > 0 : \norm{A 0_H}_K = \lambda \norm{0_H}_H$
$\Box$

Let $h \in H: h \ne 0_h$.
We have:














\(\ds \norm {\dfrac 1 {\norm h_H} h }_H\)

\(=\)







\(\ds \dfrac {\norm h_H}{\norm h_H}\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds 1\)









and














\(\ds \dfrac {\norm{A h}_K} {\norm h_H}\)

\(=\)







\(\ds \norm {\dfrac 1 {\norm h_H} A h}_K\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds \norm {A \paren{ \dfrac 1 {\norm h_H} h } }_K\)





Linear Transformation Maps Zero Vector to Zero Vector














\(\ds \)

\(\le\)







\(\ds \lambda_3\)





Definition of Supremum of Set



Hence:

$\forall h \in H: h \ne 0_h: \norm{A h}_K \le \lambda_3 \norm h_H$
From Lemma:

$\norm {A 0_H}_K = \lambda_3 \norm {0_H}_H$
Hence:

$\forall h \in H: \norm{A h}_K \le \lambda_3 \norm h_H$
That is,

$\lambda_3 \in \set {c > 0: \forall h \in H: \norm {A h}_K \le c \norm h_H}$

By definition of the infimum:

$\lambda_4 \le \lambda_3$
$\blacksquare$





