# 

Source: https://proofwiki.org/wiki/Modulo_Operation/Examples/0.11_mod_0.1



Theorem
$0 \cdotp 11 \bmod 0 \cdotp 1 = 0 \cdotp 01$
where $\bmod$ denotes the modulo operation.


Proof 1
By definition of modulo operation:

$x \bmod y := x - y \floor {\dfrac x y}$
for $y \ne 0$.

We have:














\(\ds \dfrac {0 \cdotp 11} {0 \cdotp 1}\)

\(=\)







\(\ds \dfrac {1 \cdotp 1} 1\)




















\(\ds \)

\(=\)







\(\ds 1 \cdotp 1\)









and so:

$\floor {\dfrac {0 \cdotp 11} {0 \cdotp 1} } = 1$

Thus:














\(\ds 0 \cdotp 11 \bmod 0 \cdotp 1\)

\(=\)







\(\ds 0 \cdotp 11 - 0 \cdotp 1 \times \floor {\dfrac {0 \cdotp 11} {0 \cdotp 1} }\)




















\(\ds \)

\(=\)







\(\ds 0 \cdotp 11 - 0 \cdotp 1 \times 1\)




















\(\ds \)

\(=\)







\(\ds 0 \cdotp 01\)









$\blacksquare$


Proof 2
From Modulo Operation: $1 \cdotp 1 \bmod 1$:

$1 \cdotp 1 \bmod 1 = 0 \cdotp 1$

From Product Distributes over Modulo Operation:

$z \left({x \bmod y}\right) = \left({z x}\right) \bmod \left({z y}\right)$
and so:














\(\ds 0 \cdotp 11 \bmod 0 \cdotp 1\)

\(=\)







\(\ds 0 \cdotp 1 \left({1 \cdotp 1 \bmod 1}\right)\)




















\(\ds \)

\(=\)







\(\ds 0 \cdotp 1 \times 0 \cdotp 1\)




















\(\ds \)

\(=\)







\(\ds 0 \cdotp 01\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $10$




