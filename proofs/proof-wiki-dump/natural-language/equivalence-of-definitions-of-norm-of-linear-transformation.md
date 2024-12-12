# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Norm_of_Linear_Transformation



Theorem
Let $H, K$ be Hilbert spaces.
Let $A: H \to K$ be a bounded linear transformation.

The following definitions of the concept of Norm on Bounded Linear Transformation are equivalent:

Definition 1
The norm of $A$ is the real number defined and denoted as:

$\norm A = \sup \set {\norm {A x}_Y : \norm x_X \le 1}$
Definition 2
The norm of $A$ is the real number defined and denoted as:

$\norm A = \sup \set {\dfrac {\norm {A x}_Y} {\norm x_X}: x \in X, x \ne \mathbf 0_X}$
This supremum is to be taken in $\closedint 0 \infty$ so that $\sup \O = 0$. 

Definition 3
The norm of $A$ is the real number defined and denoted as:

$\norm A = \sup \set {\norm {A x}_X : \norm x_X = 1}$
This supremum is to be taken in $\closedint 0 \infty$ so that $\sup \O = 0$. 

Definition 4
The norm of $A$ is the real number defined and denoted as:

$\norm A = \inf \set {c > 0: \forall x \in X: \norm {A x}_Y \le c \norm x_X}$


Proof
Let:














\(\ds \lambda_1\)

\(=\)







\(\ds \sup \set {\norm {A h}_K: \norm h_H \le 1}\)




















\(\ds \lambda_2\)

\(=\)







\(\ds \sup \set {\dfrac {\norm {A h}_K} {\norm h_H}: h \in H, h \ne 0_H}\)




















\(\ds \lambda_3\)

\(=\)







\(\ds \sup \set {\norm {A h}_K: \norm h_H = 1}\)




















\(\ds \lambda_4\)

\(=\)







\(\ds \inf \set {c > 0: \forall h \in H: \norm {A h}_K \le c \norm h_H}\)










From Norm on Bounded Linear Transformation is Finite:

$\lambda_4 < \infty$

We will show that:

$\lambda_4 \ge \lambda_2 \ge \lambda_1 \ge \lambda_3 \ge \lambda_4$


Lemma
$\forall \lambda > 0 : \norm{A 0_H}_K = \lambda \norm{0_H}_H$
$\Box$


Inequality: $\lambda_4 \ge \lambda_2$
From Fundamental Property of Norm on Bounded Linear Transformation:

$\forall h \in \HH : \norm{A h}_\KK \le \lambda_4 \norm h_\HH$
Hence:

$\forall h \in H, h \ne 0_\HH : \dfrac {\norm{A h}_\KK} {\norm h_\HH} \le \lambda_4$
From Continuum Property:

$\lambda_2 = \sup \set {\dfrac {\norm {A h}_\KK} {\norm h_\HH}: h \in \HH, h \ne 0_\HH}$ exists
By definition of the supremum:

$\lambda_2 \le \lambda_4$
$\Box$


Inequality: $\lambda_2 \ge \lambda_1$
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
$\Box$


Inequality: $\lambda_1 \ge \lambda_3$
By definition of the supremum:

$\forall h \in H, \norm h_H \le 1 : \norm{A h}_K \le \lambda_1$
In particular:

$\forall h \in H, \norm h_H = 1 : \norm{A h}_K \le \lambda_1$
From Continuum Property:

$\lambda_3 = \sup \set {\norm {A h}_K: \norm h_H = 1}$ exists
By definition of the supremum:

$\lambda_3 \le \lambda_1$
$\Box$


Inequality: $\lambda_3 \ge \lambda_4$
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
$\Box$

It follows that the definitions are all equivalent. 
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\S \text {II}.1$




