# 

Source: https://proofwiki.org/wiki/Integer_as_Difference_between_Two_Squares/Formulation_2

Theorem
Any integer can be expressed as the difference of two squares if and only if that integer is NOT $n \equiv 2 \pmod 4$


Proof
Each integer will be in one of the  4 sets of residue classes modulo $4$:
$n \equiv 0 \pmod 4$
$n \equiv 1 \pmod 4$
$n \equiv 2 \pmod 4$
$n \equiv 3 \pmod 4$













\(\ds 4x\)

\(=\)







\(\ds \paren{x + 1 }^2 - \paren{x - 1 }^2\)




















\(\ds 4x + 1\)

\(=\)







\(\ds \paren{2x + 1 }^2 - 4x^2\)




















\(\ds 4x + 3\)

\(=\)







\(\ds \paren{2x + 2 }^2 - \paren{2x + 1 }^2\)









For $n \equiv 2 \pmod 4$, it is impossible to represent such an integer as the difference of two squares.
Taking the squares of each of the residue classes, we have:

$0^2 \equiv 0 \pmod 4$
$1^2 \equiv 1 \pmod 4$
$2^2 \equiv 0 \pmod 4$
$3^2 \equiv 1 \pmod 4$
Therefore, when taking the difference of two squares, $n \equiv 2 \pmod 4$ is never a result.
$0 - 0 \equiv 0 \pmod 4$
$1 - 1 \equiv 0 \pmod 4$
$0 - 1 \equiv 3 \pmod 4$
$1 - 0 \equiv 1 \pmod 4$

$\blacksquare$





