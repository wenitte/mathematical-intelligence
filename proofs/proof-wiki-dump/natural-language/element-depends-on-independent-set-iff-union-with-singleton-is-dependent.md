# 

Source: https://proofwiki.org/wiki/Element_Depends_on_Independent_Set_iff_Union_with_Singleton_is_Dependent



Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $X \in \mathscr I$.
Let $x \in S : x \notin X$.

Then:

$x \in \map \sigma X$ if and only if $X \cup \set x$ is dependent.


Proof
Necessary Condition
Let $x \in \map \sigma X$.
By definition of the closure:

$x$ depends on $X$.
From Union with Disjoint Singleton is Dependent if Element Depends on Subset:

$X \cup \set x$ is dependent.
$\Box$


Sufficient Condition
Let $X \cup \set x$ be dependent.


Lemma
Let $A \in \mathscr I$ such that $A \subseteq X \cup \set x$.

Then:

$\size A \le \size X$
$\Box$

From Max Operation Yields Supremum of Operands:

$\map \rho {X \cup \set x} = \max \set {\size A : A \subseteq X \cup \set x \land A \in \mathscr I} \le \size X$
By assumption:

$X \in \mathscr I$
From Max Operation Yields Supremum of Operands:

$\size X \le \map \rho {X \cup \set x}$
Thus:

$\size X = \map \rho {X \cup \set x}$
From Rank of Independent Subset Equals Cardinality:

$\map \rho X = \size X$
Thus:

$\map \rho X = \map \rho {X \cup \set x}$
It follows that $x$ depends on $X$ by definition.
So:

$x \in \map \sigma X$
$\blacksquare$





