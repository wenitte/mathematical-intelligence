# 

Source: https://proofwiki.org/wiki/Associativity_on_Four_Elements



Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $a, b, c, d \in S$.
Then:

$a \circ b \circ c \circ d$
gives a unique answer no matter how the elements are associated.


Proof
As $\struct {S, \circ}$ is a semigroup:

it is closed
$\circ$ is associative

From Parenthesization of Word of $4$ Elements, there are exactly $5$ different ways of inserting brackets in the expression $a \circ b \circ c \circ d$.

As $\circ$ is associative, we have that:

$\forall s_1, s_2, s_3 \in S: \paren {s_1 \circ s_2} \circ s_3 = s_1 \circ \paren {s_2 \circ s_3}$
As $\struct {S, \circ}$ is closed, we know that all products of elements from $\set {a, b, c, d}$ are in $S$, and are likewise bound by the associativity of $S$.

So:














\(\ds \paren {\paren {a \circ b} \circ c} \circ d\)

\(=\)







\(\ds \paren {a \circ \paren {b \circ c} } \circ d\)




















\(\ds \)

\(=\)







\(\ds a \circ \paren {\paren {b \circ c} \circ d}\)




















\(\ds \)

\(=\)







\(\ds a \circ \paren {b \circ \paren {c \circ d} }\)




















\(\ds \)

\(=\)







\(\ds \paren {a \circ b} \circ \paren {c \circ d}\)









$\blacksquare$


Also see
General Associativity Theorem, which demonstrates this rule for any number of elements.


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $2.1: \ 11$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.2$. Commutative and associative operations
1967: Michael Spivak: Calculus ... (previous) ... (next): Part $\text I$: Prologue: Chapter $1$: Basic Properties of Numbers
in the context of addition
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Definition of Group Structure: $\S 27 \alpha$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 28$. Associativity and commutativity
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions




