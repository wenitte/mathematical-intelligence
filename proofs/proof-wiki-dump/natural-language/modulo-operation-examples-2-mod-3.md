# 

Source: https://proofwiki.org/wiki/Modulo_Operation/Examples/-2_mod_3

Theorem
$-2 \bmod 3 = 1$
where $\bmod$ denotes the modulo operation.


Proof
By definition of modulo operation:

$x \bmod y := x - y \floor {\dfrac x y}$
for $y \ne 0$.

We have:

$\dfrac {-2} 3 = -1 + \dfrac 1 3$
and so:

$\floor {\dfrac {-2} 3} = -1$
Thus:

$-2 \bmod 3 = -2 - 3 \times \floor {\dfrac {-2} 3} = -2 - 3 \times \paren {-1} = 1$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: $(3)$




