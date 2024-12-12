# 

Source: https://proofwiki.org/wiki/Cancellation_Laws



Theorem
Let $G$ be a group.
Let $a, b, c \in G$.

Then the following hold:

Right cancellation law
$b a = c a \implies b = c$
Left cancellation law
$a b = a c \implies b = c$

That is, the group operation is cancellable.

Let $e$ be the identity element of $G$.
Then:

Corollary 1
$g h = g \implies h = e$


Corollary 2
$h g = g \implies h = e$


Proof 1
Let $a, b, c \in G$ and let $a^{-1}$ be the inverse of $a$.
Suppose $b a = c a$.
Then:














\(\ds \paren {b a} a^{-1}\)

\(=\)







\(\ds \paren {c a} a^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds b \paren {a a^{-1} }\)

\(=\)







\(\ds c \paren {a a^{-1} }\)





Definition of Associative Operation








\(\ds \leadsto \ \ \)





\(\ds b e\)

\(=\)







\(\ds c e\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds b\)

\(=\)







\(\ds c\)





Definition of Identity Element




Thus, the right cancellation law holds.
The proof of the left cancellation law is analogous.
$\blacksquare$


Proof 2
From its definition, a group is a monoid, all of whose elements have inverses and thus are invertible.
From Invertible Element of Monoid is Cancellable, it follows that all its elements are therefore cancellable.
$\blacksquare$


Proof 3
Suppose $x = b a = c a$.
By Group has Latin Square Property, there exists exactly one $y \in G$ such that $x = y a$.
That is, $x = b a = c a \implies b = c$.

Similarly, suppose $x = a b = a c$.
Again by Group has Latin Square Property, there exists exactly one $y \in G$ such that $x = a y$.
That is, $a b = a c \implies b = c$.
$\blacksquare$


Sources
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$ Semigroups, Monoids and Groups: Theorem $1.2 \text{(ii)}$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 1$: Exercise $5$




