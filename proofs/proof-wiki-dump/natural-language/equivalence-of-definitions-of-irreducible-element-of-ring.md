# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Irreducible_Element_of_Ring



Theorem
The following definitions of the concept of Irreducible Element of Ring are equivalent:

Definition 1
$x$ is defined as irreducible if and only if it has no non-trivial factorization in $D$.
That is, if and only if $x$ cannot be written as a product of two non-units.

Definition 2
$x$ is defined as irreducible if and only if the only divisors of $x$ are its associates and the units of $D$.
That is, if and only if $x$ has no proper divisors.


Proof
Let $\struct {D, +, \circ}$ be an integral domain whose zero is $0_D$.


$(1)$ implies $(2)$
Let $x$ be an irreducible element of $\struct {D, +, \circ}$ by definition 1.
By definition:

$x$ has no non-trivial factorization in $D$.
Let $x = y \circ z$ for some $y, z \in D$.
By definition, it cannot be the case that neither $y$ nor $z$ are units of $D$.
So either $y$ or $z$ is a unit of $D$.
Without loss of generality, suppose $y$ is a unit of $D$.
Then by definition $z$ is an associate of $x$.
Contrariwise, suppose $z$ is a unit of $D$.
Then by definition $y$ is an associate of $x$.
Thus both $y$ and $z$ are either a unit of $D$ or an associate of $x$.
$x = y \circ z$ is an arbitrary factorization of $x$ in $D$.
It follows that the only divisors of $x$ are its associates and the units of $D$.
Thus $x$ is an irreducible element of $\struct {D, +, \circ}$ by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $x$ be an irreducible element of $\struct {D, +, \circ}$ by definition 2.
Then by definition:

the only divisors of $x$ are its associates and the units of $D$.
Let $x = y \circ z$.
Then either:

$y$ is an associate of $x$ and $z$ is a unit of $D$
or:

$z$ is an associate of $x$ and $y$ is a unit of $D$.

This article, or a section of it, needs explaining.In particular: Have we ruled out the possibility of $x = y \circ z$ where both $y$ and $z$ are associates of $x$ but neither are units?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
In either case, $y \circ z$ is a trivial factorization of $x$.
Thus $x$ is an irreducible element of $\struct {D, +, \circ}$ by definition 1.
$\blacksquare$





