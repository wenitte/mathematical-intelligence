# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Semantic_Equivalence_for_Boolean_Interpretations



Theorem
The following definitions of the concept of Semantic Equivalence for Boolean Interpretations are equivalent:
Let $\mathbf A, \mathbf B$ be WFFs of propositional logic.

Definition 1
Then $\mathbf A$ and $\mathbf B$ are equivalent for boolean interpretations if and only if:

$\mathbf A \models_{\mathrm{BI}} \mathbf B$ and $\mathbf B \models_{\mathrm{BI}} \mathbf A$
that is, each is a semantic consequence of the other.

That is to say, $\mathbf A$ and $\mathbf B$ are equivalent if and only if:

$\map v {\mathbf A} = T$ if and only if $\map v {\mathbf B} = T$
for all boolean interpretations $v$.


Definition 2
Then $\mathbf A$ and $\mathbf B$ are equivalent for boolean interpretations if and only if:

$\map v {\mathbf A} = \map v {\mathbf B}$
for all boolean interpretations $v$.


Definition 3
Then $\mathbf A$ and $\mathbf B$ are equivalent for boolean interpretations if and only if:

$\mathbf A \iff \mathbf B$ is a tautology
where $\iff$ is the biconditional connective.


Proof
Definition 1 implies Definition 2
Let $\mathbf A, \mathbf B$ be equivalent according to definition 1.
Let $v$ be a boolean interpretation.

By definition. either $v \left({\mathbf A}\right) = T$ or $v \left({\mathbf A}\right) = F$.

In the first case, it follows by hypothesis that $v \left({\mathbf B}\right) = T$.
In particular, then:

$v \left({\mathbf A}\right) = v \left({\mathbf B}\right)$

In the second case, it must be that $v \left({\mathbf B}\right) \ne T$.
That is, $v \left({\mathbf B}\right) = F$, so that:

$v \left({\mathbf A}\right) = v \left({\mathbf B}\right)$

Hence $\mathbf A$ and $\mathbf B$ are also equivalent in the sense of definition 2.
$\Box$


Definition 2 implies Definition 3
Let $\mathbf A, \mathbf B$ be equivalent according to definition 2.

By definition of the boolean interpretation of $\iff$:

$v \left({\mathbf A \iff \mathbf B}\right)= T$ if and only if $v \left({\mathbf A}\right) = v \left({\mathbf B}\right)$
Therefore, by hypothesis and definition of tautology:

$\mathbf A \iff \mathbf B$
is a tautology.
$\Box$


Definition 3 implies Definition 1
Let $\mathbf A, \mathbf B$ be equivalent according to definition 3.
That is, let $\mathbf A \iff \mathbf B$ be a tautology.

From the boolean interpretation of $\iff$, we have:

$v \left({\mathbf A}\right) = v \left({\mathbf B}\right)$
for every boolean interpretation $v$.

Therefore it immediately follows that:

$v \left({\mathbf A}\right) = T$ if and only if $v \left({\mathbf B}\right) = T$
i.e. $\mathbf A$ and $\mathbf B$ are equivalent in the sense of definition 1.
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.1$: Theorem $2.29$ (proves equivalence of Definition 2 and Definition 3)




