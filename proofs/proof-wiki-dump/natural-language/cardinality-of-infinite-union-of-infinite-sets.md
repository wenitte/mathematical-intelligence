# 

Source: https://proofwiki.org/wiki/Cardinality_of_Infinite_Union_of_Infinite_Sets


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\kappa$ be an infinite cardinal.
Let $X_i$ be sets of cardinality at most $\kappa$ indexed by a set $I$ of cardinality at most $\kappa$.
Then their union $\ds \bigcup_{i \mathop \in I} X_i$ has cardinality at most $\kappa$.
Furthermore, if at least one of the $X_i$ is size $\kappa$, then the union has cardinality $\kappa$.


Proof
We can assume that $I$ has cardinality $\kappa$ and that the sets $X_i$ are disjoint and all of size $\kappa$.
The more general case follows since these other possibilities can only decrease the cardinality of the union.
When at least one of the $X_i$ is size $\kappa$, then the union must be at least size $\kappa$ since it contains a copy of $X_i$.

The idea is to prove by transfinite induction that for limit ordinals $\omega_\alpha$, the order type of $\omega_\alpha \times \omega_\alpha$ is at most $\omega_\alpha$.
From this we can conclude that the cardinality of $\aleph_\alpha \times \aleph_\alpha$ is still $\aleph_\alpha$.
We can then identify $\ds \bigcup_{i \mathop \in I} X_i$ with some $\aleph_\alpha \times \aleph_\alpha$ to yield the theorem.

We begin by defining a well-ordering $\prec$ for each $\omega_\alpha \times \omega_\alpha$.
Let $\tuple {\beta_1, \beta_2} \prec \tuple {\gamma_1, \gamma_2}$ if and only if one of the following holds:

$(1): \quad \max \beta_i < \max \gamma_i$
or:

$(2): \quad \max \beta_i = \max \gamma_i$ and $\beta_1 < \gamma_1$
or:

$(3): \quad \max \beta_i = \max \gamma_i$ and $\beta_1 = \gamma_1$ and $\beta_2 < \gamma_2$.
Informally rephrased, this says that one pair is less than another pair if its max is smaller or if their max is the same but it is lexicographically smaller.


Basis for the Induction
We have that $\struct {\omega_0 \times \omega_0, \prec}$ has order type at most $\struct {\omega_0, <}$
The elements of $\omega_0 \times \omega_0$ can be arranged in an array as follows.
Arrows are drawn so that $\tuple {a, b} \to \tuple {c, d}$ if and only if $\tuple {a, b}$ is the immediate predecessor of $\tuple {c, d}$ in the ordering $\prec$.
This diagram may be familiar from the proofs of theorems such as Countable Union of Countable Sets is Countable and Cartesian Product of Countable Sets is Countable.
We include it here to suggest motivation for the definition of $\prec$ by illuminating its behavior.


$\begin{array} {*{4}c}
\tuple {0, 0} & \rightarrow & \tuple {0, 1} &             & \tuple {0, 2} & \cdots \\
      & \swarrow    &       & \nearrow    & \downarrow     \\
\tuple {1, 0} & \rightarrow & \tuple {1, 1} &             & \tuple {1, 2} & \cdots \\
      &             &       & \swarrow    &                \\
      &             & \leftarrow                           \\
      & \swarrow    &                                     \\
\tuple {2, 0} & \rightarrow & \tuple {2, 1} & \rightarrow & \tuple {2, 2} & \cdots \\
\vdots  &           & \vdots & & \vdots & \ddots \\

\end{array}$
It is not hard to see the order-isomorphism suggested by this diagram between $\struct {\omega_0 \times \omega_0, \prec}$ and $\struct {\omega_0, <}$.
The path traced by the arrows works its way out, hitting each element along the perimeter of the square formed by the first $n$ rows and $n$ columns where $\map \max {i, j} = n$ before moving to the next layer, where $\map \max {i, j} = n + 1$.
Within the $n$-th such perimeter, it starts at the element $\tuple {0, n}$ moving down to $\tuple {n - 1, n}$.
Then it jumps to $\tuple {n, 0}$ and works rightward to $\tuple {n, n}$.
After that it jumps to the next perimeter at $\tuple {0, n + 1}$.
The existence of such an order-isomorphism verifies the base case of our inductive proof.


This article contains statements that are justified by handwavery.In particular: It is not hard to see the order-isomorphism suggested by this diagram...You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Induction Step
We assume that $\struct {\omega_\beta \times \omega_\beta, \prec}$ has order type at most $\struct {\omega_\beta, <}$ for all $\beta < \alpha$.
Then we prove that $\struct {\omega_\alpha \times \omega_\alpha, \prec}$ has order type at most $\struct {\omega_\alpha, <}$.

First, note that if the order type of $\omega_\alpha \times \omega_\alpha$ exceeds that of $\omega_\alpha$, then $\struct {\omega_\alpha + 1, <}$ embeds into $\omega_\alpha \times \omega_\alpha$.
The image of $\omega_\alpha$ (viewed as an element of $\omega_\alpha + 1$) under this embedding must be a pair $\tuple {\beta_1, \beta_2}$ in $\omega_\alpha \times \omega_\alpha$ such that its lower closure:

$\tuple {\beta_1, \beta_2}^\prec = \set {\tuple {\gamma_1, \gamma_2} \in \omega_\alpha \times \omega_\alpha : \tuple {\gamma_1, \gamma_2} \prec \tuple {\beta_1, \beta_2} }$
has cardinality $\card {\omega_\alpha} = \aleph_\alpha$.

Thus, it will be sufficient to show that for every $\tuple {\beta_1, \beta_2} \in \omega_\alpha \times \omega_\alpha$, the set $\tuple {\beta_1, \beta_2}^\prec$ has cardinality less than $\aleph_\alpha$.
We show this by containing $\tuple {\beta_1, \beta_2}^\prec$ in a set whose cardinality we can bound using the inductive hypothesis.

Let $\beta = \max{\beta_i} + 1$.
We have $\beta \in \omega_\alpha$ since $\omega_\alpha$ is a limit ordinal.
Moreover, by the definition of $\prec$ and the equivalence of $<$ and $\in$ for ordinals, for each $\tuple {\gamma_1, \gamma_2} \in \tuple {\beta_1, \beta_2}^\prec$ we have:

$\gamma_1 \in \beta$
and:

$\gamma_2 \in \beta$.
Thus $\tuple {\beta_1, \beta_2}^\prec$ is a subset of $\beta \times \beta$.
However, since $\beta \in \omega_\alpha$ and $\omega_\alpha$ is a limit ordinal, we must have $\card \beta = \aleph_\gamma$ for some $\gamma < \alpha$ (unless it is finite, in which case the proof is easy).
It follows that the cardinality of $\tuple {\beta_1, \beta_2}^\prec$ is at most:

$\card {\aleph_\gamma \times \aleph_\gamma} = \card {\omega_\gamma \times \omega_\gamma}$
But, by the inductive hypothesis, the order-type of $\struct {\omega_\gamma \times \omega_\gamma, \prec}$ is at most $\struct {\omega_\gamma, <}$.
So $\card {\omega_\gamma \times \omega_\gamma}$ is at most $\card {\omega_\gamma} = \aleph_\gamma < \aleph_\alpha$.
$\Box$

The inductive proof demonstrates that $\struct {\omega_\alpha \times \omega_\alpha, \prec}$ has order type at most $\struct {\omega_\alpha, <}$ for all limit ordinals $\omega_\alpha$.
We have that order-isomorphisms are bijections and hence preserve cardinality.
We also have that $\omega_\alpha$ has cardinality $\aleph_\alpha$.
This means that the cardinality of $\aleph_\alpha \times \aleph_\alpha$ is at most $\aleph_\alpha$.

We have that $\aleph_\alpha$ clearly injects into $\aleph_\alpha \times \aleph_\alpha$
From the Cantor-Bernstein-Schröder Theorem:

$\card {\aleph_\alpha \times \aleph_\alpha} = \aleph_\alpha$
$\Box$

As a corollary of the Zermelo's Well-Ordering Theorem, the cardinal $\kappa$ is the cardinality of some initial ordinal $\omega_\alpha$.
Hence $\kappa$ is $\aleph_\alpha$ for some $\alpha$.
We have that $\ds {\bigcup_{i \mathop \in I} X_i}$ embeds in $I\times \aleph_\alpha$
This in turn embeds in $\aleph_\alpha \times \aleph_\alpha$
Hence the above result yields the theorem.
$\blacksquare$





