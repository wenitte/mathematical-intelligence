# 

Source: https://proofwiki.org/wiki/Conjugacy_Classes_of_Quaternion_Group

Theorem
Let $Q = \Dic 2 = \gen {a, b: a^4 = e, b^2 = a^2, a b a = b}$ be the quaternion group.

The conjugacy classes of $\Dic 2$ are:

$\set e, \set {a^2}, \set {a, a^3}, \set {b, a^2 b}, \set {a b, a^3 b}$


Proof
From Center of Quaternion Group, we have:

$\map Z {\Dic 2} = \set {e, a^2}$
Thus from Conjugacy Class of Element of Center is Singleton, $\set e$ and $\set {a^2}$ are two of those conjugacy classes.

By inspection of the Cayley table:

$\begin {array} {r|rrrrrrrr}
& e     & a     & a^2   & a^3   & b     & a b   & a^2 b & a^3 b \\
\hline
e     & e     & a     & a^2   & a^3   & b     & a b   & a^2 b & a^3 b \\
a     & a     & a^2   & a^3   & e     & a b   & a^2 b & a^3 b & b     \\
a^2   & a^2   & a^3   & e     & a     & a^2 b & a^3 b & b     & a b   \\
a^3   & a^3   & e     & a     & a^2   & a^3 b & b     & a b   & a^2 b \\
b     & b     & a^3 b & a^2 b & a b   & a^2   & a     & e     & a^3   \\
a b   & a b   & b     & a^3 b & a^2 b & a^3   & a^2   & a     & e     \\
a^2 b & a^2 b & a b   & b     & a^3 b & e     & a^3   & a^2   & a     \\
a^3 b & a^3 b & a^2 b & a b   & b     & a     & e     & a^3   & a^2 
\end {array}$

we investigate the remaining $6$ elements in turn, starting with $a$:














\(\ds a a a^{-1}\)

\(\)







\(\ds \)

\(\ds = a\)


















\(\ds a^2 a \paren {a^2}^{-1}\)

\(=\)







\(\ds a^2 a a^2 = a^5\)

\(\ds = a\)


















\(\ds a^3 a \paren {a^3}^{-1}\)

\(=\)







\(\ds a^3 a a = a^5\)

\(\ds = a\)


















\(\ds b a b^{-1}\)

\(=\)







\(\ds b a \paren {a^2 b} = b a^3 b\)

\(\ds = a^3\)


















\(\ds \paren {a b} a \paren {a b}^{-1}\)

\(=\)







\(\ds \paren {a b} a \paren {a^3 b} = b a^3 b\)

\(\ds = a^3\)


















\(\ds \paren {a^2 b} a \paren {a^2 b}^{-1}\)

\(=\)







\(\ds \paren {a^2 b} a b\)

\(\ds = a^3\)


















\(\ds \paren {a^3 b} a \paren {a^3 b}^{-1}\)

\(=\)







\(\ds \paren {a^3 b} a \paren {a b} = \paren {a^2 b} \paren {a b}\)

\(\ds = a^3\)







So we have a conjugacy class:

$\set {a, a^3}$

Investigating the remaining $4$ elements in turn, starting with $b$:














\(\ds a b a^{-1}\)

\(=\)







\(\ds a b a^3\)

\(\ds = a^2 b\)


















\(\ds a^2 b \paren {a^2}^{-1}\)

\(=\)







\(\ds a^2 b a^2\)

\(\ds = b\)


















\(\ds a^3 b \paren {a^3}^{-1}\)

\(=\)







\(\ds a^3 b a\)

\(\ds = a^2 b\)


















\(\ds b b b^{-1}\)

\(\)







\(\ds \)

\(\ds = b\)


















\(\ds \paren {a b} b \paren {a b}^{-1}\)

\(=\)







\(\ds \paren {a b} b \paren {a^3 b} = \paren {a b} a^3\)

\(\ds = a^2 b\)


















\(\ds \paren {a^2 b} b \paren {a^2 b}^{-1}\)

\(=\)







\(\ds \paren {a^2 b} b b = \paren {a^2 b} a^2\)

\(\ds = b\)


















\(\ds \paren {a^3 b} b \paren {a^3 b}^{-1}\)

\(=\)







\(\ds \paren {a^3 b} b \paren {a b} = \paren {a^3 b} a\)

\(\ds = a^2 b\)








So we have a conjugacy class:

$\set {b, a^2 b}$

Investigating the remaining $2$ elements, starting with $a b$:














\(\ds a \paren {a b} a^{-1}\)

\(=\)







\(\ds a \paren {a b} a^3 = a^2 b a^3\)

\(\ds = a^3 b\)







We need go no further: the remaining elements $a b$ and $a^3 b$ are in the same conjugacy class:

$\set {a b, a^3 b}$

Hence the result.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 51 \alpha$




