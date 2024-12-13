# 

Source: https://proofwiki.org/wiki/Leibniz%27s_Integral_Rule



Theorem
Let $\map f {x, t}$, $\map a t$, $\map b t$ be continuously differentiable real functions on some region $R$ of the $\tuple {x, t}$ plane.

Then for all $\tuple {x, t} \in R$:

$\ds \frac \d {\d t} \int_{\map a t}^{\map b t} \map f {x, t} \rd x = \map f {\map b t, t} \frac {\d b} {\d t} - \map f {\map a t, t} \frac {\d a} {\d t} + \int_{\map a t}^{\map b t} \frac \partial {\partial t} \map f {x, t} \rd x$


Proof













\(\ds \frac \d {\d t} \int_{\map a t}^{\map b t} \map f {x, t} \rd x\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 h \paren {\int_{\map a {t + h} }^{\map b {t + h} } \map f {x, t + h} \rd x - \int_{\map a t}^{\map b t} \map f {x, t} \rd x }\)





Definition of Derivative of Real Function














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 h \paren {\int_{\map a {t + h} }^{\map a t} \map f {x, t + h} \rd x + \int_{\map a t}^{\map b t} \map f {x, t + h} \rd x
            + \int_{\map b t}^{\map b {t + h} } \map f {x, t + h} \rd x - \int_{\map a t}^{\map b t} \map f {x, t} \rd x }\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 h \paren {\int_{\map b t}^{\map b {t + h} } \map f {x, t + h} \rd x - \int_{\map a t}^{\map a {t + h} } \map f {x, t + h} \rd x
            + \int_{\map a t}^{\map b t} \paren {\map f {x, t + h} - \map f {x, t} } \rd x}\)





Linear Combination of Integrals




By the Mean Value Theorem for Integrals, there exist $\xi_a \in \closedint {\map a t} {\map a {t + h} }$ and $\xi_b \in \closedint {\map b t} {\map b {t + h} }$ such that:














\(\ds \frac \d {\d t} \int_{\map a t}^{\map b t} \map f {x, t} \rd x\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 h \paren {\paren {\map b {t + h} - \map b t} \map f {\xi_b, t + h} - \paren {\map a {t + h} - \map a t} \map f {\xi_a, t + h}
            + \int_{\map a t}^{\map b t} \paren {\map f {x, t + h} - \map f {x, t} } \rd x}\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map b {t + h} - \map b t} h \cdot \lim_{h \mathop \to 0} \map f {\xi_b, t + h}
            - \lim_{h \mathop \to 0} \frac{\map a {t + h} - \map a t} h \cdot \lim_{h \mathop \to 0} \map f {\xi_a, t + h}
            + \lim_{h \mathop \to 0} \int_{\map a t}^{\map b t} \frac {\map f {x, t + h} - \map f {x, t} } h \rd x\)





Combination Theorem for Limits of Real Functions, Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds \frac {\d b} {\d t} \map f {\map b t, t} - \frac {\d a} {\d t} \map f {\map a t, t} + \lim_{h \mathop \to 0} \int_{\map a t}^{\map b t} \frac {\map f {x, t + h} - \map f {x, t} } h \rd x\)





Definition of Derivative of Real Function, as well as $\xi_a \to \map a t$ and $\xi_b \to \map b t$ as $h \to 0$




Now, consider the last term:

$\ds \lim_{h \mathop \to 0} \int_{\map a t}^{\map b t} \frac {\map f {x, t + h} - \map f {x, t} } h \rd x$
By Limit of Function by Convergent Sequences, it suffices to find the following for an arbitrary sequence $\sequence {h_n}_{n \mathop \in \N}$ such that $\ds \lim_{n \mathop \to \infty} h_n = 0$:

$\ds \lim_{n \mathop \to 0} \int_{\map a t}^{\map b t} \frac {\map f {x, t + h_n} - \map f {x, t} } {h_n} \rd x$
Fix such as sequence, as well as a value for $t$.
For each $n \in \N$, define a function $\map {f_n} x$ as:

$\map {f_n} x = \frac {\map f {x, t + h_n} - \map f {x, t} } {h_n}$
when $\tuple {x, t}$ and $\tuple {x, t + h_n}$ are in $R$.
By the Extreme Value Theorem:

$M = \sup_{\tuple x \in R_t} \size {\frac \partial {\partial t} \map f {x, t} }$
is well-defined, where $R_t$ is the subset of $R$ where $t$ matches our chosen value.
Then, from the Mean Value Theorem, it follows that:

$\size {\map {f_n} x} \le M$
for all values of $n$ and $x$.
By Limit of Function by Convergent Sequences, as $n \to \infty$:

$\ds \map {f_n} x \to \lim_{h \mathop \to 0} \frac {\map f {x, t + h} - \map f {x, t} } h = \frac \partial {\partial t} \map f {x, t}$
by definition of Partial Derivative.
Therefore, by Lebesgue's Dominated Convergence Theorem:

$\ds \lim_{n \mathop \to 0} \int_{\map a t}^{\map b t} \frac {\map f {x, t + h_n} - \map f {x, t} } {h_n} \rd x = \int_{\map a t}^{\map b t} \frac \partial {\partial t} \map f {x, t} \rd x$

Combining with the result from before:

$\ds \frac \d {\d t} \int_{\map a t}^{\map b t} \map f {x, t} \rd x = \frac {\d b} {\d t} \map f {\map b t, t} - \frac {\d a} {\d t} \map f {\map a t, t} + \int_{\map a t}^{\map b t} \frac \partial {\partial t} \map f {x, t} \rd x$
$\blacksquare$


Also known as
Leibniz's Integral Rule is also referred to in some sources as Leibniz's Rule, but as this name is also used for a different result, it is necessary to distinguish between the two. 
Other popular names for this technique include differentiation under the integral sign and Feynman's technique after physicist Richard Feynman.
Sources often refer to Leibnitz's Rule for Differentiation of Integrals or Leibnitz's Rule for Differentiation of an Integral or some such.


Also see
Definite Integral of Partial Derivative, where $\map a t$ and $\map b t$ are constant:
$\ds \frac {\rd} {\rd t} \int_a^b \map f {x, t} \rd x = \int_a^b \frac {\partial} {\partial t} \map f {x, t} \rd x$


Source of Name
This entry was named for Gottfried Wilhelm von Leibniz.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Leibniz's Theorem for Differentiation of an Integral: $3.3.7$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Leibnitz's Rule for Differentiation of Integrals: $15.14$
Weisstein, Eric W. "Leibniz Integral Rule." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/LeibnizIntegralRule.html




