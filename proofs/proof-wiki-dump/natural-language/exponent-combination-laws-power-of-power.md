# 

Source: https://proofwiki.org/wiki/Exponent_Combination_Laws/Power_of_Power


This article is complete as far as it goes, but it could do with expansion.In particular: Needs to be a complex version of this. This will then be renamed to reflect the fact that it is for the real case only.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $a \in \R_{>0}$ be a (strictly) positive real number.
Let $x, y \in \R$ be real numbers.
Let $a^x$ be defined as $a$ to the power of $x$.

Then:

$\paren {a^x}^y = a^{x y}$


Proof 1













\(\ds a^{x y}\)

\(=\)







\(\ds \map \exp {x y \ln a}\)





Definition of Power to Real Number














\(\ds \)

\(=\)







\(\ds \map \exp {y \, \map \ln {a^x} }\)





Logarithms of Powers














\(\ds \)

\(=\)







\(\ds \paren {a^x}^y\)





Definition of Power to Real Number



$\blacksquare$


Proof 2
We will show that:

$\forall \epsilon \in \R_{>0}: \size {a^{x y} - \paren {a^x}^y} < \epsilon$
Without loss of generality, suppose that $x < y$.
Consider $I := \closedint x y$.
Let $I_\Q = I \cap \Q$.
Let $M = \max \set {\size x, \size y}$
Fix $\epsilon \in \R_{>0}$.
From Real Polynomial Function is Continuous:

$\exists \delta' \in \R_{>0}: \size {a^x - a^{x'} } < \delta' \leadsto \size {\paren {a^x}^{y'} - \paren {a^{x'} }^{y'} } < \dfrac \epsilon 4$
From Power Function on Strictly Positive Base is Continuous:










\(\ds \exists \delta_1 \in \R_{>0}: \, \)



\(\ds \size {x x' - y y'}\)

\(<\)







\(\ds \delta_1\)














\(\ds \leadsto \ \ \)





\(\ds \size {a^{x x'} - a^{x y'} }\)

\(<\)







\(\ds \dfrac \epsilon 4\)
















\(\ds \exists \delta_2 \in \R_{>0}: \, \)



\(\ds \size {x y' - x' y'}\)

\(<\)







\(\ds \delta_2\)














\(\ds \leadsto \ \ \)





\(\ds \size {a^{x y'} - a^{x' y'} }\)

\(<\)







\(\ds \dfrac \epsilon 4\)
















\(\ds \exists \delta_3 \in \R_{>0}: \, \)



\(\ds \size {x' - x}\)

\(<\)







\(\ds \delta_3\)














\(\ds \leadsto \ \ \)





\(\ds \size {a^{x'} - a^x}\)

\(<\)







\(\ds \delta'\)














\(\ds \leadsto \ \ \)





\(\ds \size {\paren {a^x}^{y'} - \paren {a^{x'} }^{y'} }\)

\(<\)







\(\ds \dfrac \epsilon 4\)
















\(\ds \exists \delta_4 \in \R_{>0}: \, \)



\(\ds \size {y' - y}\)

\(<\)







\(\ds \delta_4\)














\(\ds \leadsto \ \ \)





\(\ds \size {\paren {a^x}^{y'} - \paren {a^x}^{y} }\)

\(<\)







\(\ds \dfrac \epsilon 4\)










Further:














\(\ds \size {y - y'}\)

\(<\)







\(\ds \frac {\delta_1} {\size x}\)














\(\ds \leadsto \ \ \)





\(\ds \size {x y - x y'}\)

\(=\)







\(\ds \size x \size {y - y'}\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(<\)







\(\ds \size x \frac {\delta_1} {\size x}\)





multiplying both sides by $\size x \ge 0$














\(\ds \)

\(=\)







\(\ds \delta_1\)










and:














\(\ds \size {x - x'}\)

\(<\)







\(\ds \frac {\delta_2} M\)














\(\ds \leadsto \ \ \)





\(\ds \size {x y' - x'y'}\)

\(=\)







\(\ds \size {y'} \size {x - x'}\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds M \size {x - x'}\)





Real Number Ordering is Compatible with Multiplication














\(\ds \)

\(<\)







\(\ds M \frac {\delta_1} M\)





multiplying both sides by $M \ge 0$














\(\ds \)

\(=\)







\(\ds \delta_2\)










Let $\delta = \max \set {\dfrac {\delta_1} {\size x}, \dfrac {\delta_2} M, \delta_3, \delta_4}$.
From Closure of Rational Interval is Closed Real Interval:

$\exists r, s \in I_\Q: \size {x - r} < \delta \land \size {y - s} < \delta$

Thus:














\(\ds \size {a^{x y} - \paren {a^x}^y}\)

\(\le\)







\(\ds \size {a^{x y} - a^{x s} } + \size {a^{x s} - a^{r s} } + \size {a^{r s} - \paren {a^r}^s} + \size {\paren {a^r}^s - \paren {a^x}^s} + \size {\paren {a^x}^s - \paren {a^x}^y}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(=\)







\(\ds \size {a^{x y} - a^{x s} } + \size {a^{x s} - a^{r s} } + \size {\paren {a^r}^s - \paren {a^x}^s} + \size {\paren {a^x}^s - \paren {a^x}^y}\)





Product of Indices of Real Number: Rational Numbers














\(\ds \)

\(<\)







\(\ds \frac \epsilon 4 + \frac \epsilon 4 + \frac \epsilon 4 + \frac \epsilon 4\)





Definition of $r$ and $s$














\(\ds \)

\(=\)







\(\ds \epsilon\)










Hence the result, by Real Plus Epsilon.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 7$: Laws of Exponents: $7.3$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.2$: Numbers, Powers, and Logarithms
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): exponent (index)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): exponent (index)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): index (indices) (iii)




