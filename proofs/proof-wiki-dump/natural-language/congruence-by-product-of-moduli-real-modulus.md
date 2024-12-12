# 

Source: https://proofwiki.org/wiki/Congruence_by_Product_of_Moduli/Real_Modulus

Theorem
Let $a, b, z \in \R$.
Let $a \equiv b \pmod z$ denote that $a$ is congruent to $b$ modulo $z$.

Then $\forall y \in \R, y \ne 0$:

$a \equiv b \pmod z \iff y a \equiv y b \pmod {y z}$


Proof
Let $y \in \R: y \ne 0$.
Then:














\(\ds a\)

\(\equiv\)







\(\ds b\)

\(\ds \pmod z\)












\(\ds \leadstoandfrom \ \ \)





\(\ds a \bmod z\)

\(=\)







\(\ds b \bmod z\)





Definition of Congruence








\(\ds \leadstoandfrom \ \ \)





\(\ds y \paren {a \bmod z}\)

\(=\)







\(\ds y \paren {b \bmod z}\)





Left hand implication valid only when $y \ne 0$








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {y a} \bmod \paren {y z}\)

\(=\)







\(\ds \paren {y b} \bmod \paren {y z}\)





Product Distributes over Modulo Operation














\(\ds y a\)

\(\equiv\)







\(\ds y b\)

\(\ds \pmod {y z}\)



Definition of Congruence



Hence the result.
Note the invalidity of the third step when $y = 0$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $24$




