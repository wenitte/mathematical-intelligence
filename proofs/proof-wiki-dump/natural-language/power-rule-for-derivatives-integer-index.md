# 

Source: https://proofwiki.org/wiki/Power_Rule_for_Derivatives/Integer_Index

Theorem
Let $n \in \Z$.
Let $f: \R \to \R$ be the real function defined as $\map f x = x^n$.

Then:

$\map {f'} x = n x^{n - 1}$
everywhere that $\map f x = x^n$ is defined.

When $x = 0$ and $n = 0$, $\map {f'} x$ is undefined.


Proof
When $n \ge 0$ we use the result for Natural Number Index.
Now let $n \in \Z: n < 0$.
Then let $m = -n$ and so $m > 0$.
Thus $x^n = \dfrac 1 {x^m}$.














\(\ds \map D {x^n}\)

\(=\)







\(\ds \map D {\frac 1 {x^m} }\)




















\(\ds \)

\(=\)







\(\ds \frac {x^m \cdot 0 - 1 \cdot m x^{m - 1} } {x^{2 m} }\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -m x^{-m - 1}\)




















\(\ds \)

\(=\)







\(\ds n x^{n - 1}\)









$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 10.11 \ (2)$




