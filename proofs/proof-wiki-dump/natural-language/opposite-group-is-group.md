# 

Source: https://proofwiki.org/wiki/Opposite_Group_is_Group



Theorem
Let $\struct {G, \circ}$ be a group.
Let $\struct {G, *}$ be the opposite group to $G$.

Then $\struct {G, *}$ is a group.


Proof
Group Axiom $\text G 0$: Closure
$\struct {G, *}$ is closed:

$b \circ a \in G \implies a * b \in G$
$\Box$


Group Axiom $\text G 1$: Associativity
$*$ is associative on $G$:














\(\ds a * \paren {b * c}\)

\(=\)







\(\ds \paren {c \circ b} \circ a\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds c \circ \paren {b \circ a}\)





Associativity of $\circ$














\(\ds \)

\(=\)







\(\ds \paren {a * b} * c\)





Definition of $*$



$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
Let $e$ be the identity of $\struct {G, \circ}$:














\(\ds a * e\)

\(=\)







\(\ds e \circ a = a\)




















\(\ds e * a\)

\(=\)







\(\ds a \circ e = a\)









Thus $e$ is the identity of $\struct {G, *}$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
Let the inverse of $a \in \struct {G, \circ}$ be $a^{-1}$:














\(\ds a * a^{-1}\)

\(=\)







\(\ds a^{-1} \circ a = e\)




















\(\ds a^{-1} * a\)

\(=\)







\(\ds a \circ a^{-1} = e\)









Thus $a^{-1}$ is the inverse of $a \in \struct {G, *}$
$\Box$

So all the group axioms are satisfied, and $\struct {G, *}$ is a group.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Definition of Group Structure: $\S 26 \epsilon$




