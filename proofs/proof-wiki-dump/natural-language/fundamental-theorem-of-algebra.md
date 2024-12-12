# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Algebra



Theorem
Every non-constant polynomial with coefficients in $\C$ has a root in $\C$.


Proof using Algebraic Topology
Let $\map p z$ be a polynomial in $\C$:

$\map p z = z^m + a_1 z^{m-1} + \cdots + a_m$
where not all of $a_1, \ldots, a_m$ are zero.
Define a homotopy:

$\map {p_t} z = t \map p z + \left({1-t}\right) z^m$
Then:

$\dfrac {\map {p_t} z} {z^m} = 1 + t \paren {a_1 \dfrac 1 z + \cdots + a_m \dfrac 1 {z^m} }$
The terms in the parenthesis go to $0$ as $z \to \infty$.


This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore, there is an $r \in \R_{>0}$ such that:

$\forall z \in \C: \size z = r: \forall t \in \closedint 0 1: \map {p_t} z \ne 0$
Hence the homotopy:

$\dfrac {p_t} {\size {p_t} }: S \to \Bbb S^1$
is well-defined for all $t$.

This shows that for any complex polynomial $\map p z$ of order $m$, there is a circle $S$ of sufficiently large radius in $\C$ such that $\dfrac {\map p z} {\size {\map p z}}$ and $\dfrac {z^m} {\size {z^m} }$ are freely homotopic maps $S \to \Bbb S^1$. 
Hence $\dfrac {\map p z} {\size {\map p z} }$ must have the same degree of $\paren {z / r}^m$, which is $m$.  
When $m > 0$, that is $p$ is non-constant, this result and the Extendability Theorem for Intersection Numbers imply $\dfrac {\map p z} {\size {\map p z} }$ does not extend to the disk $\Int S$, implying $\map p z = 0$ for some $z \in \Int S$.


This article, or a section of it, needs explaining.In particular: $\Int S$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Proof using Liouville's Theorem
Let $\map P z = a_n z^n + \dots + a_1 z + a_0, \ a_n \ne 0$.
Aiming for a contradiction, suppose that $\map P z$ is not zero for any $z \in \C$.
It follows that $1 / \map P z$ must be entire; and is also bounded in the complex plane.
In order to see that it is indeed bounded, we recall that $\exists R \in \R_{>0}$ such that:
   $\cmod {\dfrac 1 {\map P z} } < \dfrac 2 {\cmod {a_n} R^n}, \text{whenever} \ \cmod z > R$.
Hence, $1 / \map P z$ is bounded in the region outside the disk $\cmod z \le R$.
However, $1 / \map P z$ is continuous on that closed disk, and thus it is bounded there as well. 
Furthermore, we observe that $1 / \map P x$ must be bounded in the whole plane.
Through Liouville's Theorem, $1 / \map P x$, and thus $\map P x$, is constant. 
This is a contradiction.
$\blacksquare$


Proof using Cauchy-Goursat Theorem
Let $p: \C \to \C$ be a complex, non-constant polynomial.
Aiming for a contradiction, suppose that $\map p z \ne 0$ for all $z \in \C$.
Now consider the closed contour integral:

$\ds \oint \limits_{\gamma_R} \frac 1 {z \cdot \map p z} \rd z$
where $\gamma_R$ is a circle with radius $R$ around the origin.

By Derivative of Complex Polynomial, the polynomial $z \cdot \map p z$ is holomorphic.
Since $\map p z$ is assumed to have no zeros, the only zero of $z \cdot \map p z$ is $0 \in \C$.
Therefore by Reciprocal of Holomorphic Function $\dfrac 1 {z \cdot \map p z}$ is holomorphic in $\C \setminus \set 0$.
Hence the Cauchy-Goursat Theorem implies that the value of this integral is independent of $R > 0$.

On the one hand, one can calculate the value of this integral in the limit $R \to 0$ (or use Cauchy's Residue Theorem), using the parameterization $z = R e^{i \phi}$ of $\gamma_R$:














\(\ds \lim \limits_{R \mathop \to 0} \oint \limits_{\gamma_R} \frac 1 {z \cdot \map p z} \rd z\)

\(=\)







\(\ds \lim \limits_{R \mathop \to 0} \int \limits_0^{2 \pi} \frac 1 {R e^{i \phi} {\map p {R e^{i \phi} } } } \, i R e^{i \phi} \rd \phi\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \lim \limits_{R \mathop \to 0} \int \limits_0^{2 \pi} \frac i {\map p {R e^{i \phi} } } \rd \phi\)




















\(\ds \)

\(=\)







\(\ds \int \limits_0^{2 \pi} \lim \limits_{R \mathop \to 0} \frac i {\map p {R e^{i \phi} } } \rd \phi\)





Definite Integral of Limit of Uniformly Convergent Sequence of Integrable Functions














\(\ds \)

\(=\)







\(\ds \int \limits_0^{2 \pi} \frac i {\map p 0} \rd \phi\)





Real Polynomial Function is Continuous














\(\ds \)

\(=\)







\(\ds \frac {2 \pi i} {\map p 0}\)









which is non-zero.

On the other hand, we have the following upper bound for the absolute value of the integral:














\(\ds \size {\oint \limits_{\gamma_R} \frac 1 {z \cdot \map p z} \rd z}\)

\(\le\)







\(\ds 2 \pi R \max \limits_{\size z \mathop = R} \paren {\frac 1 {\size {z \cdot \map p z} } }\)





Estimation Lemma for Contour Integrals














\(\ds \)

\(=\)







\(\ds 2 \pi \max \limits_{\size z \mathop = R} \paren {\frac 1 {\size {\map p z} } }\)









But this goes to zero for $R \to \infty$.
We have arrived at a contradiction.
Hence by Proof by Contradiction the assumption that $\map p z \ne 0$ for all $z \in \C$ must be wrong.
$\blacksquare$


Proof using Symmetric Polynomials
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


Elementary Proof
Let $\map p z$ be an arbitrary non-constant polynomial with coefficients in $\C$.
This means that for some $n \in \Z_{ge 1}$ and $a_n \ne 0$:

$\map p z = a_n z^n + a_{n - 1}z^{n - 1} + \dots + a_0$
We have:

$\map p z = a_n z^n \paren {1 + \dfrac {a_{n - 1} } {a_n}z^{-1} + \dots + \dfrac 1 {a_n}z^{-n} } = a_n z^n \paren {1 + \map \OO {z^{-1} } }$
as $\size z \to \infty$.
Hence:

$\ds \lim_{\size z \mathop \to \infty} \size {\map p z} = \infty$
Thus we can pick $R > 0$ large enough so that:

$\ds \inf_{\size z \mathop \ge R} \size {\map p z} > \size {\map p 0}$
It follows that:

$\ds \inf_{z \mathop \in \C} \size {\map p z} = \inf_{\size z \mathop \le R} \size {\map p z}$
Since $D_R = \set {z \in \C : \size z \le R}$ is compact and $p$ is continuous, there exists $z_0 \in D_R$ such that:

$\ds \inf_{\size z \mathop \le R} \size {\map p z} = \size {\map p {z_0} }$
Hence:

$\ds \size {\map p {z_0} } = \inf_{z \mathop \in \C} \size {\map p z}$
It remains to show that $\map p {z_0} = 0$.
Aiming for a contradiction, suppose:

$\map p {z_0} = a \ne 0$
Write:

$\map {z_0 + \zeta} = a + \map q \zeta$
Note that $\map q \zeta$ is a nonconstant polynomial in $\zeta$ satisfying $\map q 0 = 0$.
Hence for some $k \ge 1$ and $b \ne 0$, we have:

$\map q \zeta = b \zeta^k + b_{k + 1} \zeta^{k + 1} + \dots + b_n \zeta^n$
That is:

$\map q \zeta = b \zeta^k + \map \OO {\zeta^{k + 1} }$
as $\zeta \to 0$.
Thus, uniformly in $\omega \in S^1 = \set {\omega \in \C : \size {\omega} = 1}$:

$\map p {z_0 + \epsilon \omega} = a + b \omega^k \epsilon^k + \map \OO {\epsilon^{k + 1} }$
as $\epsilon \searrow 0$.
Since $\size {-\dfrac {a / \size a} {b / \size b} } = 1$, by Euler's theorem, we can pick $\omega \in S^1$ such that:

$\omega^k = -\dfrac {a / \size a} {b / \size b}$
Then:

$\ds \map p {z_0 + \epsilon \omega} = a - a \dfrac {\size b} {\size a} \epsilon^k + \map \OO {\epsilon^{k + 1} } = a \paren {1 - \dfrac {\size b} {\size a} \epsilon^k} + \map \OO {\epsilon^{k + 1} }$
Thus:

$\size {\map p {z_0 + \epsilon\omega} } = \size a \size {1 - \dfrac {\size b} {\size a} \epsilon^k} + \map \OO {\epsilon^{k + 1} }$
Thus for $\epsilon > 0$ small enough:














\(\ds \size {\map p {z_0 + \epsilon \omega} }\)

\(=\)







\(\ds \size a \paren {1 - \dfrac {\size b} {\size a} \epsilon^k} + \map \OO {\epsilon^{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \size a - \size b \epsilon^k + \map \OO {\epsilon^{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \size a - \size b \epsilon^k \paren {1 + \map \OO \epsilon}\)




















\(\ds \)

\(>\)







\(\ds \size a\)









But this contradicts that:

$\size a = \inf_{z \mathop \in \C} \size {\map p z}$
Thus:

$\map p {z_0} = a = 0$
$\blacksquare$


Proof using Cauchy's Integral Formula
Let $p: \C \to \C$ be a complex, non-constant polynomial.
Aiming for a contradiction, suppose that $\map p z \ne 0$ for all $z \in \C$.
Therefore by Reciprocal of Holomorphic Function $\dfrac 1 {\map p z}$ is entire.














\(\ds 0\)

\(<\)







\(\ds \cmod {\dfrac 1 {\map p 0} }\)




















\(\ds \)

\(=\)







\(\ds \cmod {\frac 1 {2 \pi i} \oint_{\set {w \in \C : \cmod w = R} } \frac {\rd z} {z \cdot \map p z} }\)





Cauchy's Integral Formula














\(\ds \)

\(\le\)







\(\ds \frac 1 {2 \pi} \max \limits_{\size z \mathop = R} \paren {\frac 1 {\size {z \cdot \map p z} } } 2 \pi R\)





Estimation Lemma for Contour Integrals














\(\ds \)

\(=\)







\(\ds \max \limits_{\size z \mathop = R} \frac 1 {\size {\map p z} }\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $R \to +\infty$



This is a contradiction.
$\blacksquare$


Also known as
The Fundamental Theorem of Algebra is known in France as d'Alembert's Theorem, for Jean le Rond d'Alembert.
It is also known as the d'Alembert-Gauss Theorem, for Jean le Rond d'Alembert and Carl Friedrich Gauss.


Historical Note
The Fundamental Theorem of Algebra was first conjectured by Albert Girard, who published about it in $1629$, recognising the existence of imaginary roots.

A proof, geometric in nature, of the Fundamental Theorem of Algebra was published in $1746$ by Jean le Rond d'Alembert. It was for some time called D'Alembert's Theorem.
However, it was later discovered that D'Alembert's proof was incorrect.

The first correct proof was published by Carl Friedrich Gauss in his doctoral dissertation in $\text {1799}$:

Demonstratio nova theorematis omnem functionem algebraicam rationalem integram unius variabilis in factores reales primi vel secundi gradus resolvi posse (A new proof of the theorem that every integral rational algebraic function of one variable can be resolved into real factors of the first or second degree)
in which he gave the Fundamental Theorem of Algebra its name.
During the course of his career, he gave a total of four proofs of this theorem.

The first full and rigorous proof in the field of complex numbers was published in $1814$ by Jean-Robert Argand.


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Introduction
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Polynomial Equations
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): fundamental theorem of algebra
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Gauss's proof
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): fundamental theorem of algebra
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Gauss's proof
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Algebra, Fundamental Theorem of




