# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Principle_of_Mathematical_Induction

Theorem
Let $a$ be a set.
Let $\omega$ be the set of all natural numbers.
Suppose that:

$(1)\quad 0 \in a$
$(2)\quad$For every natural number $n$, $n \in a \implies n^+ \in a$.

Then $\omega \subseteq a$.  That is, $a$ contains every natural number.


Proof
Note: S&F seem in their discussion to accidentally assume that $a$ is inductive, which it may not be, or that $a$ contains only naturals, which may not be the case. Fortunately, this is trivial to fix by introducing $b$.
Let $b = \omega \cap a$.

$b$ is an inductive set
$0 \in \omega$ by User:Dfeuer/Zero is Natural Number and $0 \in a$ by the premise.
Thus by the definition of intersection, $0 \in b$.
Let $x \in b$.
Then $x \in a$ and $x \in \omega$.
Thus by the premise, $x^+ \in a$.
By User:Dfeuer/Successor of Natural Number is Natural Number, $x^+ \in \omega$.
Thus $x^+ \in b$.
$\Box$
Since $b$ is an inductive set, it contains every natural number by the definition of natural number.
Since $b \subseteq a$, $a$ contains every natural number.
$\blacksquare$





