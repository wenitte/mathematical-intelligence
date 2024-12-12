# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Abelian_Group



Theorem
The following definitions of the concept of Abelian Group are equivalent:

Definition 1
An abelian group is a group $G$ where:

$\forall a, b \in G: a b = b a$
That is, every element in $G$ commutes with every other element in $G$.

Definition 2
An abelian group is a group $G$ if and only if:

$G = \map Z G$
where $\map Z G$ is the center of $G$.


Proof
Definition 1 implies Definition 2
Let $G$ be an abelian group by definition 1.
Then by definition:

$\forall a \in G: \forall x \in G: a x = x a$
Thus:

$\forall a \in G: a \in \map Z G$
By definition of subset:

$G \subseteq \map Z G$
By definition of center:

$\map Z G \subseteq G$
So by definition of set equality:

$G = \map Z G$
Thus $G$ is an abelian group by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $G$ be an abelian group by definition 2.
Then by definition:

$G = \map Z G$
So by the definition of center:

$\forall a \in G: \forall x \in G: a x = x a$
Thus $G$ is an abelian group by definition 1.
$\blacksquare$


Also see
Definition:Center of Group
Center of Group is Abelian Subgroup


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 37.3$ Some important general examples of subgroups
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Examples of groups $\text{(vii)}$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): conjugacy class




