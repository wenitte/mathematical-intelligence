# 

Source: https://proofwiki.org/wiki/Operator_Generated_by_Closure_System_Preserves_Directed_Suprema_iff_Closure_System_Inherits_Directed_Suprema



Theorem
Let $L = \struct {X, \vee, \wedge, \preceq}$ be a complete lattice.
Let $S = \struct {Y, \precsim}$ be a closure system on $L$.

Then $\map {\operatorname {operator} } S$ preserves directed suprema
if and only if $S$ inherits directed suprema.
where $\map {\operatorname {operator} } S$ denotes the operator generated by $S$.


Proof
Sufficient Condition
Assume that $\map {\operatorname {operator} } S$ preserves directed suprema.
Let $Z$ be directed subset of $Y$ such that

$Z$ admits a supremum in $L$.
By Image of Operator Generated by Closure System is Set of Closure System:

$\map {\operatorname {operator} } S \sqbrk X = Y$
By Operator Generated by Closure System is Closure Operator:

$\map {\operatorname {operator} } S$ is closure operator.
By definition of closure operator/idempotent:

$\map {\operatorname {operator} } S \sqbrk Z = Z$
By definitions of Definition:Mapping Preserves Supremum/Directed and Definition:Mapping Preserves Supremum/Subset:

$\sup_L Z = \map {\map {\operatorname {operator} } S} {\sup_L Z}$
Thus by definition of image of mapping:

$\sup_L Z \in Y$
$\Box$


Necessary Condition
Assume that

$S$ inherits directed suprema.
Define $f := \map {\operatorname {operator} } S$.
By Image of Operator Generated by Closure System is Set of Closure System:

$f \sqbrk X = Y$
Let $A$ be a directed subset of $X$ such that

$A$ admits a supremum in $L$.
Thus by definition of complete lattice:

$f \sqbrk A$ admits a supremum in $L$.
We will prove that

$\map f {\sup_L A}$ is upper bound for $f \sqbrk A$
Let $x \in f \sqbrk A$.
By definition of image of subset:

$\exists y \in A: x = \map f y$
By definitions of supremum and upper bound:

$y \preceq \sup_L A$
Thus by definition of closure operator/increasing:

$x \preceq \map f {\sup_L A}$
$\Box$

By definition of supremum:

$\map {\sup_L} {f \sqbrk A} \preceq \map f {\sup_L A}$
We will prove that

$\map {\sup_L} {f \sqbrk A}$ is upper bound for $A$
Let $x \in A$.
By definition of image of set:

$\map f x \in f \sqbrk A$
By definitions of supremum and upper bound:

$\map f x \preceq \map {\sup_L} {f \sqbrk A}$
By definition of closure operator/inflationary:

$x \preceq \map f x$
Thus by definition of transitivity:

$x \preceq \map {\sup_L} {f \sqbrk A}$
$\Box$

By definition of supremum:

$\sup_L A \preceq \map {\sup_L} {f \sqbrk A}$
By Image of Directed Subset under Increasing Mapping is Directed:

$f \sqbrk A$ is directed in $L$.
By definition of ordered subset:

$f \sqbrk A$ is directed in $S$.
By definition of directed suprema inheriting:

$\map {\sup_L} {f \sqbrk A} \in Y$
By definition of closure operator/idempotent:

$\map f {\map {\sup_L} {f \sqbrk A} } = \map {\sup_L} {f \sqbrk A}$
By definition of closure operator/increasing:

$\map f {\sup_L A} \preceq \map {\sup_L} {f \sqbrk A}$
Thus by definition of antisymmetry:

$\map f {\sup_L A} = \map {\sup_L} {f \sqbrk A}$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL10:24




