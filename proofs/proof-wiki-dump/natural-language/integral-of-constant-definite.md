# 

Source: https://proofwiki.org/wiki/Integral_of_Constant/Definite



Theorem
Let $c$ be a constant.

$\ds \int_a^b c \rd x = c \paren {b - a}$


Corollary
$\ds \int_a^b \rd x = b - a$


Proof
Let $f_c: \R \to \R$ be the constant function.
By definition:

$\forall x \in \R: \map {f_c} x = c$
Thus:

$\map \sup {f_c} = \map \inf {f_c} = c$
So from Darboux's Theorem, we have:

$\ds c \paren {b - a} \le \int_a^b c \rd x \le c \paren {b - a}$
Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.5$




