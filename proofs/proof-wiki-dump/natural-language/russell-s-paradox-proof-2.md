# 

Source: https://proofwiki.org/wiki/Russell%27s_Paradox/Proof_2

Theorem
The Axiom of Abstraction leads to a contradiction.


Proof
Aiming for a contradiction, suppose the Axiom of Abstraction, that for all predicates $P$ where $S$ is not free:

$\exists S : \forall x : \paren {x \in S \iff \map P x}$
Since $x \notin x$ is a predicate where $S$ is not free, it follows that:

$\exists S : \forall x : \paren {x \in S \iff x \notin x}$
is an instance of the Axiom of Abstraction.
By Existential Instantiation:

$\forall x: \paren {x \in S \iff x \notin x}$
By Universal Instantiation:

$S \in S \iff S \notin S$
But this contradicts Biconditional of Proposition and its Negation.
Thus, the Axiom of Abstraction yields a contradiction.
$\blacksquare$





