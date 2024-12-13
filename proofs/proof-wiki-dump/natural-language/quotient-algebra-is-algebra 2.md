# 

Source: https://proofwiki.org/wiki/Quotient_Algebra_is_Algebra



Theorem
Let $R$ be a ring. 
Let $A$ be a $R$-algebra.
Let $I$ be an ideal of $A$.
Let $A/I$ be the quotient module of $A$ modulo $I$.
For $a, b \in A$, define $\ast : \paren {A/I}^2 \to A/I$ by:

$\paren {a + I} \ast \paren {b + I} = a b + I$

Then $\ast$ is well-defined and $\struct {A/I, \ast}$ is an $R$-algebra.


Proof
$\ast$ is well-defined
It suffices to show that if:

$a - a' \in I$
and:

$b - b' \in I$
then:

$ab - a' b' \in I$
Suppose that:

$a - a' = i_1 \in I$
and:

$b - b' = i_2 \in I$
Then we have:

$a' b' = \paren {a + i_1} \paren {b + i_2} = a b + i_1 b + a i_2 + i_1 i_2$
From the definition of an ideal, we have $-\paren {i_1 b + a i_2 + i_1 i_2} \in I$.
Hence $a b - a' b' = -\paren {i_1 b + a i_2 + i_1 i_2} \in I$, which is what we wanted to show. 
$\Box$

$\ast$ is $R$-bilinear
Let $x, y, z \in A$ and $\lambda \in R$.
We have: 














\(\ds \paren {\paren {x + I} + \lambda \paren {y + I} } \ast \paren {z + I}\)

\(=\)







\(\ds \paren {\paren {x + \lambda y} + I} \ast \paren {z + I}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {x + \lambda y} + I} \ast \paren {z + I}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {x + \lambda y} z} + I\)




















\(\ds \)

\(=\)







\(\ds \paren {x z + \lambda y z} + I\)




















\(\ds \)

\(=\)







\(\ds \paren {x z + I} + \lambda {y z + I}\)




















\(\ds \)

\(=\)







\(\ds \paren {x + I} \ast \paren {z + I} + \lambda \paren {\paren {y + I} \ast \paren {z + I} }\)









Almost identically we have:

$\paren {x + I} \ast \paren {\paren {y + I} + \lambda \paren {z + I} } = \paren {x + I} \ast \paren {y + I} + \lambda \paren {\paren {y + I} \ast \paren {z + I} }$

Hence $\struct {A/I, \ast}$ is a algebra.
$\blacksquare$





