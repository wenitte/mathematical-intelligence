# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Reciprocal_of_Power_of_x

Theorem
The improper integral

$\ds \int_1^\infty \dfrac {\d t} {t^x}$
exists if and only if $x > 1$.


Proof
First let $x \ne 1$.
Then:














\(\ds \int_1^\infty \dfrac {\d t} {t^x}\)

\(=\)







\(\ds \lim_{P \mathop \to \infty} \int_1^P t^{-x} \rd t\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{P \mathop \to \infty} \intlimits {\dfrac {t^{-x + 1} } {-x + 1} } 1 P\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \lim_{P \mathop \to \infty} \paren {\dfrac {P^{1 - x} } {1 - x} - \dfrac {1^{1 - x} } {1 - x} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{P \mathop \to \infty} \dfrac 1 {x - 1} \paren {1 - \dfrac 1 {P^{x - 1} } }\)





simplifying




If $x > 1$, then $x - 1 > 0$.
Hence from Sequence of Powers of Reciprocals is Null Sequence, $\dfrac 1 {P^{x - 1} } \to 0$ as $P \to +\infty$.

If $x < 1$, then $x - 1 < 0$.
Hence $P^{x - 1} \to 0$ as $P \to +\infty$.
Then from Reciprocal of Null Sequence it follows that $\dfrac 1 {P^{x - 1} } \to \infty$ as $P \to +\infty$.

Finally we have that from Integral of Reciprocal is Divergent:

$\ds \lim_{P \mathop \to \infty} \int_1^P \dfrac {\d t} t \to \infty$
All cases are covered, and the result follows.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.34 \ (3)$
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.2$: Summary of convergence tests




