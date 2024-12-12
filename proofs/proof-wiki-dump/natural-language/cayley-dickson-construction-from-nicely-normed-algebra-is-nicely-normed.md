# 

Source: https://proofwiki.org/wiki/Cayley-Dickson_Construction_from_Nicely_Normed_Algebra_is_Nicely_Normed

Theorem
Let $A = \struct {A_F, \oplus}$ be a $*$-algebra.
Let $A' = \struct {A_F, \oplus'}$ be constructed from $A$ using the Cayley-Dickson construction.

Then $A'$ is a nicely normed algebra if and only if $A$ is also a nicely normed algebra.


Proof
Let the conjugation operator on $A$ be $*$.
Let $\tuple {a, b}, \tuple {c, d} \in A'$.

In order to streamline notation, let $\oplus$ and $\oplus'$ both be denoted by product notation:

$a \oplus b =: a b$
$x \oplus' y =: x y$
The context will make it clear which is meant.

Let $A$ be a nicely normed algebra.
Then:














\(\ds \tuple {a, b} + \tuple {a, b}^*\)

\(=\)







\(\ds \tuple {a, b} + \tuple {a^*, -b}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a + a^*, b - b}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a + a^*, 0}\)









As $A$ is itself nicely normed, we have that $a + a^*$ is real.
Hence it follows that $\tuple {a + a^*, 0}$ is real.

Next:














\(\ds \tuple {a, b} \tuple {a, b}^*\)

\(=\)







\(\ds \tuple {a, b} \tuple {a^*, -b}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a a^* - \tuple {-b b^*}, a^* b + \tuple {-a^* b} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\norm a^2 + \norm b^2, 0}\)





as $A$ is nicely normed



We have by definition of norm that $\norm a^2 + \norm b^2$ is real.
Hence it follows that $\tuple {\norm a^2 + \norm b^2, 0}$ is real.

It follows from reversing the argument that if $A'$ is not nicely normed then nor will $A$ be.
$\blacksquare$


Sources
John C. Baez: The Octonions (2002): 2.2 The Cayley-Dickson Construction: Proposition $5$




