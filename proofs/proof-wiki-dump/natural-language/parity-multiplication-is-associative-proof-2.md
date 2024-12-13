# 

Source: https://proofwiki.org/wiki/Parity_Multiplication_is_Associative/Proof_2

Theorem
Let $R := \struct {\set {\text{even}, \text{odd} }, +, \times}$ be the parity ring.

The operation $\times$ is associative:

$\forall a, b, c \in R: \paren {a \times b} \times c = a \times \paren {b \times c}$


Proof
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

Then:














\(\ds \paren {a \times b} \times c\)

\(=\)







\(\ds \paren {\paren {2 r + \map f a} \paren {2 s + \map f b} } \paren {2 t + \map f c}\)





where $r, s, t \in \Z$














\(\ds \)

\(=\)







\(\ds \paren {2 r + \map f a} \paren {\paren {2 s + \map f b} \paren {2 t + \map f c} }\)





Integer Multiplication is Associative














\(\ds \)

\(=\)







\(\ds a \times \paren {b \times c}\)





Definition of Odd Integer and Definition of Even Integer



$\blacksquare$




