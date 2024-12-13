# 

Source: https://proofwiki.org/wiki/Order_of_Elements_in_Quaternion_Group

Theorem
Let $Q = \Dic 2$ be the quaternion group, whose group presentation is given by:

$\Dic 2 = \gen {a, b: a^4 = e, b^2 = a^2, a b a = b}$
Then $\Dic 2$ has:

$1$ element of order $2$
and:

$6$ elements of order $4$.


Proof
From Identity is Only Group Element of Order 1, the identity element $e$ , and only $e$, is of order $1$.
From here, we inspect the Cayley table:

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

It is immediately seen that:

$\paren {a^2}^2 = e$
and so by definition $a^2$ is of order $2$.
As can be seen from inspection of the main diagonal, for all other $x \in Q$, we have:

$x^2 = a^2 \ne e$
and so:

$x^4 = \paren {a^2}^2 = e$
There are $6$ such elements.
Hence the result by definition of order of group element.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $14$




