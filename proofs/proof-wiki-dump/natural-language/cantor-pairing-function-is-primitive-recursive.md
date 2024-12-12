# 

Source: https://proofwiki.org/wiki/Cantor_Pairing_Function_is_Primitive_Recursive

Theorem
The Cantor pairing function is primitive recursive.


Proof
The Cantor pairing function $\pi : \N^2 \to \N$ is defined as:

$\map \pi {m, n} = \frac 1 2 \paren {m + n} \paren {m + n + 1} + m$
As Cantor Pairing Function is Well-Defined, the function could also be defined as:

$\map \pi {m, n} = \map {\operatorname{quot}} {\paren {m + n} \paren {m + n + 1}, 2} + m$
which is primitive recursive, as it is obtained by substitution from:

Addition is Primitive Recursive
Quotient is Primitive Recursive
Constant Function is Primitive Recursive
$\blacksquare$





