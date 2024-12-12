# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Element_of_Natural_Number_is_Natural_Number

Theorem
Let $n$ be a natural number.
Let $x \in n$.

Then $x$ is also a natural number.


Proof
Let $b$ be the set of all natural numbers $n$ such that $n \subseteq \omega$.
$0 \subseteq \omega$, so $0 \in b$.
Suppose that $n \in b$.
Let $p \in n^+$.
Then $p \in n$ or $p = n$.
If $p \in n$ then $p \in \omega$ because $n \in b$.
If $p = n$ then $p \in \omega$.
Since this holds for all $p \in n^+$, $n^+ \subseteq \omega$, so $n^+ \in b$.
We have shown that $n \in b \implies n^+ \in b$.
Thus $b$ is an inductive set, so by the definition of natural number, every natural number is in $b$.
Thus every element of every natural number is an element of $\omega$.
$\blacksquare$





