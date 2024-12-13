# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_from_Woset_onto_Subset


It has been suggested that this page or section be merged into Order Automorphism on Well-Ordered Class is Forward Moving.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\struct {S, \preceq}$ be a woset.
Let $T \subseteq S$.
Let $f: S \to T$ be an order isomorphism.

Then $\forall x \in S: x \preceq \map f x$.


Proof
Let $T = \set {x \in S: \map f x \prec x}$.
We are to show that $T = \O$.

Aiming for a contradiction, suppose that $T \ne \O$.
Then as $\struct {S, \preceq}$ is a woset, by definition $T$ has a minimal element: call it $x_0$.
Since $x_0 \in T$, we have $\map f {x_0} \prec x_0$.
So, let $x_1 = \map f {x_0}$.
$f$ is an order isomorphism, so since $x_1 \prec x_0$, it follows that $\map f {x_1} \prec \map f {x_0} = x_1$.
So as $\map f {x_1} \prec x_1$ it follows that $x_1 \in T$.
But $x_0$ was chosen to be the minimal element of $T$.
From this contradiction, it follows that it can not be the case that $T \ne \O$.
So $T = \O$ and so $\forall x \in S: x \preceq \map f x$.
$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.7$: Well-Orderings and Ordinals: Theorem $1.7.2$




