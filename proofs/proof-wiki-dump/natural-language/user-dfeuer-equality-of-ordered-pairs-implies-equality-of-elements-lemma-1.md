# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Equality_of_Ordered_Pairs_implies_Equality_of_Elements/Lemma_1



Theorem
Let $a$, $b$, and $c$ be sets.

Then:

$\{a\} = \{b, c\} \iff a = b = c$


Proof
Reverse implication
Suppose that $a = b = c$.
Let $x \in \{a\}$.
Then by the definition of User:Dfeuer/Definition:Singleton, $x = a$.
Since $a = b$, $x = b$.
Thus by the definition of User:Dfeuer/Definition:Unordered Pair, $x \in \{b,c\}$.
Let $x \in \{b, c\}$.
By the definition of unordered pair:

$x = b$ or $x = c$.
Since $a = b = c$, $x = a$.
Thus by the definition of singleton, $x \in \{a\}$.
We have shown that $\forall x: (x \in \{a\} \iff x \in \{b, c\}$.
By the User:Dfeuer/Axiom of Extensionality, $ \{a\} = \{b, c\}$
$\Box$

Reverse implication
Suppose that $\{a\} = \{b, c\}$.
By the definition of unordered pair, $b \in \{b,c\}$ and $c \in \{b,c\}$.
Thus $b \in \{a\}$ and $c \in \{a\}$.
By the definition of singleton: $a = b$ and $a = c$.
$\blacksquare$





