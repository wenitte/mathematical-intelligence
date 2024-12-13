# 

Source: https://proofwiki.org/wiki/Modulo_Multiplication_is_Well-Defined/Warning

Theorem
Let $z \in \R$ be a real number.
Let:

$a \equiv b \pmod z$
and:

$x \equiv y \pmod z$
where $a, b, x, y \in \R$.

Then it does not necessarily hold that:

$a x \equiv b y \pmod z$


Proof













\(\ds a\)

\(\equiv\)







\(\ds b\)

\(\ds \pmod m\)


















\(\ds x\)

\(\equiv\)







\(\ds y\)

\(\ds \pmod m\)












\(\ds \leadsto \ \ \)





\(\ds a \bmod m\)

\(=\)







\(\ds b \bmod m\)





Definition of Congruence














\(\ds x \bmod m\)

\(=\)







\(\ds y \bmod m\)














\(\ds \leadsto \ \ \)

\(\ds \exists k_1 \in \Z: \, \)



\(\ds a\)

\(=\)







\(\ds b + k_1 z\)
















\(\ds \exists k_2 \in \Z: \, \)



\(\ds x\)

\(=\)







\(\ds y + k_2 z\)














\(\ds \leadsto \ \ \)





\(\ds a x\)

\(=\)







\(\ds \paren {b + k_1 z} \paren {y + k_2 z}\)





Definition of Multiplication














\(\ds \)

\(=\)







\(\ds b y + b k_2 z + y k_1 z + k_1 k_2 z^2\)





Integer Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds b y + \paren {b k_2 + y k_1 + k_1 k_2 z} z\)










But it is not necessarily the case that:

$b k_2 + y k_1 + k_1 k_2 z$
is an integer.
In fact, $b k_2 + y k_1 + k_1 k_2 z$ can only be guaranteed to be an integer if each of $b, y, z \in \Z$.
Hence $a b$ is not necessarily congruent to $x y$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $24$




