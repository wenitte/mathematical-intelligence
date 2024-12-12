# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Singletons_are_Equal_iff_Elements_are_Equal

Theorem
Let $a$ and $b$ be sets.
Let $\{a\}$ and $\{b\}$ be User:Dfeuer/Definition:Singleton $a$ and singleton $b$, respectively.
Then:

$\{ a \} = \{ b \} \iff a = b$


Proof
Suppose that $\{ a \} = \{ b \}$.
By the definition of User:Dfeuer/Definition:Singleton:

$\forall x: x \in \{a\} \iff x = a$
Thus $a \in \{a\}$.
Since $\{ a \} = \{ b \}$, $a \in \{ b \}$.
By the definition of singleton:

$\forall x: x \in \{b\} \iff x = b$
Thus $a = b$.
Suppose instead that $a = b$.
By the definition of singleton:

$\forall x: x \in \{a\} \iff x = a$
$\forall x: x \in \{b\} \iff x = b$
Since $a = b$:

$\forall x: x \in \{b\} \iff x = a$
Thus:

$\forall x: x \in \{b\} \iff x \in \{a\}$
By the User:Dfeuer/Axiom of Extensionality, $\{a\} = \{b\}$.
$\blacksquare$





