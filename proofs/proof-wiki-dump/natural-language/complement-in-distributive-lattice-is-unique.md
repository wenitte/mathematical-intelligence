# 

Source: https://proofwiki.org/wiki/Complement_in_Distributive_Lattice_is_Unique

Theorem
Let $\struct {S, \vee, \wedge, \preceq}$ be a bounded distributive lattice.

Then every $a \in S$ admits at most one complement.


Corollary
Let $\struct {S, \vee, \wedge, \preceq}$ be a Boolean lattice.

Then every $a \in S$ has a unique complement $\neg a$.


Proof
Let $a \in S$, and suppose that $b, c \in S$ are complements for $a$.
Then:














\(\ds b\)

\(=\)







\(\ds \top \wedge b\)





$\top$ is the identity for $\wedge$














\(\ds \)

\(=\)







\(\ds \paren {c \vee a} \wedge b\)





$c$ is a complement for $a$














\(\ds \)

\(=\)







\(\ds \paren {c \wedge b} \vee \paren {a \wedge b}\)





$S$ is a distributive lattice














\(\ds \)

\(=\)







\(\ds \paren {c \wedge b} \vee \bot\)





$b$ is a complement for $a$














\(\ds \)

\(=\)







\(\ds c \wedge b\)





$\bot$ is the identity for $\vee$



Interchanging $c$ and $b$ in the above gives that $c = c \wedge b$ as well.
Hence $b = c$, as desired.
$\blacksquare$





