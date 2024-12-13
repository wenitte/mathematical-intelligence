# 

Source: https://proofwiki.org/wiki/Image_under_Increasing_Mapping_equal_to_Special_Set_is_Complete_Lattice

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.
Let $f: S \to S$ be an increasing mapping.
Let $P = \struct {M, \precsim}$ be an ordered subset of $L$ such that

$M = \set {x \in S: x = \map f x}$

Then $P$ is complete lattice.


Proof
We will prove that

$\forall X \subseteq M: \forall Y \subseteq S: Y = \left\{ {x \in S: x}\right.$ is upper bound for $\left.{X \land \map f x \preceq x}\right\} \implies \inf_L Y \in M$
Let $X \subseteq M$, $Y \subseteq S$ such that

$Y = \left\{ {x \in S: x}\right.$ is upper bound for $\left.{X \land \map f x \preceq x}\right\}$
We will prove that

$\map f {\inf Y}$ is lower bound for $Y$.
Let $y \in Y$.
By definition of $Y$:

$\map f y \preceq y$
By definitions of infimum and lower bound:

$\inf Y \preceq y$
By definition of increasing mapping:

$\map f {\inf Y} \preceq \map f y$
Thus by definition of transitivity:

$\map f {\inf Y} \preceq y$
$\Box$
We will prove that

$\map f {\map f {\inf Y} }$ is upper bound for $X$.
Let $m \in X$.
We will prove that

$m$ is lower bound for $Y$.
Let $y \in Y$.
By definition of $Y$:

$\map f y$ is upper bound for $X$ and $\map f y \preceq y$
By definition of upper bound:

$m \preceq \map f y$
Thus by definition of transitivity:

$m \preceq y$
$\Box$

By definition of infimum:

$m \preceq \inf Y$
By definition of increasing mapping:

$\map f m \preceq \map f {\inf Y}$
By definition of subset:

$m \in M$
By definition of $M$:

$m = \map f m$
By definition of increasing mapping:

$m \preceq \map f {\map f {\inf Y} }$
$\Box$

By definition of infimum:

$\map f {\inf Y} \preceq \inf Y$
By definition of increasing mapping:

$\map f {\map f {\inf Y} } \preceq \map f {\inf Y}$
By definition of $Y$:

$\map f {\inf Y} \in Y$
By definitions of infimum and lower bound:

$\inf Y \preceq \map f {\inf Y}$
By definition of antisymmetry:

$\inf Y = \map f {\inf Y}$
Thus by definition of $M$:

$\inf Y \in M$
$\Box$

Define:

$Y_0 = \left\{ {y \in S: \map f y}\right.$ is upper bound for $\left.{M \land \map f y \preceq y}\right\}$
By lemma:

$\inf Y_0 \in M$
We will prove that

$\forall X \subseteq M: X$ admits a supremum in $P$.
Let $X \subseteq M$.
Define:

$Y = \left\{ {y \in S: \map f y}\right.$ is upper bound for $\left.{M \land \map f y \preceq y}\right\}$
Define $z = \inf Y$.
By lemma:

$z \in M$
We will prove that

$z$ is upper bound for $X$ in $P$.
Let $m \in X$.
By analogy:

$m$ is lower bound for $Y$ in $L$.
By definition of infimum:

$m \preceq \inf Y$
Thus by definition of ordered subset:

$m \precsim z$
$\Box$

We will prove that

$\forall x \in M: x$ is upper bound for $X$ in $P \implies z \precsim x$
Let $x \in M$ such that

$x$ is upper bound for $X$.
By definition of $M$:

$x = \map f x$
By definition of ordered subset:

$\map f x$ is upper bound for $X$ in $L$.
By definition of $Y$:

$x \in Y$
By definitions of infimum and lower bound:

$\inf Y \preceq x$
Thus by definition of ordered subset:

$z \precsim x$
$\Box$

Hence $X$ admits a supremum in $P$.
$\Box$

Thus by {{Complete iff Admits All Suprema]]:

$P$ is a complete lattice.
$\blacksquare$


Sources
Mizar article YELLOW_2:29




