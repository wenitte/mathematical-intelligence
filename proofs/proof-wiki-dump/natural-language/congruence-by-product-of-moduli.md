# 

Source: https://proofwiki.org/wiki/Congruence_by_Product_of_Moduli



Theorem
Let $a, b, m \in \Z$.
Let $a \equiv b \pmod m$ denote that $a$ is congruent to $b$ modulo $m$.

Then $\forall n \in \Z, n \ne 0$:

$a \equiv b \pmod m \iff a n \equiv b n \pmod {m n}$


Real Modulus
Let $a, b, z \in \R$.
Let $a \equiv b \pmod z$ denote that $a$ is congruent to $b$ modulo $z$.

Then $\forall y \in \R, y \ne 0$:

$a \equiv b \pmod z \iff y a \equiv y b \pmod {y z}$


Proof
Let $n \in \Z: n \ne 0$.
Then:














\(\ds a\)

\(\equiv\)







\(\ds b\)

\(\ds \pmod m\)












\(\ds \leadstoandfrom \ \ \)





\(\ds a \bmod m\)

\(=\)







\(\ds b \bmod m\)





Definition of Congruence Modulo Integer








\(\ds \leadstoandfrom \ \ \)





\(\ds n \paren {a \bmod n}\)

\(=\)







\(\ds n \paren {b \bmod n}\)





Left hand implication valid only when $n \ne 0$








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {a n} \bmod \paren {m n}\)

\(=\)







\(\ds \paren {b n} \bmod \paren {m n}\)





Product Distributes over Modulo Operation








\(\ds \leadstoandfrom \ \ \)





\(\ds a n\)

\(\equiv\)







\(\ds b n\)

\(\ds \pmod {m n}\)



Definition of Congruence Modulo Integer



Hence the result.
Note the invalidity of the third step when $n = 0$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Law $\text{C}$




