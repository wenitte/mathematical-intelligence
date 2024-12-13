# 

Source: https://proofwiki.org/wiki/Odd_Power_Function_is_Surjective

Theorem
Let $n \in \Z_{\ge 0}$ be an odd positive integer.
Let $f_n: \R \to \R$ be the real function defined as:

$\map {f_n} x = x^n$

Then $f_n$ is a surjection.


Proof
From Existence of Positive Root of Positive Real Number we have that:

$\forall x \in \R_{\ge 0}: \exists y \in \R: y^n = x$
From Power of Ring Negative:

$\paren {-x}^n = -\paren {x^n}$
and so:

$\forall x \in \R_{\le 0}: \exists y \in \R: y^n = x$
Thus:

$\forall x \in \R: \exists y \in \R: y^n = x$
and so $f_n$ is a surjection.

Hence the result.
$\blacksquare$





