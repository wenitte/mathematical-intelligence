# 

Source: https://proofwiki.org/wiki/Power_Rule_for_Derivatives/Natural_Number_Index/Proof_by_Binomial_Theorem

Theorem
Let $n \in \N$.
Let $f: \R \to \R$ be the real function defined as $\map f x = x^n$.

Then:

$\map {f'} x = n x^{n-1}$
everywhere that $\map f x = x^n$ is defined.

When $x = 0$ and $n = 0$, $\map {f'} x$ is undefined.


Proof
Let $\map f x = x^n$ for $x \in \R, n \in \N$.
By the definition of the derivative:

$\ds \dfrac \d {\d x} \map f x = \lim_{h \mathop \to 0} \dfrac {\map f {x + h} - \map f x} h = \lim_{h \mathop \to 0} \dfrac {\paren {x + h}^n - x^n} h$

Using the binomial theorem this simplifies to:














\(\ds \)

\(\)







\(\ds \lim_{h \mathop \to 0} \paren {\frac {\dbinom n 0 x^n + \dbinom n 1 x^{n - 1} h + \dbinom n 2 x^{n - 2} h^2 + \cdots + \dbinom n {n - 1} x h^{n - 1} + \dbinom n n h^n - x^n} h}\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\frac {\dbinom n 1 x^{n - 1} h + \dbinom n 2 x^{n - 2} h^2 + \cdots + \dbinom n {n - 1} x h^{n - 1} + \dbinom n n h^n} h}\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\dbinom n 1 x^{n - 1} + \dbinom n 2 x^{n - 2} h^1 + \cdots + \dbinom n {n - 1} x h^{n - 2} + \dbinom n n h^{n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dbinom n 1 x^{n - 1}\)





evaluating the limit














\(\ds \)

\(=\)







\(\ds n x^{n - 1}\)





Binomial Coefficient with One: $\dbinom r 1 = r$



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation: Standard Differential Coefficients




