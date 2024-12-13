# 

Source: https://proofwiki.org/wiki/Nicely_Normed_Cayley-Dickson_Construction_from_Associative_Algebra_is_Alternative

Theorem
Let $A = \struct {A_F, \oplus}$ be a $*$-algebra.
Let $A' = \struct {A_F, \oplus'}$ be constructed from $A$ using the Cayley-Dickson construction.

Then $A'$ is a nicely normed alternative algebra if and only if $A$ is a nicely normed associative algebra.


Proof
Let the conjugation operator on $A$ be $*$.
Let $\tuple {a, b}, \tuple {c, d} \in A'$.

In order to streamline notation, let $\oplus$ and $\oplus'$ both be denoted by product notation:














\(\ds a \oplus b\)

\(=:\)







\(\ds a b\)




















\(\ds x \oplus' y\)

\(=:\)







\(\ds x y\)









The context will make it clear which is meant.

Let $A$ be a nicely normed associative algebra.
Then:














\(\ds \paren {\tuple {a, b} \tuple {a, b} } \tuple {c, d}\)

\(=\)







\(\ds \tuple {a a - b b^*, a^* b + a b} \tuple {c, d}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {a a - b b^*} c - d \paren {a^* b + a b}^*, \paren {a a - b b^*}^* d + c \paren {a^* b + a b} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {a a - b b^*} c - d \paren {b^* a + b^* a^*}, \paren {a^* a^* - b b^*} d + c \paren {a^* b + a b} }\)





Definition of Conjugation on Algebra














\(\ds \)

\(=\)







\(\ds \tuple {a a c - b b^* c - d b^* a - d b^* a^*, a^* a^* d - b b^* d + c a^* b + c a b}\)





$A$ is associative














\(\ds \)

\(=\)







\(\ds \tuple {a a c - b b^* c - d b^* \paren {a + a^*}, a^* a^* d - b b^* d + c \paren {a^* + a} b}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a a c - \norm b^2 c - d b^* \paren {2 \map \Re a}, a^* a^* d - \norm b^2 d + c \paren {2 \map \Re a} b}\)





$A$ is nicely normed



Similarly:














\(\ds \tuple {a, b} \paren {\tuple {a, b} \tuple {c, d} }\)

\(=\)







\(\ds \tuple {a, b} \tuple {a c - d b^*, a^* d + c b}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a \paren {a c - d b^*} - \paren {a^* d + c b} b^*, a^* \paren {a^* d - c b} + \paren {a c + d b^*} b}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a a c - a d b^* - a^* d b^* - c b b^*, a^* a^* d + a^* c b + a c b - d b^* b}\)





$A$ is associative














\(\ds \)

\(=\)







\(\ds \tuple {a a c - \paren {a + a^*} d b^* - c \norm b^2, a^* a^* d + \paren {a^* + a} c b - d b^* b}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a a c - \paren {2 \map \Re a} d b^* - c \norm b^2, a^* a^* d + \paren {2 \map \Re a} c b - d \norm b^2}\)





$A$ is nicely normed




Thus it can be seen that:

$\paren {\tuple {a, b} \tuple {a, b} } \tuple {c, d} = \tuple {a, b} \paren {\tuple {a, b} \tuple {c, d} }$

Similarly it can be shown that:

$\paren {\tuple {c, d} \tuple {a, b} } \tuple {a, b} = \tuple {c, d} \paren {\tuple {a, b} \tuple {a, b} }$
and so $A'$ is seen to be an alternative algebra.

It follows from reversing the chain of equalities that if $A'$ is a nicely normed and alternative algebra then $A$ has to be a nicely normed associative algebra.
$\Box$

Then from Cayley-Dickson Construction from Nicely Normed Algebra is Nicely Normed, we have that $A'$ is a nicely normed algebra if and only if $A$ is also a nicely normed algebra.
Hence the result.
$\blacksquare$


Sources
John C. Baez: The Octonions (2002): 2.2 The Cayley-Dickson Construction: Proposition $4$




