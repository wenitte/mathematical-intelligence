# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Equality_of_Ordered_Pairs_implies_Equality_of_Elements/Lemma_2

Theorem
Let $a$, $b$, and $c$ be sets.

Then:

$\{a, b\} = \{a, c\} \implies b = c$


Proof
Suppose that $\{a, b\} = \{a, c\}$.
By the definition of unordered pair:

$b \in \{a, b\}$ and
$c \in \{a, c\}$
By assumption, then:

$b \in \{a, c\}$ and
$c \in \{a, b\}$
By the definition of unordered pair:

$b = a \lor b = c$ and
$c = a \lor b = c$
Since disjunction distributes over conjunction:

$(b = a \land c = a) \lor b = c$.
If $b = a \land c = a$ then $b = c$.
Thus in either case, $b = c$.
$\blacksquare$

Sources
SF Lemma 2.4.3





