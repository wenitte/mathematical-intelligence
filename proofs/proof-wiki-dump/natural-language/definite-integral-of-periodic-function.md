# 

Source: https://proofwiki.org/wiki/Definite_Integral_of_Periodic_Function

Theorem
Let $f$ be a Darboux integrable periodic function with period $L$.
Let $\alpha \in \R$ and $n \in \Z$.
Then:

$\ds \int_\alpha^{\alpha + n L} \map f x \d x = n \int_0^L \map f x \d x$


Proof
For $n \ge 0$:














\(\ds \int_\alpha^{\alpha + n L} \map f x \d x\)

\(=\)







\(\ds \int_\alpha^0 \map f x \d x + \sum_{k \mathop = 0}^{n - 1} \int_{k L}^{\paren {k + 1} L} \map f x \d x + \int_{n L}^{\alpha + n L} \map f x \d x\)





Sum of Integrals on Adjacent Intervals for Integrable Functions/Corollary














\(\ds \)

\(=\)







\(\ds \int_\alpha^0 \map f x \d x + \sum_{k \mathop = 0}^{n - 1} \int_{k L}^{\paren {k + 1} L} \map f {x - k L} \d x + \int_{n L}^{\alpha + n L} \map f {x - n L} \d x\)





General Periodicity Property














\(\ds \)

\(=\)







\(\ds \int_\alpha^0 \map f x \d x + \sum_{k \mathop = 0}^{n - 1} \int_0^L \map f x \d x + \int_0^\alpha \map f x \d x\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds n \int_0^L \map f x \d x\)





Reversal of Limits of Definite Integral




For $n < 0$:














\(\ds \int_\alpha^{\alpha + n L} \map f x \d x\)

\(=\)







\(\ds -\int_{\alpha + n L}^\alpha \map f x \d x\)





Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds -\int_{\alpha + n L}^{\alpha + n L + \paren {-n L} } \map f x \d x\)




















\(\ds \)

\(=\)







\(\ds -\paren {-n \int_0^L \map f x \d x}\)





by the above; $-n > 0$














\(\ds \)

\(=\)







\(\ds n \int_0^L \map f x \d x\)









Hence the result.
$\blacksquare$





