# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Algebra/Proof_4


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Every non-constant polynomial with coefficients in $\C$ has a root in $\C$.


Proof
Let $f$ be a polynomial with coefficients in $\R$, and let $f$ have degree $n$.
By Fundamental Theorem of Arithmetic, there exists $k \in \N$ such that:

$n = 2^k \cdot m$
with $m$ an odd number. 
We proceed by induction on $k$.
Note that $f$ has roots $\alpha_1, \ldots, \alpha_n$ in some splitting field.
It suffices to show that one of these roots is a complex number.


Base case
$k = 0$
$f$ is a polynomial with real coefficients and odd degree. Hence, $f$ has a root in $\R \subset \C$ by Rolle's Theorem. 


Induction hypothesis
For some integer $k > 0$, every polynomial with real coefficients of degree $2^{k - 1} \cdot m$, with $m$ an odd integer, has a root in $\C$.
For each nonzero $\lambda \in \Z$, construct the polynomial

$\ds \map {g_\lambda} x = \prod_{i \mathop < j} \paren {x - \paren {\alpha_i + \alpha_j} - \lambda \alpha_i \alpha_j} $
By Viète's Formulas, each coefficient of $g_\lambda$ is a symmetric polynomial in:

$\alpha_i + \alpha_j + \lambda \alpha_i \alpha_j$
Thus, the coefficients of $g_\lambda$ are invariant under permutations of the roots of $g_\lambda$.
But a permutation of the roots of $g_\lambda$ is equivalent to permuting the indices $\closedint 1 n$ of the roots of $f$.
Thus, the coefficients of $g_\lambda$ are invariant under permutations of the roots of $f$.
By definition, each coefficient of $g_\lambda$ is a symmetric polynomial in $\set {\alpha_1, \ldots, \alpha_n}$. 
By Fundamental Theorem of Symmetric Polynomials, each coefficient of $g_\lambda$ is a polynomial in the elementary symmetric polynomials in $\set {\alpha_1, \ldots, \alpha_n}$.
But by Viète's Formulas, these are exactly the coefficients of $f$.
Thus, each coefficient of $g_\lambda$ is a polynomial in the coefficients of $f$, which are real numbers.
Since Real Numbers form Field, the coefficients of $g_\lambda$ are real numbers.

Further, $g_\lambda$ has one linear factor for each unordered pair of roots of $f$.
Thus, the degree of $g_\lambda$ is 















\(\ds \binom n 2\)

\(=\)







\(\ds \frac {n \cdot \paren {n - 1} } 2\)





Binomial Coefficient with Two














\(\ds \)

\(=\)







\(\ds \frac {2^k \cdot m \cdot \paren {2^k \cdot m - 1} } 2\)





expression of $n$














\(\ds \)

\(=\)







\(\ds 2^{k - 1} \cdot m \cdot \paren {2^k \cdot m - 1}\)









Since $m$ and $2^k \cdot m - 1$ are odd, the degree of $g_\lambda$ is of the form:

$2^{k-1} \cdot m'$
with:

$m' = m \cdot \paren {2^k \cdot m - 1}$
an odd integer.
Combined with the fact that $g_\lambda$ has real coefficients, the induction hypothesis implies that:

$g_\lambda$
has a root in $\C$.
Thus, we have infinitely many polynomials $g_\lambda$ with a complex root of the form:

$\alpha_i + \alpha_j + \lambda \alpha_i \alpha_j$
for some $i, j\in \closedint 1 n$.
Since there are infinitely many polynomials and only finitely many pairs $\tuple {i, j}$, it follows from the Infinite Pigeonhole Principle that there exist distinct $\lambda, \mu \in \Z$ and a particular pair of roots $\alpha_x, \alpha_y$ such that:

$\alpha_x + \alpha_y + \lambda \alpha_x \alpha_y \in \C$
and

$\alpha_x + \alpha_y + \mu \alpha_x \alpha_y \in \C$
Since Complex Numbers form Field, the difference of these numbers:

$\paren {\lambda - \mu} \alpha_x \alpha_y \in \C$
Since $\lambda$ and $\mu$ are distinct:

$\lambda - \mu \ne 0$
and so:

$\frac {\paren {\lambda - \mu} \alpha_x \alpha_y}{\lambda - \mu} = \alpha_x \alpha_y \in \C$
Since:

$\alpha_x \alpha_y \in \C$
it follows that:

$\lambda \alpha_x \alpha_y \in \C$
and so:

$\alpha_x + \alpha_y + \lambda \alpha_x \alpha_y - \lambda \alpha_x \alpha_y = \alpha_x + \alpha_y \in \C$
Thus:

$\map h x = x^2 - \paren {\alpha_x + \alpha_y} x + \alpha_x \alpha_y$
is a quadratic equation with complex coefficients.

By Viète's Formulas, the roots of $\map h x$ are $\alpha_x$ and $\alpha_y$.
By Solution to Quadratic Equation, the roots of $\map h x$ are:

$\dfrac {- \alpha_x - \alpha_y \pm \sqrt{\paren {\alpha_x + \alpha_y}^2 - 4 \alpha_x \alpha_y} } 2$
which are complex numbers by Square Root of Complex Number in Cartesian Form and Complex Numbers form Field.
Thus, $\alpha_x$ and $\alpha_y$ are complex numbers.
Since $\alpha_x$ is a root of $f$, this means $f$ has a complex root. Thus, any polynomial with real coefficients has a root in $\C$.
Now let:

$\ds \map f x = \sum_{k \mathop = 0}^n c_k x^k$
be a polynomial with complex coefficients, and let $\map {\overline{f} } x$ denote:

$\ds \sum_{k \mathop = 0}^n \overline{c_k} x^k$
where an overline denotes a complex conjugate.
Observe:














\(\ds \overline {\map f x \map {\overline f} x}\)

\(=\)







\(\ds \map {\overline f} x \overline {\map {\overline f} x}\)





Conjugation of Polynomials Preserves Multiplication














\(\ds \)

\(=\)







\(\ds \overline {\map f x} \map f x\)









Thus:

$\map h x = \map f x \map {\overline f} x$
equals its conjugate, and so has real coefficients by Complex Number equals Conjugate iff Wholly Real.
Since $\map h x$ has real coefficients, it has a complex root, $\alpha$.
By Complex Roots of Polynomial with Real Coefficients occur in Conjugate Pairs:

$\overline{\alpha}$
is also a root of $h$.
Since:

$\map h \alpha = \map f \alpha \map {\overline f} \alpha = 0$
it follows that $\alpha$ is a root of either $f$ or $\overline f$.
If $\alpha$ is a root of $f$, then we are done.
If $\alpha$ is a root of $\overline f$, then:

$\map {\overline f} \alpha = 0$
and so














\(\ds \sum_{k \mathop = 0}^n \overline {c_k} \alpha^k\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n c_k \overline \alpha^k\)

\(=\)







\(\ds 0\)





taking conjugates, applying Product of Complex Conjugates








\(\ds \leadsto \ \ \)





\(\ds \map f {\overline \alpha}\)

\(=\)







\(\ds 0\)









as desired.
$\blacksquare$





