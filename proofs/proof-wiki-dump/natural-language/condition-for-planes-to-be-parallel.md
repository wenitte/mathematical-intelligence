# 

Source: https://proofwiki.org/wiki/Condition_for_Planes_to_be_Parallel



Theorem
Let $P: \alpha_1 x_1 + \alpha_2 x_2 + \alpha_3 x_3 = \gamma$ be a plane in $\R^3$.

Then the plane $P'$ is parallel to $P$ if and only if there is a $\gamma' \in \R$ such that:

$P' = \set {\tuple {x_1, x_2, x_3} \in \R^3 : \alpha_1 x_1 + \alpha_2 x_2 + \alpha_3 x_3 = \gamma'}$


Proof
Necessary Condition

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sufficient Condition
Let $P' \ne P$ be a plane given by the equation:

$\alpha_1 x_1 + \alpha_2 x_2 + \alpha_3 x_3 = \gamma'$
Aiming for a contradiction, suppose we have a point:

$\mathbf x = \tuple {x_1, x_2, x_3} \in P \cap P'$
Then, as $\mathbf x \in P$, it also satisfies:

$\alpha_1 x_1 + \alpha_2 x_2 + \alpha_3 x_3 = \gamma$
It follows that $\gamma = \gamma'$, so $P = P'$.
This contradiction shows that $P \cap P' = \O$, that is, $P$ and $P'$ are parallel.
The remaining case is when $P' = P$.
By definition, $P$ is parallel to itself. 
The result follows.
$\blacksquare$


Also see
Condition for Straight Lines in Plane to be Parallel


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text V$: Vector Spaces: $\S 28$: Linear Transformations




