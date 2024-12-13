# 

Source: https://proofwiki.org/wiki/Product_of_Indices_of_Real_Number/Integers

Theorem
Let $r \in \R_{> 0}$ be a positive real number.
Let $n, m \in \Z$ be positive integers.
Let $r^n$ be defined as $r$ to the power of $n$.

Then:

$\paren {r^n}^m = r^{n m}$


Proof
From Product of Indices of Real Number: Positive Integers, we have that:

$m \in \Z_{\ge 0}: \forall n \in \Z: \paren {r^n}^m = r^{n m}$

It remains to be shown that:

$\forall m \in \Z_{<0}: \forall n \in \Z: \paren {r^n}^m = r^{n m}$

As $m < 0$ we have that $m = -p$ for some $p \in \Z_{> 0}$.
Thus:














\(\ds \paren {r^n}^{- p}\)

\(=\)







\(\ds \dfrac 1 {\paren {r^n}^p}\)





Real Number to Negative Power: Integer














\(\ds \)

\(=\)







\(\ds \dfrac 1 {r^{n p} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds r^{-n p}\)





Real Number to Negative Power: Integer



Hence the result, by replacing $-p$ with $m$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.2$: Numbers, Powers, and Logarithms: $(5)$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.2$: Numbers, Powers, and Logarithms: Exercise $7$




