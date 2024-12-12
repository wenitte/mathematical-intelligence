# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Equality_of_Ordered_Pairs_implies_Equality_of_Elements

Theorem
Let $a$, $b$, $c$, and $d$ be sets.
Let $(a,b) = (c,d)$, where $(a,b)$ and $(c,d)$ are ordered pairs.


Proof
Let $(a,b) = (c,d)$.
Then by the definition of ordered pair:

$\{\{a\}, \{a, b\}\} = \{\{c\}, \{c, d\}\}$.
By the definition of User:Dfeuer/Definition:Unordered Pair:

$\{a\} \in \{\{a\}, \{a, b\}\}$ and $\{a, b\} \in \{\{a\}, \{a, b\}\}$
Thus:

$\{a\} \in \{\{c\}, \{c, d\}\}$ and $\{a, b\} \in \{\{c\}, \{c, d\}\}$
By the definition of unordered pair:

$\{a\} = \{c\}$ or $\{a\} = \{c, d\}$
First suppose that $\{a\} = \{c, d\}$.
By User:Dfeuer/Equality of Ordered Pairs implies Equality of Elements/Lemma 1:

$a = c = d$
Thus $\{\{c\}, \{c, d\}\} = \{\{a\}, \{a, a\}\}$.
Applying User:Dfeuer/Equality of Ordered Pairs implies Equality of Elements/Lemma 1 twice:

$\{\{a\}, \{a, a\}\} = \{\{a\}, \{a\}\} = \{\{a\}\}$
So $\{\{c\}, \{c, d\}\} = \{\{a\}\}$.
As $\{a, b\} \in \{\{c\}, \{c, d\}\}$, $\{a, b\} \in \{\{a\}\}$.
By the definition of singleton, $\{a, b\} = \{a\}$.
By User:Dfeuer/Equality of Ordered Pairs implies Equality of Elements/Lemma 1, $b = a$.
Thus we have $a = b = c = d$, so $a = c$ and $b = d$.

Suppose instead that $\{a\} = \{c\}$.
Then $a = c$ by User:Dfeuer/Singletons are Equal iff Elements are Equal.
Thus we have:

$\{\{a\}, \{a, b\}\} = \{\{a\}, \{a, d\}\}$.
Thus User:Dfeuer/Equality of Ordered Pairs implies Equality of Elements/Lemma 2 shows that:

$\{a, b\} = \{a, d\}$
Applying User:Dfeuer/Equality of Ordered Pairs implies Equality of Elements/Lemma 2 again shows that $b = d$.
Thus we have $a = c$ and $b = d$ in either case.
$\blacksquare$

Sources
SF Theorem $2.4.4$





