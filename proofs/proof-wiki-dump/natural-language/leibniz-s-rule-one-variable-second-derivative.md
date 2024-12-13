# 

Source: https://proofwiki.org/wiki/Leibniz%27s_Rule/One_Variable/Second_Derivative



Theorem
Let $f$ and $g$ be real functions defined on the open interval $I$.
Let $x \in I$ be a point in $I$ at which both $f$ and $g$ are twice differentiable.

Then:

$\paren {\map f x \map g x}' ' = \map f x \map {g' '} x + 2 \map {f'} x \map {g'} x + \map {f' '} x \map g x$


Proof
From Leibniz's Rule in One Variable:

$\ds \paren {\map f x \map g x}^{\paren n} = \sum_{k \mathop = 0}^n \binom n k \map {f^{\paren k} } x \map {g^{\paren {n - k} } } x$
where $\paren n$ denotes the order of the derivative.

Setting $n = 2$:














\(\ds \paren {\map f x \map g x}' '\)

\(=\)







\(\ds \paren {\map f x \map g x}^{\paren 2}\)





Definition of Nth Derivative














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^2 \binom n k \map {f^{\paren k} } x \map {g^{\paren {n - k} } } x\)





Leibniz's Rule in One Variable














\(\ds \)

\(=\)







\(\ds \binom 2 0 \map {f^{\paren 0} } x \map {g^{\paren 2} } x + \binom 2 1 \map {f^{\paren 1} } x \map {g^{\paren 1} } x + \binom 2 2 {f^{\paren 2} } x \map {g^{\paren 0} } x\)




















\(\ds \)

\(=\)







\(\ds \map {f^{\paren 0} } x \map {g^{\paren 2 } } x + 2 \map {f^{\paren 1} } x \map {g^{\paren 1} } x + \map {f^{\paren 2} } x \map {g^{\paren 0} } x\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \map f x \map {g' '} x + 2 \map {f'} x \map {g'} x + \map {f' '} x \map g x\)





Definition of Nth Derivative



$\blacksquare$


Source of Name
This entry was named for Gottfried Wilhelm von Leibniz.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 13$: Leibnitz's Rule for Higher Derivatives of Products: $13.47$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Leibniz theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Leibniz theorem




