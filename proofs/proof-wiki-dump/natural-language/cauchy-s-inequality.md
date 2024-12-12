# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Inequality



Theorem
$\ds \sum {r_i}^2 \sum {s_i}^2 \ge \paren {\sum {r_i s_i} }^2$
where all of $r_i, s_i \in \R$.


Proof 1
For any $\lambda \in \R$, we define $f: \R \to \R$ as the function:

$\ds \map f \lambda = \sum {\paren {r_i + \lambda s_i}^2}$
Now:

$\map f \lambda \ge 0$
because it is the sum of squares of real numbers.

Hence:










\(\ds \forall \lambda \in \R: \, \)



\(\ds \map f \lambda\)

\(\equiv\)

\(\, \ds \sum {\paren { {r_i}^2 + 2 \lambda r_i s_i + \lambda^2 {s_i}^2} } \, \)

\(\, \ds \ge \, \)



\(\ds 0\)




















\(\ds \)

\(\equiv\)

\(\, \ds \sum { {r_i}^2} + 2 \lambda \sum {r_i s_i} + \lambda^2 \sum { {s_i}^2} \, \)

\(\, \ds \ge \, \)



\(\ds 0\)









This is a quadratic equation in $\lambda$.
From Solution to Quadratic Equation:

$\ds a \lambda^2 + b \lambda + c = 0: a = \sum { {s_i}^2}, b = 2 \sum {r_i s_i}, c = \sum { {r_i}^2}$

The discriminant of this equation (that is $b^2 - 4 a c$) is:

$\ds D := 4 \paren {\sum {r_i s_i} }^2 - 4 \sum { {r_i}^2} \sum { {s_i}^2}$

Aiming for a contradiction, suppose $D$ is (strictly) positive.
Then $\map f \lambda = 0$ has two distinct real roots, $\lambda_1 < \lambda_2$, say.
From Sign of Quadratic Function Between Roots, it follows that $f$ is (strictly) negative somewhere between $\lambda_1$ and $\lambda_2$.
But we have:

$\forall \lambda \in \R: \map f \lambda \ge 0$

From this contradiction it follows that:

$D \le 0$
which is the same thing as saying:

$\ds \sum { {r_i}^2} \sum { {s_i}^2} \ge \paren {\sum {r_i s_i} }^2$
$\blacksquare$


Proof 2
From the Complex Number form of the Cauchy-Schwarz Inequality, we have:

$\ds \paren {\sum \cmod {w_i}^2} \paren {\sum \cmod {z_i}^2} \ge \cmod {\sum w_i z_i}^2$
where all of $w_i, z_i \in \C$.

As elements of $\R$ are also elements of $\C$, it follows that:

$\ds \sum \size {r_i}^2 \sum \size {s_i}^2 \ge \size {\sum r_i s_i}^2$
where all of $r_i, s_i \in \R$.

But from the definition of modulus, it follows that:

$\ds \forall r_i \in \R: \size {r_i}^2 = {r_i}^2$

Thus:

$\ds \sum {r_i}^2 \sum {s_i}^2 \ge \paren {\sum r_i s_i}^2$
where all of $r_i, s_i \in \R$.
$\blacksquare$


Also presented as
Cauchy's Inequality can also be expressed in the form:

$\ds \sum_{i \mathop = 1}^n r_i s_i \le \sqrt {\paren {\sum_{i \mathop = 1}^n r_i} \paren {\sum_{i \mathop = 1}^n s_i} }$
where all of $r_i, s_i \in \R$.


Vector Form
Let $\mathbf a$ and $\mathbf b$ be vectors in a vector space $V$.
Then:

$\paren {\mathbf a \cdot \mathbf b}^2 \le \paren {\mathbf a \cdot \mathbf a} \paren {\mathbf b \cdot \mathbf b}$
where $\cdot$ denotes dot product.


Also known as
Cauchy's Inequality is also known as the Cauchy-Schwarz Inequality.
However, that name is also given to the more general Cauchy-Bunyakovsky-Schwarz Inequality, and so will not be used in this context on $\mathsf{Pr} \infty \mathsf{fWiki}$.
Some sources refer to this as the Cauchy-Schwarz inequality for sums.


Source of Name
This entry was named for Augustin Louis Cauchy.


Historical Note
The result known as Cauchy's Inequality was first published by Augustin Louis Cauchy in $1821$.
It is a special case of the Cauchy-Bunyakovsky-Schwarz Inequality.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.2$ Inequalities: Cauchy's Inequality: $3.2.9$
1965: Michael Spivak: Calculus on Manifolds ... (previous) ... (next): 1. Functions on Euclidean Space: Norm and Inner Product
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 36$: Inequalities: $36.3$: Cauchy-Schwartz Inequality
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Cauchy's inequality
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Cauchy-Schwarz inequality: $(2)$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Cauchy-Schwarz inequality: $(2)$
For a video presentation of the contents of this page, visit the Khan Academy.




