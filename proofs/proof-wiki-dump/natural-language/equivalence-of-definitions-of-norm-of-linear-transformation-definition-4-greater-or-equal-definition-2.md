# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Norm_of_Linear_Transformation/Definition_4_Greater_or_Equal_Definition_2

Theorem
Let $\HH, \KK$ be Hilbert spaces.
Let $A: \HH \to \KK$ be a bounded linear transformation.
Let:

$\lambda_2 = \sup \set {\dfrac {\norm {A h}_\KK} {\norm h_\HH}: h \in \HH, h \ne 0_\HH}$
and

$\lambda_4 = \inf \set {c > 0: \forall h \in \HH: \norm {A h}_\KK \le c \norm h_\HH}$

Then:

$\lambda_4 \ge \lambda_2$


Proof
From Norm on Bounded Linear Transformation is Finite:

$\lambda_4 < \infty$

From Fundamental Property of Norm on Bounded Linear Transformation:

$\forall h \in \HH : \norm{A h}_\KK \le \lambda_4 \norm h_\HH$
Hence:

$\forall h \in H, h \ne 0_\HH : \dfrac {\norm{A h}_\KK} {\norm h_\HH} \le \lambda_4$
From Continuum Property:

$\lambda_2 = \sup \set {\dfrac {\norm {A h}_\KK} {\norm h_\HH}: h \in \HH, h \ne 0_\HH}$ exists
By definition of the supremum:

$\lambda_2 \le \lambda_4$
$\blacksquare$





