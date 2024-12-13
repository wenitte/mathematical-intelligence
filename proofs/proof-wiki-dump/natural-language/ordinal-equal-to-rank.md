# 

Source: https://proofwiki.org/wiki/Ordinal_Equal_to_Rank



Theorem
Let $x$ be an ordinal.
Let $S$ be a small class.
Let $\map V x$ denote the von Neumann hierarchy on the ordinal $x$.

Then $x$ equals the rank of $S$ if and only if $S \in \map V {x + 1} \land S \notin \map V x$.


Proof
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.


Sufficient Condition
Suppose that $x$ is equal to the rank of $S$.
Then $S \in \map V {x + 1}$ by the definition of rank.

Suppose $S \in \map V x$.
Then $x \ne 0$, so $x = y^+$ for some ordinal $y$ or $x$ is a limit ordinal.

Suppose $x = y^+$.
Then, $S \in \map V {y + 1}$.
This contradicts the fact that the rank is the smallest set $x$ such that $S \in V\left({x+1}\right)$.

Suppose $x$ is a limit ordinal.
Then, $S \in \map V y$ for some $y$, so $S \in \map V {y + 1}$ and $y+1 < x$.
This contradicts the fact that the rank is the smallest set $x$ such that $S \in V \left({x+1}\right)$.

Therefore, $S \notin \map V x$.
$\Box$


Necessary Condition
Suppose $S \notin \map V x$ and $S \in \map V {x + 1}$.
Then, if $y < x$, then $S \notin \map V {y + 1}$ by Von Neumann Hierarchy Comparison.
If $x < y$, then $S \in \map V y$.

Therefore, $x$ is the unique ordinal that satisfies $S \notin \map V x$ and $S \in \map V {x + 1}$.
Moreover, the rank of $S$ also satisfies $S \notin \map V x$ and $S \in \map V {x + 1}$.
Therefore, $x = \map {\operatorname{rank} } S$.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 9.15(2)$




