# 

Source: https://proofwiki.org/wiki/Acceleration_of_Particle_moving_in_Circle

Theorem
Let $P$ be a particle moving in a circular path $C$.
Then the acceleration of $P$, denoted by $\mathbf a \in \R$, is given as:

$\mathbf a = -\dfrac {\size {\mathbf v}^2 \mathbf r} {\size {\mathbf r}^2}$
where:

$\mathbf v$ is the instantaneous velocity of $P$
$\mathbf r$ is the vector whose magnitude equals the length of the radius of $C$ and whose direction is from the center of $C$ to $P$
$\size {\, \cdot \,}$ denotes the magnitude of a vector.


Proof

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
We use Lagrangian mechanics to derive the result.
Let $\mathbf r = \map {\mathbf r} t$ be a function of time $t \in \R_{\ge 0}$ .
Let $R = \size r \in \R_{>0}$ be the constant radius of the circle $C$.
The constraint can then be written as:

$\forall t: \map f {\mathbf r} := \size {\mathbf r}^2 - R^2 = 0$

This article, or a section of it, needs explaining.In particular: What is the justification for this constraint?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
The Principle of Stationary Action states that the first variation of the action $S$ must vanish.

$\ds \delta S = \delta \int L \rd t = 0$

This article, or a section of it, needs explaining.In particular: How does Euler's equation for vanishing variation imply the provided equation?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
The Lagrangian $L$ is given by the kinetic energy alone, because the constraint force is handled implicitly by the constraint, and there are no other forces acting on $P$.

$L = \dfrac 1 2 m \size {\mathbf v}^2$
To incorporate the constraint, we use a scalar Lagrange multiplier $\lambda$.
Because we are dealing with functionals, and not functions, and the constraint is local and not global, $\lambda$ is also a function of time $t$, as is $\mathbf r$:

$\lambda = \map \lambda t$
The augmented action $S^+$ is given by:

$\ds S^+ = S + \int \lambda f \d t$

This article, or a section of it, needs explaining.In particular: Why is the augmented action is defined as such?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We have that:

$\dfrac {\d f} {\d \mathbf r} = 2 \mathbf r$
Then:

$\ds \delta S^+ = \int \paren {-\map {\dfrac \d {\d t} } {m \mathbf v} + \map \lambda {2 \mathbf r} } \cdot \delta \mathbf r \rd t + \int f \delta \lambda \rd t = 0$
This means that both the terms in the brackets as well as $f$ must vanish.


This article, or a section of it, needs explaining.In particular: Why must both of these terms in the brackets as well as f must vanish?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We eliminate $\lambda$ from the term in the brackets by taking its scalar product with $\mathbf r$ and simplifying $\map {\dfrac \d {\d t} } {m \mathbf v}$ to $m \mathbf a$:

$-\map {\dfrac \d {\d t} } {m \mathbf v} \cdot \mathbf r + \map \lambda {2 \mathbf r} \cdot \mathbf r = 0$
This gives:

$2 \lambda = \dfrac {m \mathbf a \cdot \mathbf r} {R^2}$
We must replace $\mathbf a \cdot \mathbf r$.
We take the second derivative with respect to $t$ of the constraint, which must vanish too:


This theorem requires a proof.In particular: Prove that the second derivative existsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\dfrac {\d^2 f} {\d t^2} = 2 \map {\dfrac \d {\d t} } {\mathbf r \cdot \mathbf v} = 2 \paren {\mathbf a \cdot \mathbf r + \size {\mathbf v}^2} = 0$
So:

$2 \lambda = \dfrac {-m \size {\mathbf v}^2} {R^2}$
Substituting $2 \lambda$ in the term with the big brackets yields:


This article, or a section of it, needs explaining.In particular: What does "the big brackets" mean?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$-m \mathbf a - \dfrac {m \size {\mathbf v}^2} {R^2} \mathbf r = 0$
Division by $m$ completes the proof.


This article, or a section of it, needs explaining.In particular: Provide definition of m, and verify that m is non-zeroYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


This article needs to be linked to other articles.In particular: Augmented action, vanish, global constraint, local constraintYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): acceleration




