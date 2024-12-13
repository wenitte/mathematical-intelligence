# 

Source: https://proofwiki.org/wiki/Higher_Order_Derivatives_of_Laplace_Transform



Theorem
Let $f: \R \to \R$ or $\R \to \C$ be a continuous function on any interval of the form $0 \le t \le A$.
Let $\dfrac {\partial f}{\partial s}$, the partial derivative of $f$ with respect to $s$, exist and be continuous on said intervals.
Let $\laptrans f = F$ denote the Laplace transform of $f$.

Then, everywhere that $\laptrans f$ exists and is $n$ times differentiable:

$\dfrac {\d^n} {\d s^n} \laptrans {\map f t} = \paren {-1}^n \laptrans {t^n \, \map f t}$


Proof
The proof proceeds by induction on $n$, the order of the derivative of $\laptrans f$.

The case $n = 0$ is verified as follows:














\(\ds \frac {\d^0} {\d s^0} \laptrans {\map f t}\)

\(=\)







\(\ds \laptrans {\map f t}\)





Definition of Zeroth Derivative














\(\ds \)

\(=\)







\(\ds \paren {-1}^0 \laptrans {t^0 \, \map f t}\)





Definition of Zeroth Power





Basis for the Induction
The case $n = 1$ is demonstrated in Derivative of Laplace Transform:

$\dfrac \d {\d s} \laptrans {\map f t} = -\laptrans {t \, \map f t}$

This is the basis for the induction.


Induction Hypothesis
Fix $n \in \N$ with $n \ge 0$.
Assume:

$\dfrac {\d^n} {\d s^n} \laptrans {\map f t} = \paren {-1}^n \laptrans {t^n \, \map f t}$
This is our induction hypothesis.


Induction Step
This is our induction step:














\(\ds \frac {\d^{n + 1} } {\d s^{n + 1} } \laptrans {\map f t}\)

\(=\)







\(\ds \frac {\d}{\d s} \frac {\d^n} {\d s^n} \laptrans {\map f t}\)




















\(\ds \)

\(=\)







\(\ds \frac {\d}{\d s} \paren {\paren {-1}^n \laptrans {t^n \, \map f t} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {-1}^n \paren {-\laptrans {t \times t^n \, \map f t} }\)





Derivative of Laplace Transform














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} \laptrans {t^{n + 1} \, \map f t}\)





simplification




The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Examples
Example $1$
$\laptrans {t^2 e^{2 t} } = \dfrac 2 {\paren {s - 2}^3}$


Also see
Laplace Transform of Higher Order Derivatives


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $7$. Multiplication by $t^n$: Theorem $1 \text{-} 12$
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Multiplication by Powers of $t$: $19$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.12$




