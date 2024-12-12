# 

Source: https://proofwiki.org/wiki/Cayley-Dickson_Construction_from_Real_Star-Algebra_is_Commutative

Theorem
Let $A = \struct {A_F, \oplus}$ be a $*$-algebra.
Let $A' = \struct {A_F, \oplus'}$ be constructed from $A$ using the Cayley-Dickson construction.

Then $A$ is a real star-algebra if and only if $A'$ is a commutative algebra.


Proof
Let the conjugation operator on $A$ be $*$.
Let $\tuple {a, b}, \tuple {c, d} \in A'$.

Let $A$ be a real star-algebra.














\(\ds \tuple {a, b} \oplus' \tuple {c, d}\)

\(=\)







\(\ds \tuple {a \oplus c - d \oplus b^*, a^* \oplus d + c \oplus b}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a \oplus c - d \oplus b^*, a^* \oplus d + c \oplus b}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a \oplus c - d \oplus b, a \oplus d + c \oplus b}\)





Definition of Real Star-Algebra: $a = a^*$ and $b = b^*$














\(\ds \)

\(=\)







\(\ds \tuple {c \oplus a - b \oplus d, c \oplus b + a \oplus d}\)





Real Star-Algebra is Commutative, Real Addition is Commutative














\(\ds \)

\(=\)







\(\ds \tuple {c \oplus a - b \oplus d^*, c^* \oplus b + a \oplus d}\)





Definition of Real Star-Algebra: $d = d^*$ and $c = c^*$














\(\ds \)

\(=\)







\(\ds \tuple {c, d} \oplus' \tuple {a, b}\)









So $A'$ is a commutative algebra.
$\Box$

Let $A'$ be a commutative algebra.
By picking apart the above equations, it is clear that for $A'$ to be a commutative algebra it is necessary for $A$ to be both real and commutative.
Hence the result.
$\blacksquare$


Sources
John C. Baez: The Octonions (2002): 2.2 The Cayley-Dickson Construction: Proposition $2$




