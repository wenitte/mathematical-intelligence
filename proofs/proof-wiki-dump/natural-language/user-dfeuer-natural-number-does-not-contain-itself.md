# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Natural_Number_does_not_Contain_Itself

Theorem
Let $n$ be a natural number.

Then $n \notin n$.


Proof
Then proof proceeds by induction.
Let $a$ be the set of all natural numbers $n$ such that $n \notin n$.
By the definition of the empty class, $\varnothing \notin \varnothing$.
Suppose that $n \in a$.
Suppose for the sake of contradiction that $n^+ \in n^+$.
Then $n^+ \in n \cup \{n\}$.
Thus $n^+ \in n$ or $n^+ = n$.
That is, $n \cup \{n\} \in n$ or $n \cup \{n\} = n$.
Then $n \cup \{n\} = n$.
Then $n \in n$, contradicting the fact that $n \notin a$.
Suppose instead that $n \cup \{n\} \in n$.
Then since $n$ is transitive by User:Dfeuer/Natural Number is Transitive:

$n \cup \{n\} \subseteq n$
Thus $n \in n$, another contradiction.
Since assuming $n^+ \in n^+$ leads to a contradiction, we conclude that:

$n^+ \notin n^+$
$\blacksquare$





