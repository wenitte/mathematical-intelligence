# 

Source: https://proofwiki.org/wiki/Cayley-Dickson_Construction_from_Commutative_Associative_Algebra_is_Associative

Theorem
Let $A = \struct {A_F, \oplus}$ be a $*$-algebra.
Let $A' = \struct {A_F, \oplus'}$ be constructed from $A$ using the Cayley-Dickson construction.

Then:

$A'$ is an associative algebra
if and only if:

$A$ is both a commutative algebra and an associative algebra.


Proof
Let the conjugation operator on $A$ be $*$.
Let $\tuple {a, b}, \tuple {c, d}, \tuple {e, f} \in A'$.

In order to streamline notation, let $\oplus$ and $\oplus'$ both be denoted by product notation:

$a \oplus b =: a b$
$x \oplus' y =: x y$
The context will make it clear which is meant.

Suppose $A$ is commutative and associative.
Then:














\(\ds \)

\(\)







\(\ds \paren {\tuple {a, b} \tuple {c, d} } \tuple {e, f}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a c - d b^*, a^* d + c b} \tuple {e, f}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {a c - d b^*} e - f \paren {a^* d + c b}^*, \paren {a c - d b^*}^* f + e \paren {a^* d + c b} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {a c} e - \paren {d b^*} e - f \paren {a^* d}^* - f \paren {c b}^*, \paren {a c}^* f - \paren {d b^*}^* f + e \paren {a^* d} + e \paren {c b} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {a c} e - \paren {d b^*} e - f \paren {d^* a} - f \paren {b^* c^*}, \paren {c^* a^*} f - \paren {b d^*} f + e \paren {a^* d} + e \paren {c b} }\)





Definition of Conjugation on Algebra














\(\ds \)

\(=\)







\(\ds \tuple {a \paren {c e} - a \paren {f d^*} - \paren {c^* f} b^* - \paren {e d} b^*, a^* \paren {c^* f} + a^* \paren {e d} + \paren {c e} b - \paren {f d^*} b}\)





$A$ is commutative and associative














\(\ds \)

\(=\)







\(\ds \tuple {a \paren {c e - f d^*} - \paren {c^* f + e d} b^*, a^* \paren {c^* f + e d} + \paren {c e - f d^*} b}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a, b} \tuple {c e - f d^*, c^* f + e d}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a, b} \paren {\tuple {c, d} \tuple {e, f} }\)









$\Box$

Now suppose $A'$ is an associative algebra.
By picking apart the above series of equations, it is clear that $A$ has to be both commutative and associative in order to assure the associativity of $A'$.
$\blacksquare$


Sources
John C. Baez: The Octonions (2002): 2.2 The Cayley-Dickson Construction: Proposition $3$




