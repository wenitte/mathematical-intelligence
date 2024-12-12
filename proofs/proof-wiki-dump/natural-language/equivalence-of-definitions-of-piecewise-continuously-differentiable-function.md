# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Piecewise_Continuously_Differentiable_Function



Theorem
The following definitions of the concept of Piecewise Continuously Differentiable Function are equivalent:

Let $f$ be a real function defined on a closed interval $\closedint a b$. 

Definition 1
$f$ is piecewise continuously differentiable if and only if:

$(1): \quad f$ is continuous
$(2): \quad$ there exists a finite subdivision $\set {x_0, \ldots, x_n}$ of $\closedint a b$, $x_0 = a$ and $x_n = b$, such that:
$(2.1): \quad f$ is continuously differentiable on $\openint {x_{i - 1}} {x_i}$ for every $i \in \set {1, \ldots, n}$
$(2.2): \quad$ the one-sided limits $\ds \lim_{x \mathop \to {x_{i - 1}}^+} \map {f'} x$ and $\ds \lim_{x \mathop \to {x_i}^-} \map {f'} x$ exist for every $i \in \set {1, \ldots, n}$.
Definition 2
$f$ is piecewise continuously differentiable if and only if:

there exists a finite subdivision $\set {x_0, \ldots, x_n}$ of $\closedint a b$, $x_0 = a$ and $x_n = b$, such that:
$f$ is continuously differentiable on $\closedint {x_{i − 1} } {x_i}$, where the derivative at $x_{i − 1}$ understood as right-handed and the derivative at $x_i$ understood as left-handed, for every $i \in \set {1, \ldots, n}$.


Proof
Definition 2 implies Definition 1
Assume that $f$ satisfies the requirement of Definition 2.
We need to prove that $f$ satisfies the requirements of Definition 1.

$f$ is continuous by Piecewise Continuously Differentiable Function/Definition 2 is Continuous.
This proves $(1)$ in Definition 1.

$f$ is continuously differentiable on $\closedint {x_{i - 1} } {x_i}$, the derivatives at $x_{i - 1}$ and $x_i$ understood as one-sided derivatives, for every $i \in \set {1, \ldots, n}$, by definition.
Therefore, $f$ is continuously differentiable at every point of every $\openint {x_{i - 1} } {x_i}$ since $\openint {x_{i - 1} } {x_i}$ is a subset of $\closedint {x_{i - 1} } {x_i}$.
This proves $(2.1)$ in Definition 1.

$f$ has a continuous right-hand derivative at $x_{i - 1}$ for every $i \in \set {1, \ldots, n}$.
This means that:

$\map {f'_+} {x_{i - 1} } = \ds \lim_{x \mathop \to {x_{i - 1} }^+} \map {f'} x$
This implies that $\ds \lim_{x \mathop \to {x_{i - 1} }^+} \map {f'} x$ exists for every $i \in \set {1, \ldots, n}$.
Also, $f$ has a continuous left-hand derivative at $x_i$ for every $i \in \set {1, \ldots, n}$.
This means that

$\map {f'_-} {x_i} = \ds \lim_{x \mathop \to {x_i}^-} \map {f'} x$
This implies that $\ds \lim_{x \mathop \to {x_i}^-} \map {f'} x$ exists for every $i \in \set {1, \ldots, n}$.
These two conclusions prove that requirement $(2.2)$ in Definition 1 is satisfied.
This finishes the proof that $f$ satisfies the requirements of Definition 1.
$\Box$


Definition 1 implies Definition 2
Assume that $f$ satisfies the requirements of Definition 1.
We need to prove that $f$ satisfies the requirement of Definition 2.

$f$ is continuously differentiable on $\openint {x_{i - 1} } {x_i}$ for every $i \in \set {1, \ldots, n}$ by definition.
Also, the one-sided limits $\ds \lim_{x \mathop \to {x_{i - 1} }^+} \map {f'} x$ and $\ds \lim_{x \mathop \to {x_i}^-} \map {f'} x$ exist for every $i \in \set {1, \ldots, n}$.
$f$ is continuously differentiable on $\closedint {x_{i - 1} } {x_i}$, the derivatives at $x_{i - 1}$ and $x_i$ understood as one-sided derivatives, for every $i \in \set {1, \ldots, n}$, by Extendability Theorem for Derivatives Continuous on Open Intervals.
This is exactly the requirement of Definition 2.
$\blacksquare$





