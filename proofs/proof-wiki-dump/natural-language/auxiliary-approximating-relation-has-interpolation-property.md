# 

Source: https://proofwiki.org/wiki/Auxiliary_Approximating_Relation_has_Interpolation_Property

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.
Let $x, z \in S$ such that:

$x \ll z \land x \ne z$

This article, or a section of it, needs explaining.In particular: $\ll$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\RR$ be an auxiliary approximating relation on $S$.

Then

$\exists y \in S: \tuple {x, y} \in \RR \land \tuple {y, z} \in \RR \land x \ne y$


Proof
Define $I := \set {u \in S: \exists y \in S: \tuple {u, y} \in \RR \land \tuple {y, z} \in \RR}$
By definition of auxiliary relation:

$\tuple {\bot, \bot} \in \RR$ and $\tuple {\bot, z} \in \RR$
where $\bot$ denotes the smallest element in $L$.
Then

$\bot \in I$
By definition:

$I$ is a non-empty set.
We will prove that

$I$ is a lower section.
Let $a \in I, b \in S$ such that

$b \preceq a$
By definition of $I$:

$\exists s \in S: \tuple {a, s} \in \RR \land \tuple {s, z} \in \RR$
By definitions of auxiliary relation and reflexivity:

$\tuple {b, s} \in \RR$
Thus

$b \in I$
$\Box$

We will prove that

$I$ is directed.
Let $a, b \in I$.
By definition of $I$:

$\exists s \in S: \tuple {a, s} \in \RR \land \tuple {s, z} \in \RR$
and

$\exists t \in S: \tuple {b, t} \in \RR \land \tuple {t, z} \in \RR$
By Auxiliary Relation is Congruent:

$\tuple {a \vee b, s \vee t} \in \RR$
By definition of auxiliary relation:

$\tuple {s \vee t, z} \in \RR$
Thus by definition of $I$:

$a \vee b \in I$
Thus by Join Succeeds Operands:

$a \preceq a \vee b$ and $b \preceq a \vee b$
$\Box$

By definition:

$I$ is ideal in $L$.
We will prove that

$I \subseteq z^{\RR}$
Let $a \in I$.
By definition of $I$:

$\exists s \in S: \tuple {a, s} \in \RR \land \tuple {s, z} \in \RR$
By definition of auxiliary relation:

$a \preceq s$
Again by definition of auxiliary relation and reflexivity:

$\tuple {a, z} \in \RR$
Thus by definition of $\RR$-segment:

$a \in z^{\RR}$
$\Box$

By Supremum of Subset and definition of approximating relation:

$\sup I \preceq \sup \left({z^{\RR} }\right) = z$
We will prove that

$\sup I = z$
Aiming for a contradiction, suppose

$\sup I \ne z$
By definition of $\prec$:

$\sup I \prec z$
Then by definition of antisymmetry:

$z \npreceq \sup I$
By Not Preceding implies Approximating Relation and not Preceding:

$\exists y \in S: \tuple {y, z} \in \RR \land y \npreceq \sup I$
Again by Not Preceding implies Approximating Relation and not Preceding:

$\exists u \in S: \tuple {u, y} \in \RR \land u \npreceq \sup I$
By definition of $I$:

$u \in I$
This contradicts $u \preceq \sup I$ by definition of supremum.
$\Box$
By Way Below iff Second Operand Preceding Supremum of Ideal implies First Operand is Element of Ideal:

$x \in I$
By definition of $I$:

$\exists s \in S: \tuple {x, s} \in \RR \land \tuple {s, z} \in \RR$
By definition of auxiliary relation:

$x \preceq s$
By definition of auxiliary relation and reflexivity:

$\tuple {x, z} \in \RR$
By Auxiliary Approximating Relation has Quasi Interpolation Property:

$\exists y \in S: x \preceq y \land \tuple {y, z} \in \RR \land x \ne y$
By definition of $\prec$:

$ x \prec y$
Define $Y := s \vee y$
By Join Succeeds Operands:

$s \preceq Y$ and $y \preceq Y$
Then 

$x \ne Y$
By definition of reflexivity:

$x \preceq x$
By definition of auxiliary relation:

$\tuple {x, Y} \in \RR$
Again by definition of auxiliary relation:

$\tuple {Y, z} \in \RR$
Hence

$\exists y \in S: \tuple {x, y} \in \RR \land \tuple {y, z} \in \RR \land x \ne y$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:50




