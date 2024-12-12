# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Symmetric_Closure



Theorem
The following definitions of the concept of Symmetric Closure are equivalent:
Let $\RR$ be a relation on a set $S$.

Definition 1
The symmetric closure of $\RR$ is denoted $\RR^\leftrightarrow$, and is defined as the union of $\RR$ with its inverse:

$\RR^\leftrightarrow = \RR \cup \RR^{-1}$
Definition 2
The symmetric closure of $\RR$ is denoted $\RR^\leftrightarrow$, and is defined as the smallest symmetric relation on $S$ which contains $\RR$.


Proof
First we note that from Union of Relation with Inverse is Symmetric Relation, $\RR \cup \RR^{-1}$ is a symmetric relation.


Definition $(1)$ implies Definition $(2)$
Let $\RR^\leftrightarrow$ be the symmetric closure of $\RR$ by definition $1$.
Then by definition:

$\RR^\leftrightarrow = \RR \cup \RR^{-1}$

Let $\QQ$ be a symmetric relation such that:

$\RR \subseteq \QQ$
Let $\tuple {a, b} \in \RR \cup \RR^{-1}$.
By definition of set union, either:

$\tuple {a, b} \in \RR$
or:

$\tuple {a, b} \in \RR^{-1}$


Case $1$
Let $\tuple {a, b} \in \RR$.
Then by definition of subset:

$\tuple {a, b} \in \QQ$
Let $\tuple {a, b} \in \RR^{-1}$.
Then by definition of inverse relation:

$\tuple {b, a} \in \RR$
Then by definition of subset:

$\tuple {b, a} \in \QQ$
But by hypothesis $\QQ$ is symmetric.
Hence:

$\tuple {a, b} \in \QQ$
So by Proof by Cases:

$\tuple {a, b} \in \RR \cup \RR^{-1} \implies \tuple {a, b} \in \QQ$
Hence $\RR \cup \RR^{-1} \subseteq \QQ$
It follows that $\RR \cup \RR^{-1}$ is the smallest symmetric relation with respect to the subset ordering.

Thus $\RR^\leftrightarrow$ is the symmetric closure of $\RR$ by definition $2$.
$\Box$


Definition $(2)$ implies Definition $(1)$
Let $\RR^\leftrightarrow$ be the symmetric closure of $\RR$ by definition $2$.
Then by definition:

$\RR^\leftrightarrow$ is the smallest symmetric relation on $S$ which has $\RR$ as a subset.
Hence as $\RR \cup \RR^{-1}$ is a symmetric relation a priori:

$\RR^\leftrightarrow \subseteq \RR \cup \RR^{-1}$
But also a priori, for every symmetric relation $\QQ$ such that $\RR \subseteq \QQ$:

$\RR \cup \RR^{-1} \subseteq \QQ$
Hence:

$\RR \cup \RR^{-1} \subseteq \RR^\leftrightarrow$

Thus by set equality:

$\RR \cup \RR^{-1} = \RR^\leftrightarrow$
That is, $\RR^\leftrightarrow$ is the symmetric closure of $\RR$ by definition $1$.
$\blacksquare$





