# 

Source: https://proofwiki.org/wiki/Riemann-Lebesgue_Lemma

Lemma
Let $f \in L^1$.

Then:

$\ds \lim_{n \mathop \to \infty} \int \map f x e^{i n x} \rd x = 0$

That is, the Fourier transform of an $L^1$ function vanishes at infinity.


Proof
First suppose that $\map f x = \map {\chi_{\tuple {a, b} } } x$, the characteristic function of an open interval.
Then:

$\ds \int \map f x e^{i n x} \rd x = \int_a^b e^{i n x} \rd x = \frac {e^{i n b} - e^{i n a} } {i n} \to 0$ as $n \to \infty$

By Sum Rule for Real Sequences, the same holds for an arbitrary simple function.
That is, for any function $f$ of the form:

$\ds f = \sum_{n \mathop = 1}^N c_n \chi_{\tuple {a_i, b_i} }, \qquad c_n \in \R, \qquad a_i \le b_i \in \R$
we have that:

$\ds \lim_{n \mathop \to \infty} \ds \int \map f x e^{i n x} \rd x = 0$

Finally, let $f \in L^1$ be arbitrary.
Let $\epsilon \in \R_{>0}$ be fixed.
From Space of Simple P-Integrable Functions is Everywhere Dense in Lebesgue Space, there exists a simple function $g$ such that:

$\ds \int \size {f - g} < \epsilon$
By our previous argument and the definition of a limit of a complex function, there exists $N \in \N$ such that for all $n > N$:

$\ds \size {\int \map g x e^{i n x} \rd x} < \epsilon$
By Integral of Integrable Function is Additive:

$\ds \int \map f x e^{i n x} \rd x = \int \paren {\map f x - \map g x} e^{i n x} \rd x + \int \map g x e^{i n x} \rd x$
By the Triangle Inequality, Absolute Value of Definite Integral, Complex Modulus of Product of Complex Numbers and Euler's Formula:

$\ds \size {\int \map f x e^{i n x} \rd x} \le \int \size {\map f x - \map g x} \rd x + \size {\int \map g x e^{i n x} \rd x}$
For all $n > N$, the right hand side is bounded by $2 \epsilon$ by our previous arguments.
Since $\epsilon$ was arbitrary, this establishes:

$\ds \lim_{n \mathop \to \infty} \int \map f x e^{i n x} \rd x = 0$
for all $f \in L^1$.
$\blacksquare$


Source of Name
This entry was named for Georg Friedrich Bernhard Riemann and Henri Léon Lebesgue.





