# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Successor_Mapping_is_Injective

Theorem
Let $m$ and $n$ be natural numbers.
Suppose that $m^+ = n^+$.

Then $m = n$.


Proof
$m^+ = m \cup \{m\}$ and $n^+ = n \cup \{n\}$.
Thus by the definitions of singleton and union:

$m \in m \cup \{m\}$ and $n \in n \cup \{n\} $.
Thus $m \in n \cup \{n\}$ and $n \in m \cup \{m\}$.
Thus:

$m \in n$ or $m = n$
$n \in m$ or $m = n$
So $m = n \lor (m \in n \land n \in m)$.
By Membership is Asymmetric on Natural Numbers, $\lnot (m \in n \land n \in m)$.
Thus $m = n$.
$\blacksquare$





