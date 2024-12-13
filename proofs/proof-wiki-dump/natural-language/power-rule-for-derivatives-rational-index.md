# 

Source: https://proofwiki.org/wiki/Power_Rule_for_Derivatives/Rational_Index

Theorem
Let $n \in \Q$.
Let $f: \R \to \R$ be the real function defined as $f \left({x}\right) = x^n$.

Then:

$\map {f'} x = n x^{n-1}$
everywhere that $\map f x = x^n$ is defined.

When $x = 0$ and $n = 0$, $\map {f'} x$ is undefined.


Proof
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


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 10.15 \ (2)$




