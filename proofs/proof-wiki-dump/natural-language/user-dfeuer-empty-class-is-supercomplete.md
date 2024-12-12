# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Empty_Class_is_Supercomplete

Theorem
The empty class is supercomplete.
That is, the empty class is transitive and swelled.


Proof
In order to be transitive, $\varnothing$ must satisfy:

$\forall x: x \in \varnothing \implies x \subseteq \varnothing$.
By the definition of the empty class:

$\forall x: \lnot (x \in \varnothing)$.
Thus $\varnothing$ is vacuously transitive.
In order to be swelled, $\varnothing$ must satisfy:

$\forall x: \forall y: (x \in \varnothing \land y \subseteq x \implies y \in \varnothing)$
Again, this is vacuously true.
$\blacksquare$





