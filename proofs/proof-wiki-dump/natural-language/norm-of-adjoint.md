# 

Source: https://proofwiki.org/wiki/Norm_of_Adjoint

Theorem
Let $H, K$ be Hilbert spaces.
Let $A \in \map B {H, K}$ be a bounded linear transformation.
Let $A^* \in \map B {K, H}$ be the adjoint of $A$.

Then $A$ and $A^*$ satisfy:

$\norm A_{\map B {H, K} }^2 = \norm {A^*}_{\map B {K, H} }^2 = \norm {A^* A}_{\map B {H, H} }$
where:

$\norm \cdot_{\map B {H, K} }$ denotes the operator norm on $\map B {H, K}$
$\norm \cdot_{\map B {K, H} }$ denotes the operator norm on $\map B {K, H}$
$\norm \cdot_{\map B {H, H} }$ denotes the operator norm on $\map B {H, H}$


Proof
Let $h \in H$ such that $\norm h_H \le 1$.
Then:














\(\ds \norm {A h}_K^2\)

\(=\)







\(\ds \innerprod {A h} {A h}_K\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod {A^* A h} h_H\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(\le\)







\(\ds \norm {A^*A h}_H \norm h_H\)





Cauchy-Bunyakovsky-Schwarz Inequality














\(\ds \)

\(\le\)







\(\ds \norm {A^* A} \norm h_H^2\)





Fundamental Property of Norm on Bounded Linear Transformation














\(\ds \)

\(\le\)







\(\ds \norm {A^* A}\)





Assumption on $h$














\(\ds \)

\(\le\)







\(\ds \norm {A^*} \norm A\)





Norm on Bounded Linear Transformation is Submultiplicative



By definition $(1)$ for $\norm A$, it follows that:

$\norm A^2 \le \norm {A^* A} \le \norm {A^*} \norm A$
That is:

$\norm A \le \norm {A^*}$.

By substituting $A^*$ for $A$, and using $A^{**} = A$ from Adjoint is Involutive, the reverse inequality is obtained.

Hence $\norm A^2 = \norm {A^* A} = \norm {A^*}^2$.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.2.7$
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $13.1$: Existence of Hilbert Adjoint




