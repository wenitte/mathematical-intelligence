# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Binary_Union_of_Sets

Theorem
Let $a$ and $b$ be sets.

Then $a \cup b = \bigcup \{a, b\}$.


Proof
First suppose that $x \in a \cup b$.
By the definition of binary union, $x \in a \lor x \in b$.
By the definition of unordered pair, $a \in \{a, b\}$ and $b \in \{a, b\}$.
If $x \in a$, then since $a \in \{a,b\}$, $x \in \bigcup \{a, b\}$ by the definition of union.
If $x \in b$, then since $b \in \{a,b\}$, $x \in \bigcup \{a, b\}$ by the definition of union.
Suppose instead that $x \in \bigcup \{a, b\}$.
By the definition of union, $\exists p: p \in \{a, b\} \land x \in p$.
By the definition of unordered pair, $p = a$ or $p = b$.
Thus $x \in a$ or $x \in b$.
Thus by the definition of binary union, $x \in a \cup b$.
$\blacksquare$





