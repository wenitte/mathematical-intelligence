# 

Source: https://proofwiki.org/wiki/Axiom_of_Pairing_from_Powers_and_Replacement

Theorem
The Axiom of Pairing is a consequence of:

the Axiom of the Empty Set
and

the Axiom of Powers
and also

the Axiom of Replacement.


Proof
It is to be shown that $2 = \set {\O, \set \O}$ is a set.

By the Axiom of the Empty Set, it is seen that $\O$ is a set.
By the Axiom of Powers, it is seen that $\powerset \O$ is also a set.

It is to be shown that $\powerset \O = \set \O$.

To determine the elements of $\powerset \O$, we must find all of the sets $z$ such that:

$\forall x: x \in z \implies x \in \O$

From the definition of the empty set, the right hand side of this expression is invariably false.
So by Rule of Transposition, we deduce that:

$\forall x: x \notin z$

But this is the definition of the empty set.
So by Empty Set is Unique, it follows that $\powerset \O = \set \O$.
$\Box$

It is now to be shown that $\powerset {\set \O} = \set {\O, \set \O}$.

By Empty Set is Subset of All Sets, $\O \in \powerset {\set \O}$.
By Set is Subset of Itself, $\set \O \in \powerset {\set \O}$.
And so:

$(1) \quad \set {\O, \set \O} \subseteq \powerset {\set \O}$

It is now to be shown that $\set {\O, \set \O} \supseteq \powerset {\set \O}$.

Aiming for a contradiction, suppose that there exists a set $S \in \powerset {\set \O}$ such that $S \ne \O$ and $S \ne \set \O$.
But then $\exists x \ne \O: x \in \set \O$, which is false.

Therefore by contradiction:

$(2) \quad \powerset {\set \O} \subseteq \set {\O, \set \O}$.

Putting $(1)$ and $(2)$ together yields:

$\powerset {\set \O} = \set {\O, \set \O}$
$\Box$

The set $2 = \set {\O, \set \O}$ is used with the Axiom of Replacement as the domain for a mapping whose image is $\set {A, B}$.

A suitable mapping would be:

$\paren {y = \O \land z = A} \lor \paren {y = \set \O \land z = B}$

Usually this mapping would be written as:

$\map f x = \begin{cases}
A & : x = \O \\
B & : x = \set \O
\end{cases}$
$\blacksquare$





