# 

Source: https://proofwiki.org/wiki/Finitely_Satisfiable_Theory_has_Maximal_Finitely_Satisfiable_Extension/Lemma

Theorem
Let $\LL$ be a language of predicate logic.
Let $T$ be a finitely satisfiable $\LL$-theory.
Let $\phi$ be an $\LL$-sentence.

Then either:

$T \cup \set \phi$
or:

$T \cup \set {\neg \phi}$
is finitely satisfiable.


Proof
Without loss of generality, suppose that $T \not\models \phi$ and $T \not\models \neg \phi$.
Aiming for a contradiction, suppose that $T \cup \set \phi$ is not finitely satisfiable.
Then by definition there must be a finite subset $K$ of $T \cup \set \phi$ which is not satisfiable.
Since $T$ is finitely satisfiable, $\phi \in K$.
Therefore $\Delta = K \setminus \set \phi$ is a finite subset of $T$.
Thus, for every $\LL$-structure $\MM$ that models $\Delta$, $\phi$ is not valid.
Hence, for every $\LL$-structure $\MM$ that models $\Delta$, $\neg \phi$ is valid.
By definition, then, $\Delta \models \neg \phi$

where $\models$ denotes semantic consequence.

Let $\Sigma$ be a finite subset of $T$.
Since $\Delta \cup \Sigma$ is a finite subset of $T$, it is satisfiable.
But $\Delta \models \neg \phi$.
Hence $\set {\neg \phi} \cup \Sigma$ is satisfiable.
But any finite subset of $T \cup \set {\neg \phi}$ is either in $T$ or of the form $\Sigma \cup \set {\neg \phi}$.
This demonstrates that $T \cup \set {\neg \phi}$ is finitely satisfiable, contradicting our assumption.
$\blacksquare$

Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.





