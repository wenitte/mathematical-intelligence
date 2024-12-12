# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Not_Every_Class_is_a_Set

Theorem
Not every class is a set.
That is, if $\mathbb U$ is the universal class, then:

$\exists B: B \subseteq \mathbb U \land B \notin \mathbb U$


Proof
Define a first-order formula $\varphi$ by letting

$\varphi(x) \iff \lnot(x \in x)$
Then by the Axiom Schema of Separation, there is a class $O \subseteq \mathbb U$ such that

$\forall x: x \in O \iff \varphi(x)$
That is:

$\forall x: x \in O \iff x \notin x$
Suppose for the sake of contradiction that $O$ is a set.
That is, suppose that $O \in \mathbb U$.
Then $O \in O \iff O \notin O$, a contradiction.
Thus $O$ is not a set.
$\blacksquare$





