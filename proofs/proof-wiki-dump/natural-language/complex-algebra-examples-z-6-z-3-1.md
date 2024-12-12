# 

Source: https://proofwiki.org/wiki/Complex_Algebra/Examples/z%5E6_%2B_z%5E3_%2B_1

Example of Complex Algebra
$z^6 + z^3 + 1 = \paren {z^2 - 2 z \cos \dfrac {2 \pi} 9 + 1} \paren {z^2 - 2 z \cos \dfrac {4 \pi} 9 + 1} \paren {z^2 - 2 z \cos \dfrac {8 \pi} 9 + 1}$


Proof
From Sum of Geometric Sequence or Difference of Two Cubes:

$z^6 + z^3 + 1 = \dfrac {z^9 - 1} {z^3 - 1}$
Then from Factorisation of $x^{2 n + 1} - 1$ in Real Domain:

$z^9 - 1 = \paren {z - 1} \ds \prod_{k \mathop = 1}^4 \paren {z^2 - 2 \cos \dfrac {2 \pi k} 9 + 1}$
and:














\(\ds z^3 - 1\)

\(=\)







\(\ds \paren {z - 1} \prod_{k \mathop = 1}^1 \paren {z^2 - 2 \cos \dfrac {2 \pi k} 3 + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {z - 1} \paren {z^2 - 2 \cos \dfrac {2 \pi} 3 + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {z - 1} \paren {z^2 - 2 \cos \dfrac {6 \pi} 9 + 1}\)









Thus:

$\paren {z^3 - 1} \paren {z^6 + z^3 + 1} = \paren {\paren {z - 1} \paren {z^2 - 2 \cos \dfrac {6 \pi} 9 + 1} } \paren {\paren {z^2 - 2 \cos \dfrac {2 \pi} 9 + 1} \paren {z^2 - 2 \cos \dfrac {4 \pi} 9 + 1} \paren {z^2 - 2 \cos \dfrac {8 \pi} 9 + 1} }$
from which:

$\paren {z^6 + z^3 + 1} = \paren {z^2 - 2 \cos \dfrac {2 \pi} 9 + 1} \paren {z^2 - 2 \cos \dfrac {4 \pi} 9 + 1} \paren {z^2 - 2 \cos \dfrac {8 \pi} 9 + 1}$
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 3$. Roots of Unity: Example $6$: $(3.14)$




