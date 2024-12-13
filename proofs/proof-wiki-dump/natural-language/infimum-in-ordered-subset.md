# 

Source: https://proofwiki.org/wiki/Infimum_in_Ordered_Subset



Theorem
Let $L = \struct {S, \preceq}$ be an ordered set.
Let $R = \struct {T, \preceq'}$ be an ordered subset of $L$.
Let $X \subseteq T$ such that

$X$ admits an infimum in $L$.

Then $\inf_L X \in T$ if and only if

$X$ admits an infimum in $R$ and $\inf_R X = \inf_L X$


Proof
By definition of ordered subset:

$T \subseteq S$
and

$\forall x, y \in T: x \preceq' y \iff x \preceq y$


Sufficient Condition
Let $\inf_L X \in T$.
By definition of infimum:

$\inf_L X$ is lower bound for $X$ in $L$.
By definition of $\preceq'$:

$\inf_L X$ is lower bound for $X$ in $R$.
We will prove that:

$\forall x \in T: x$ is lower bound for $X$ in $R \implies x \preceq' \inf_L X$
Let $x \in T$ such that:

$x$ is lower bound for $X$ in $R$.
By definition of $\preceq'$:

$x$ is lower bound for $X$ in $L$.
By definition of infimum:

$x \preceq \inf_L X$
Thus by definition of $\preceq'$:

$x \preceq' \inf_L X$
$\Box$
Hence $X$ admits an infimum in $R$ and $\inf_R X = \inf_L X$.
$\Box$


Necessary Condition
Assume that:

$X$ admits an infimum in $R$ and $\inf_R X = \inf_L X$
By definition of infimum:

$\inf_R X \in T$
Thus by assumption:

$\inf_L X \in T$
$\blacksquare$


Sources
Mizar article YELLOW_0:63




