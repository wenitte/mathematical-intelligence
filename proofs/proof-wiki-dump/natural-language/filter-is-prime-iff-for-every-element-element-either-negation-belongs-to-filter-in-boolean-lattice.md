# 

Source: https://proofwiki.org/wiki/Filter_is_Prime_iff_For_Every_Element_Element_either_Negation_Belongs_to_Filter_in_Boolean_Lattice


This article needs to be linked to other articles.In particular: Reconsider categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $B = \struct {S, \vee, \wedge, \neg, \preceq}$ be a Boolean lattice.
Let $F$ be a filter in $B$.

Then

$F$ is prime
if and only if

$\forall x \in S: x \in F \lor \paren {\neg x} \in F$


Proof
Sufficient Condition
Let $F$ be prime.
Let $x \in S$.
By definition of Boolean lattice:

$x \vee \neg x = \top$
where $\top$ denotes the top of $B$.
By definition of non-empty set:

$\exists y: y \in F$
By definition of greatest element:

$y \preceq \top$
By definition of upper section:

$\top \in F$
Thus by definition of prime filter:

$x \in F$ or $\neg x \in F$
$\Box$


Necessary Condition
Assume that

$\forall x \in S: x \in F \lor \paren {\neg x} \in F$
Let $a, b \in S$ such that

$a \vee b \in F$
Aiming for a contradiction, suppose

$a \notin F$ and $b \notin F$
By assumption:

$\neg a \in F$ and $\neg b \in F$
By Filtered in Meet Semilattice:

$\paren {\neg a} \wedge \paren {\neg b} \in F$
By De Morgan's Laws (Boolean Algebras):

$\map \neg {a \vee b} \in F$
By Filtered in Meet Semilattice:

$\paren {a \vee b} \wedge \map \neg {a \vee b} \in F$
By definition of Boolean lattice:

$\bot \in F$
where $\bot$ denotes the bottom of $B$.
By definition of smallest element:

$\bot \preceq a$
By definition of upper section:

$a \in F$
This contradicts $a \notin F$
Thus by Proof by Contradiction

the result holds.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:20




