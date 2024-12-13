# 

Source: https://proofwiki.org/wiki/Principal_Ideal_of_Commutative_Ring

Theorem
Let $\struct {R, +, \circ}$ be a commutative ring with unity.
Let $a \in R$.

Let $Ra$ be the principal left ideal of $R$ generated by $a$.
Let $aR$ be the principal right ideal of $R$ generated by $a$.
Let $\ideal a$ be the principal ideal of $R$ generated by $a$.

Then $Ra = \ideal a = aR$.


Proof
By definition of principal left ideal:

$Ra = \set{r \circ a: r \in R}$
By definition of commutative ring with unity and center of ring:

$a$ is in the center of $R$
From Principal Ideal from Element in Center of Ring:

$\ideal a = R \circ a = \set{r \circ a: r \in R}$
Hence:

$Ra = \ideal a$

We have:














\(\ds Ra\)

\(=\)







\(\ds \set{r \circ a : r \in R}\)





Definition of Principal Left Ideal of Ring














\(\ds \)

\(=\)







\(\ds \set{a \circ r : r \in R}\)





commutativity of ring product $\circ$














\(\ds \)

\(=\)







\(\ds aR\)





Definition of Principal Right Ideal of Ring



$\blacksquare$




