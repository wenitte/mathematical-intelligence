# 

Source: https://proofwiki.org/wiki/No_Injection_from_Power_Set_to_Set



Theorem
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.

Then there is no injection from $\powerset S$ into $S$.


Proof 1
Aiming for a contradiction, suppose $f: \powerset S \to S$ is an injection.
By Injection has Surjective Left Inverse Mapping, there is a surjection $g: S \to \powerset S$.
But this contradicts Cantor's Theorem.
Thus there can be no such injection. 
$\blacksquare$


Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle, by way of Injection has Surjective Left Inverse Mapping.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.


Proof 2
Lemma
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.

Then there does not exist a set $B$ such that there is an injection from $B$ into $S$ and a surjection from $B$ onto $\powerset S$.
$\Box$

The identity mapping $I_{\powerset S}: \powerset S \to \powerset S$ is a surjection by Identity Mapping is Surjection.
Thus, by the lemma, there can be no injection from $\powerset S$ into $S$.
$\blacksquare$





