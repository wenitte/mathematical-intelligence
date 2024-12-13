# 

Source: https://proofwiki.org/wiki/Higher_Derivatives_of_Exponential_Function/Corollary

Corollary to Higher Derivatives of Exponential Function
Let $\exp x$ be the exponential function.
Let $c$ be a constant.
Then:

$\map {\dfrac {\d^n} {\d x^n} } {\map \exp {c x} } = c^n \map \exp {c x}$


Proof
From Derivatives of Function of $a x + b$:

$\map {\dfrac {\d^n} {\d x^n} } {\map f {a x + b} } = a^n \map {\dfrac {\d^n} {\d z^n} } {\map f z}$
where $z = a x + b$.

Here we set $a = c$ and $b = 0$ so that:

$\map {\dfrac {\d^n} {\d x^n} } {\map f {c x} } = c^n \map {\dfrac {\d^n} {\d z^n} } {\map f z}$
where $z = c x$.

Then from Higher Derivatives of Exponential Function:

$\map {\dfrac {\d^n} {\d z^n} } {\exp z} = \exp z$

Hence the result.
$\blacksquare$





