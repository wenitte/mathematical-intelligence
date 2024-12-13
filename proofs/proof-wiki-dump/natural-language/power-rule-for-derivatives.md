# 

Source: https://proofwiki.org/wiki/Power_Rule_for_Derivatives



Theorem
Let $n \in \R$.
Let $f: \R \to \R$ be the real function defined as $\map f x = x^n$.

Then:

$\map {f'} x = n x^{n - 1}$
everywhere that $\map f x = x^n$ is defined.

When $x = 0$ and $n = 0$, $\map {f'} x$ is undefined.


Corollary
$\map {\dfrac \d {\d x} } {c x^n} = n c x^{n - 1}$


Proof
This can be done in sections.

Proof for Natural Number Index
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


Proof for Integer Index
When $n \ge 0$ we use the result for Natural Number Index.
Now let $n \in \Z: n < 0$.
Then let $m = -n$ and so $m > 0$.
Thus $x^n = \dfrac 1 {x^m}$.














\(\ds \map D {x^n}\)

\(=\)







\(\ds \map D {\frac 1 {x^m} }\)




















\(\ds \)

\(=\)







\(\ds \frac {x^m \cdot 0 - 1 \cdot m x^{m - 1} } {x^{2 m} }\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -m x^{-m - 1}\)




















\(\ds \)

\(=\)







\(\ds n x^{n - 1}\)









$\blacksquare$


Proof for Fractional Index
Let $n \in \N_{>0}$.
Thus, let $\map f x = x^{1 / n}$.
From the definition of the power to a rational number, or alternatively from the definition of the root of a number, $\map f x$ is defined when $x \ge 0$.
(However, see the special case where $x = 0$.)
From Continuity of Root Function, $\map f x$ is continuous over the open interval $\openint 0 \infty$, but not at $x = 0$ where it is continuous only on the right.

Let $y > x$.
From Inequalities Concerning Roots:

$\forall n \in \N_{>0}: X Y^{1 / n} \, \size {x - y} \le n X Y \, \size {x^{1 / n} - y^{1 / n} } \le Y X^{1 / n} \, \size {x - y}$
where $x, y \in \closedint X Y$.
Setting $X = x$ and $Y = y$, this reduces (after algebra) to:

$\dfrac 1 {n y} y^{1 / n} \le \dfrac {y^{1 / n} - x^{1 / n} } {y - x} \le \dfrac 1 {n x} x^{1 / n}$
From the Squeeze Theorem for Functions, it follows that:

$\ds \lim_{y \mathop \to x^+} \dfrac {y^{1 / n} - x^{1 / n} } {y - x} = \dfrac 1 {n x} x^{1 / n} = \dfrac 1 n x^{\dfrac 1 n - 1}$

A similar argument shows that the left hand limit is the same.

Thus the result holds for $\map f x = x^{1 / n}$.
$\blacksquare$


Proof for Rational Index
Let $n \in \Q$, such that $n = \dfrac p q$ where $p, q \in \Z, q \ne 0$.
Then we have:















\(\ds \map D {x^n}\)

\(=\)







\(\ds \map D {x^{p/q} }\)




















\(\ds \)

\(=\)







\(\ds \map D {\paren {x^p}^{1/q} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 q \paren {x^p}^{1/q} x^{-p} p x^{p-1}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac p q x^{\frac p q - 1}\)





after some algebra














\(\ds \)

\(=\)







\(\ds n x^{n - 1}\)









$\blacksquare$


Proof for Real Number Index
We are going to prove that $\map {f'} x = n x^{n - 1}$ holds for all real $n$.
To do this, we compute the limit $\ds \lim_{h \mathop \to 0} \frac {\paren {x + h}^n - x^n} h$:















\(\ds \frac {\paren {x + h}^n - x^n} h\)

\(=\)







\(\ds \frac {x^n} h \paren {\paren {1 + \frac h x}^n - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac{x^n} h \paren {e^{n \map \ln {1 + \frac h x} } - 1}\)




















\(\ds \)

\(=\)







\(\ds x^n \cdot \frac {e^{n \map \ln {1 + \frac h x} } - 1} {n \map \ln {1 + \frac h x} } \cdot \frac {n \map \ln {1 + \frac h x} } {\frac h x} \cdot \frac 1 x\)










Now we use the following results:

$\ds \lim_{x \mathop \to 0} \frac {\exp x - 1} x = 1$ from Derivative of Exponential at Zero
$\ds \lim_{x \mathop \to 0} \frac {\map \ln {1 + x} } x = 1$ from Derivative of Logarithm at One
to obtain:

$x^n \cdot \dfrac {e^{n \map \ln {1 + \frac h x} } - 1} {n \map \ln {1 + \dfrac h x} } \cdot \dfrac {n \map \ln {1 + \dfrac h x}} {\dfrac h x} \cdot \dfrac 1 x \to n x^{n - 1}$ as $h \to 0$
Hence the result.
$\blacksquare$


Historical Note
The Power Rule for Derivatives was stated, without proof or explanation, by Gottfried Wilhelm von Leibniz in his $1684$ article Nova Methodus pro Maximis et Minimis, published in Acta Eruditorum.
Isaac Newton had established exactly the same result in a privately circulated paper of $1669$: On Analysis by Means of Equations with an Infinite Number of Terms, by investigating the nature of a function whose area under the graph is $x^m$.


Sources
1669: Isaac Newton: On Analysis by Means of Equations with an Infinite Number of Terms
1684: Gottfried Wilhelm von Leibniz: Nova methodus pro maximis et minimis (Acta Eruditorum Vol. 1684, no. $\text{X}$: pp. 467 – 473)
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{VI}$: On the Seashore
1944: R.P. Gillespie: Integration (2nd ed.) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $1$.
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $2.$ Power function
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.19$: Leibniz (1646-1716)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): differentiation
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): differentiation
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $8$: The System of the World: Leibniz
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives




