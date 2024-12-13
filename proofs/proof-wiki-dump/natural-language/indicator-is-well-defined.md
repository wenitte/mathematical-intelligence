# 

Source: https://proofwiki.org/wiki/Indicator_is_Well-Defined

Theorem
Let $G$ be a finite group, and $a \in G$.
Let $H$ be a subgroup of $G$.
Then the indicator of $a$ in $H$ is well defined.


Proof
If $a \in H$, then for $n = 1$, $a^n \in H$.
Suppose that $a \notin H$. By Identity of Subgroup, we have that the identity $e$ of $G$ is in $H$.
Moreover, by Element of Finite Group is of Finite Order, there is $n \in \N$ such that $a^n = e \in H$.
Therefore, for any $g \in G$, there is some $n \in \N$ such that $a^n \in H$.
That is, the set of positive integers $n$ such that $a^n \in H$ is non-empty.
So by the Well-Ordering Principle, this set has a least element, and the indicator is well defined.
$\blacksquare$





