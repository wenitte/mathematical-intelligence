# 

Source: https://proofwiki.org/wiki/Minimally_Inductive_Set_is_Ordinal/Proof_2

Theorem
Let $\omega$ denote the minimally inductive set.

Then $\omega$ is an ordinal.


Proof
Let $K_I$ denote the set of all nonlimit ordinals.
Let $\On$ denote the set of all ordinals.
Let $a \in \omega$.
It follows that $a^+ \subseteq K_I$, so $a \in K_I$.
Thus:

$\omega \subseteq K_I \subseteq \On$

We now must prove that $\omega$ is a transitive set, at which point it will satisfy the Alternative Definition of Ordinal.
Let $x \in y$ and $y \in \omega$.
Then:

$y \in \On \land y^+ \subseteq K_I$
Because $y$ is an ordinal, it is transitive.
Therefore:

$x \subseteq y$
and:

$x^+ \subseteq y^+ \subseteq K_I$
Therefore, $x^+ \subseteq K_I$.
Applying the definition of minimally inductive set:

$x \in \omega$
so $\omega$ is transitive.
$\blacksquare$


Motivation
This demonstrates that $\omega$ can be shown to be an ordinal without use of the Axiom of Infinity.
By Ordinal is Member of Class of All Ordinals, it follows that $\omega \in \On$ or $\omega = \On$.
The Axiom of Infinity rejects the latter option in favor of the former.





