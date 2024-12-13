# 

Source: https://proofwiki.org/wiki/Parity_Multiplication_is_Commutative/Proof_2

Theorem
Let $R := \struct {\set {\text{even}, \text{odd} }, +, \times}$ be the parity ring.

The operation $\times$ is commutative:

$\forall a, b \in R: a \times b = b \times a$


Proof
Let $a, b \in R$.
That is, $a$ and $b$ are both either $\text{even}$ or $\text{odd}$.

By definition of odd:

$\text{odd} = 2 m + 1$
for some $m \in \Z$.
By definition of even:

$\text{even} = 2 n + 0$
for some $n \in \Z$.
Thus we can define the mapping $f: R \to \Z$ as:
$\quad \forall x \in R: \map f x := \begin{cases}
0 & : x \text { is even} \\
1 & : x \text { is odd} \end{cases}$

Thus an element of $R$ can be expressed as an arbitrary integer of the form:

$x = 2 k + \map f x$
where:

$k \in \Z$ is an integer
$\map f x$ is either $0$ or $1$ according to whether $x$ is even or odd.

Then:














\(\ds a \times b\)

\(=\)







\(\ds \paren {2 r + \map f a} \paren {2 s + \map f b}\)





where $r, s \in \Z$














\(\ds \)

\(=\)







\(\ds \paren {2 s + \map f b} \paren {2 r + \map f a}\)





Integer Multiplication is Commutative














\(\ds \)

\(=\)







\(\ds b \times a\)





Definition of Odd Integer and Definition of Even Integer



$\blacksquare$





