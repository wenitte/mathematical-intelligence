# 

Source: https://proofwiki.org/wiki/Product_of_Discrete_Random_Variables

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be discrete random variables on $\struct {\Omega, \Sigma, \Pr}$.

Let $V: \Omega \to \R$ be defined as:

$\forall \omega \in \Omega: \map V \omega = \map X \omega \map Y \omega$
Then $V$ is also a discrete random variable on $\struct {\Omega, \Sigma, \Pr}$.


Proof
To show that $V$ is a discrete random variable on $\struct {\Omega, \Sigma, \Pr}$, we need to show that:

$(1): \quad $The image of $U$ and $V$ are countable subsets of $\R$;
$(2): \quad \forall x \in \R: \set {\omega \in \Omega: \map V \omega = x} \in \Sigma$.

First we consider any $V_V = \set {\omega \in \Omega: \map V \omega = v}$ such that $V_v \ne \O$.
We have that:

$V_v = \set {\omega \in \Omega: \map X \omega \map Y \omega = v}$
Consider any $\omega \in V_v$.
If $v = 0$ the result follows immediately, so we assume that $v \ne 0$.
Then:

$\omega \in X_x \cap Y_x$
where:

$X_x = \set {\omega \in \Omega: \map X \omega = x}, Y_x = \set {\omega \in \Omega: \map Y \omega = \dfrac v x}$
Both $X_x \in \Sigma$ and $Y_x \in \Sigma$ (as $X$ and $Y$ are discrete random variables.
As $\struct {\Omega, \Sigma, \Pr}$ is a probability space then $X_x \cap Y_x \in \Sigma$.
Now note that $\ds V_v = \bigcup_{x \mathop \in \R} \paren {X_x \cap Y_x}$.
That is, it is the union of all such intersections of sets whose discrete random variables multiply together to make $v$.
As $X_x$ is a countable set it follows that $V_v$ is a countable union of countable sets.
From Countable Union of Countable Sets is Countable it follows that $X_x$ is a countable set.
And, by dint of $\struct {\Omega, \Sigma, \Pr}$ being a probability space, $V_v \in \Sigma$.
Thus $V$ is a discrete random variables on $\struct {\Omega, \Sigma, \Pr}$.
$\blacksquare$


This article, or a section of it, needs explaining.In particular: Might need to be more rigorous on the boundary instances.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.1$: Probability mass functions: Exercise $1$




