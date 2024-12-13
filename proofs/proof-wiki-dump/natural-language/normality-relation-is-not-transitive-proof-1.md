# 

Source: https://proofwiki.org/wiki/Normality_Relation_is_not_Transitive/Proof_1

Theorem
Let $G$ be a group.
Let $N$ be a normal subgroup of $G$.
Let $K$ be a normal subgroup of $N$.

Then it is not necessarily the case that $K$ is a normal subgroup of $G$.


Proof
Proof by Counterexample:
Let $A_4$ denote the alternating group on $4$ letters, whose Cayley table is given as:

$\begin{array}{c|cccc|cccc|cccc}
\circ & e & t & u & v & a & b & c & d & p & q & r & s \\
\hline
e & e & t & u & v & a & b & c & d & p & q & r & s \\
t & t & e & v & u & b & a & d & c & q & p & s & r \\
u & u & v & e & t & c & d & a & b & r & s & p & q \\
v & v & u & t & e & d & c & b & a & s & r & q & p \\
\hline
a & a & c & d & b & p & r & s & q & e & u & v & t \\
b & b & d & c & a & q & s & r & p & t & v & u & e \\
c & c & a & b & d & r & p & q & s & u & e & t & v \\
d & d & b & a & c & s & q & p & r & v & t & e & u \\
\hline
p & p & s & q & r & e & v & t & u & a & d & b & c \\
q & q & r & p & s & t & u & e & v & b & c & a & d \\
r & r & q & s & p & u & t & v & e & c & b & d & a \\
s & s & p & r & q & v & e & u & t & d & a & c & b \\
\end{array}$

From Normality of Subgroups of Alternating Group on 4 Letters:

$K := \set {e, t, u, v}$ is a normal subgroup of $A_4$
$T := \set {e, t}$ is not a normal subgroup of $A_4$.
But by Subgroup of Abelian Group is Normal:

$T$ is a normal subgroup of $K$.

Thus we have:

$T \lhd K$, $K \lhd A_4$
but:

$T \not \lhd A_4$
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $6$: Cosets: Exercise $11$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 83 \alpha$




