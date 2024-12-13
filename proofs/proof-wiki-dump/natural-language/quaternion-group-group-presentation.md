# 

Source: https://proofwiki.org/wiki/Quaternion_Group/Group_Presentation



Group Presentation of Quaternion Group
The group presentation of the quaternion group is given by:

$\Dic 2 = \gen {a, b: a^4 = e, b^2 = a^2, a b a = b}$


Proof
Let $G = \gen {a, b: a^4 = e, b^2 = a^2, a b a = b}$.
It is to be demonstrated that $\Dic 2$ is isomorphic to $G$.
Consider the Cayley table for $\Dic 2$:

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

We have that:

$a^4 = e$
$b^2 = a^2$
$\paren {a b} a = b$
demonstrating that $\Dic 2$ has the same group presentation as $G$.
Hence the result.
$\blacksquare$


Also presented as
The (group) presentation for the quaternion group can also be expressed in the form:

$\Dic 2 = \gen {a, b: a^4 = e, b^2 = a^2 = \paren {a b}^2}$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $4$: Subgroups: Exercise $4$




