# 

Source: https://proofwiki.org/wiki/Set_is_G-Set_iff_Element_of_G-Ordered_Set



Theorem
Let $g$ be a progressing mapping.
Let $x$ be a set.
Then:

$x$ is a $g$-set
if and only if:

$x$ is an element of a $g$-ordered set.


Proof
Let $M$ be the class of all $g$-sets.
Then $M$ is a $g$-tower.


Sufficient Condition
Let $x$ be a $g$-set.
Hence by $g$-tower is $g$-ordered, $M$ is $g$-ordered.
Hence for $x \in M$, the lower section $x^\subseteq$ of $x$ is also $g$-ordered.
As $x \in x^\subseteq$ it follows that $x$ is an element of a $g$-ordered set.
$\Box$


Necessary Condition
Let $y$ be a $g$-ordered set.
Then by Transfinite Induction on the $g$-ordering of $y$, every element of $y$ must be an element of $M$.

Indeed:

$\O \in M$

Let $x \in y$ be an element of $M$ other than the greatest element of $y$
Then the immediate successor of $x$ is $\map g x$.
But $\map g x$ is an element of $M$.

Let $z$ be a limit element $y$.
Let each element of $z^\subset$ be an element of $M$.
Then:

because $z = \bigcup x^\subset$
$M$ is closed under chain unions.
$z$ is an element of $M$.

Thus every element of $y$ is an element of $M$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {III}$ -- The existence of minimally superinductive classes: $\S 8$ Another characterization of $g$-sets




