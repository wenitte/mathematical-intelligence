# 

Source: https://proofwiki.org/wiki/Leibniz%27s_Rule/One_Variable/Examples/8th_Derivative_of_x%5E2_sin_x

Example of Use of Leibniz's Rule in One Variable
The $8$th derivative with respect to $x$ of $x^2 \sin x$ is given by:

$\dfrac {\d^8} {\d x^8} x^2 \sin x = x^2 \sin x - 16 x \cos x - 56 \sin x$


Proof
Leibniz's Rule in One Variable gives:

$\ds \paren {\map f x \, \map g x}^{\paren n} = \sum_{k \mathop = 0}^n \binom n k \map {f^{\paren k} } x \, \map {g^{\paren {n - k} } } x$
where $\paren n$ denotes the order of the derivative.

Here we take:

$\map f x = x^2$
$\map g x = \sin x$

We note that:














\(\ds \dfrac {\d f} {d x}\)

\(=\)







\(\ds \dfrac \d {d x} x^2\)




















\(\ds \)

\(=\)







\(\ds 2 x\)






















\(\ds \dfrac {\d^2 f} {d x^2}\)

\(=\)







\(\ds \dfrac {\d^2} {d x^2} 2 x\)




















\(\ds \)

\(=\)







\(\ds 2\)









and for all $n > 2$:

$\dfrac {\d^n f} {d x^n} = 0$

Hence we need investigate only $\dfrac {\d^n g} {d x^n}$ where $n \in \set {6, 7, 8}$.
Thus:














\(\ds \dfrac {\d^8 g} {d x^8}\)

\(=\)







\(\ds \dfrac {\d^8} {d x^8} \sin x\)




















\(\ds \)

\(=\)







\(\ds \sin x\)
























\(\ds \dfrac {\d^7 g} {d x^7}\)

\(=\)







\(\ds \dfrac {\d^7} {d x^7} \sin x\)




















\(\ds \)

\(=\)







\(\ds -\cos x\)
























\(\ds \dfrac {\d^6 g} {d x^6}\)

\(=\)







\(\ds \dfrac {\d^6} {d x^6} \sin x\)




















\(\ds \)

\(=\)







\(\ds -\sin x\)










Hence:














\(\ds \dfrac {\d^8} {\d x^8} x^2 \sin x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^8 \binom 8 k \map {f^{\paren k} } x \, \map {g^{\paren {8 - k} } } x\)




















\(\ds \)

\(=\)







\(\ds \binom 8 0 x^2 \sin x + \binom 8 1 2 x \paren {-\cos x} + \binom 8 2 2 \paren {-\sin x}\)




















\(\ds \)

\(=\)







\(\ds x^2 \sin x - 8 \times 2 x \cos x - 28 \times 2 \sin x\)




















\(\ds \)

\(=\)







\(\ds x^2 \sin x - 16 x \cos x - 56 \sin x\)









$\blacksquare$


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Leibniz's Theorem




