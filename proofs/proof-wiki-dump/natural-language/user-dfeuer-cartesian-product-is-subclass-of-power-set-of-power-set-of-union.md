# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Cartesian_Product_is_Subclass_of_Power_Set_of_Power_Set_of_Union

Theorem
Let $a$ and $b$ be sets.

Then $a \times b \subseteq \mathcal P(\mathcal P(a \cup b))$.


Proof
Let $x \in a \times b$.
By the definition of Cartesian product, there are sets $p$ and $q$ such that $p \in a$, $q \in b$, and $x = (p, q)$.
By the definition of ordered pair, $x = \{\{p\}, \{p, q\}\}$.
By the definition of union, $p \in a \cup b$ and $q \in a \cup b$.
Then $\{p\} \subseteq a \cup b$ and $\{p, q\} \subseteq a \cup b$.
Thus by the definition of power set, $\{p\}$ and $\{p, q\}$ are elements of $\mathcal P(a \cup b)$.
Thus $\{\{p\}, \{p,q\}\} \subseteq \mathcal P(a \cup b)$.
Since $x = \{\{p\}, \{p, q\}\}$ and by the definition of power set:

$x \in \mathcal P(\mathcal P(a \cup b))$
As this holds for all $x \in a \times b$:

$a \times b \subseteq \mathcal P(\mathcal P(a \cup b))$
$\blacksquare$





