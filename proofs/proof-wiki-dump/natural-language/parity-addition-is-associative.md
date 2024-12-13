# 

Source: https://proofwiki.org/wiki/Parity_Addition_is_Associative



Theorem
Let $R := \struct {\set {\text{even}, \text{odd} }, +, \times}$ be the parity ring.

The operation $+$ is associative:

$\forall a, b, c \in R: \paren {a + b} + c = a + \paren {b + c}$


Proof 1
From Isomorphism between Ring of Integers Modulo 2 and Parity Ring:

$\struct {\set {\text {even}, \text {odd} }, +, \times}$ is isomorphic with $\struct {\Z_2, +_2, \times_2}$
the ring of integers modulo $2$.

The result follows from:

Modulo Addition is Associative
and:

Isomorphism Preserves Associativity.
$\blacksquare$


Proof 2
Let $a, b, c \in R$.
That is, $a, b, c$ are all either $\text{even}$ or $\text{odd}$.

By definition of odd:

$\text{odd} = 2 m + 1$
for some $m \in \Z$.
By definition of even:

$\text{even} = 2 n + 0$
for some $n \in \Z$.
Thus we can define the mapping $f: R \to \Z$ as:

$\forall x \in R: \map f x := \begin{cases}
0 & : x \text { is even} \\
1 & : x \text { is odd} \end{cases}$

Thus an element of $R$ can be expressed as an arbitrary integer of the form:

$x = 2 k + \map f x$
where:

$k \in \Z$ is an integer
$\map f x$ is either $0$ or $1$ according to whether $x$ is even or odd.

Let $+_2$ be used to denote the operation of $+$ in $R$, that is, the addition of two parities.
Then:














\(\ds \paren {a +_2 b} +_2 c\)

\(=\)







\(\ds \paren {2 r + \map f a + 2 s + \map f b} + 2 t + \map f c\)





where $r, s, t \in \Z$














\(\ds \)

\(=\)







\(\ds 2 r + \map f a + \paren {2 s + \map f b + 2 t + \map f c}\)





Integer Addition is Associative














\(\ds \)

\(=\)







\(\ds a +_2 \paren {b +_2 c}\)





Definition of Odd Integer and Definition of Even Integer




The result follows by the identification of $+_2$ to be used to denote the operation of $+$ in $R$:

$\paren {a + b} + c = a + \paren {b + c}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions: Example $2.2$




