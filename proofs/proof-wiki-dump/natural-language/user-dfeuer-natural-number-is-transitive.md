# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Natural_Number_is_Transitive

Theorem
Let $n$ be a natural number.

Then $n$ is transitive.


Proof
Proof proceeds by induction:
Let $a$ be the class of all natural numbers $n$ such that $n$ is transitive.
$\varnothing \in a$ by User:Dfeuer/Empty Class is Supercomplete.
Suppose $n$ is transitive.
Let $m \in n^+$.
Let $x \in m$.
By the definition of successor, $m \in n \cup \{n\}$.
By the definition of class union and the definition of singleton, $m \in n$ or $m = n$.
If $m = n$, then $x \in n$.
If $m \in n$, then since $n$ is transitive, $x \in n$.
Thus $x \in n$.
Therefore $x \in n^+$.
As this holds for all such $m$ and $x$, $n^+$ is transitive, so $n^+ \in a$.
By the principle of mathematical induction, $a = \omega$.
Thus every natural number is transitive.
$\blacksquare$





