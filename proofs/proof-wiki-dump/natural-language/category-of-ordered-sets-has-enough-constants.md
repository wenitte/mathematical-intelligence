# 

Source: https://proofwiki.org/wiki/Category_of_Ordered_Sets_has_Enough_Constants

Theorem
Let $\mathbf{OrdSet}$ be the category of ordered sets.

Then $\mathbf{OrdSet}$ has enough constants.


Proof
By Singleton Ordered Set is Terminal Object, we have that any ordered set with a singleton as underlying set is terminal in $\mathbf{OrdSet}$.
Let $1$ be such a singleton ordered set.

To show that $\mathbf{OrdSet}$ has enough constants, it is to be shown that if:

$f: P \to Q \ne g: P \to Q$
then there exists an $x: 1 \to P$ such that $f \circ x \ne g \circ x$.

Now by definition of $\mathbf{OrdSet}$, $f$ and $g$ are increasing mappings.
In particular, they are mappings, and by Equality of Mappings, there must be a $p \in P$ such that:

$\map f p \ne \map g p$

Define $\bar p: 1 \to P$ by $\map {\bar p} * = p$ (where $*$ is the unique element of $1$).
If this is a morphism in $\mathbf{OrdSet}$, we are evidently done.
This follows from Mapping is Constant iff Increasing and Decreasing.

Hence $\mathbf{OrdSet}$ has enough constants.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 2.3$: Example $2.12$: $1$




