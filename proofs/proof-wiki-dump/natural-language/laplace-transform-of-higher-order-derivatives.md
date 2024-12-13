# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Higher_Order_Derivatives



Theorem
Let $f: \R \to \R$ or $\R \to \C$ be a continuous function on any interval of the form $0 \le t \le a$.
Let $f$ be $n$ times differentiable on said intervals.
Let $f, f', \ldots, f^{\paren {n - 1} }$ be continuous and $f^{\paren n}$ piecewise continuous with one-sided limits on said intervals.
Let $f, f', \ldots, f^{\paren {n - 1} }$ be of exponential order.
Let $\laptrans f = F$ denote the Laplace transform of $f$.

Then $\laptrans {f^{\paren n} }$ exists for $\map \Re s > a$, and:














\(\ds \laptrans {\map {f^{\paren n} } t}\)

\(=\)







\(\ds s^n \laptrans {\map f t} - \sum_{j \mathop = 1}^n s^{j - 1} \map {f^{\paren {n - j} } } 0\)




















\(\ds \)

\(=\)







\(\ds s^n \map F s - s^{n - 1} \, \map f 0 - s^{n - 2} \, \map {f'} 0 - s^{n - 3} \, \map {f} 0 - \ldots - s \, \map {f^{\paren {n - 2} } } 0 - \map {f^{\paren {n - 1} } } 0\)











Proof
The proof proceeds by induction on $n$, the order of the derivative of $f$.


Basis for the Induction
By hypothesis $f$ is of exponential order.
Thus Laplace Transform of Derivative can be invoked:

$\laptrans {\map {f'} t} = s \laptrans {\map f t} - \map f 0$

This is the basis for the induction.


Induction Hypothesis
Fix $n - 1 \in \N$ with $n \ge 2$.
Assume:

$\ds \laptrans {\map {f^{\paren {n - 1} } } t} = s^{n - 1} \laptrans {\map f t}- \sum_{j \mathop = 1}^{n - 1} s^{j - 1} \map {f^{\paren {n - 1 - j} } } 0$
This is our induction hypothesis.


Induction Step
This is our induction step:
By hypothesis $f^\paren {n - 1}$ is of exponential order.
Thus Laplace Transform of Derivative can be invoked:














\(\ds \laptrans {\map {f^{\paren n} } t}\)

\(=\)







\(\ds s \laptrans {\map {f^{\paren {n - 1} } } t} - \map f 0\)





Laplace Transform of Derivative














\(\ds \)

\(=\)







\(\ds s \paren {s^{n - 1} \laptrans {\map f t} - \sum_{j \mathop = 1}^{n - 1} s^{j - 1} \map {f^{\paren {n - 1 - j} } } 0} - \map f 0\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds s^n \laptrans {\map f t} - \sum_{j \mathop = 1}^{n - 1} s^{j - 1 + 1} \map {f^{\paren {n - j} } } 0 - s^0 \map {f^{\paren 0} } 0\)





Definition of Zeroth Derivative














\(\ds \)

\(=\)







\(\ds s^n \laptrans {\map f t} - \sum_{j \mathop = 0}^{n - 1} s^j \map {f^{\paren {n - j} } } 0\)




















\(\ds \)

\(=\)







\(\ds s^n \laptrans {\map f t} - \sum_{j \mathop = 1}^n s^{j - 1} \map {f^{\paren {n - j} } } 0\)





replace $j$ with $j - 1$




The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Also see
Higher Order Derivatives of Laplace Transform


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $5$. Laplace transform of derivatives: Theorem $1 \text{-} 10$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.9$
2009: William E. Boyce and Richard C. DiPrima: Elementary Differential Equations and Boundary Value Problems (9th ed.): $\S 6.2$




