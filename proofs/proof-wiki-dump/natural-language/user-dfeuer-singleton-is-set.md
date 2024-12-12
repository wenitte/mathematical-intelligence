# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Singleton_is_Set

Theorem
Let $a$ be a set.

Then $\{a\}$, User:Dfeuer/Definition:Singleton $a$ is a set.


Proof
By the definition of User:Dfeuer/Definition:Singleton, $\{a\}$ is the class such that:
$\forall x: (x \in \{a\} \iff x = a)$
Thus:
$\forall x: (x \in \{a\} \iff x = a \lor x = a)$
That is, $x \in \{a\} \iff x \in \{a, a\}$, where $\{a, a\}$ is the User:Dfeuer/Definition:Unordered Pair of $a$ and $a$.
Thus by the User:Dfeuer/Axiom of Extensionality, $\{a\} = \{a, a\}$.
By the User:Dfeuer/Axiom of Pairing, $\{a, a\}$ is a set, so $\{a\}$ is a set.
$\blacksquare$





