# 

Source: https://proofwiki.org/wiki/Limit_with_Rational_Epsilon_and_Delta

Theorem
Let $\openint a b$ be an open real interval.
Let $c \in \openint a b$.
Let $f: \openint a b \setminus \set c \to \R$ be a real function.
Let $L \in \R$.
Suppose that:

$\forall \epsilon > 0 \in \Q_{>0}: \exists \delta \in \Q_{>0}: \forall x \in \R: 0 < \size {x - c} < \delta \implies \size {\map f x - L} < \epsilon$
Then the limit of $f$ exists as $x$ tends to $c$, and is equal to $L$.


Proof
Recall the definition of a limit of a real function:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in \R: 0 < \size {x - c} < \delta \implies \size {\map f x - L} < \epsilon$
Denote by $\map P {\epsilon,\delta}$ the proposition that the above statement holds.
Suppose that $\map P {\epsilon,\delta}$ holds for all rational $\epsilon$ in the interval of interest:

$\forall \epsilon \in \Q_{>0}: \exists \delta \in \Q_{>0}: \forall x \in \R: 0 < \size {x - c} < \delta \implies \size {\map f x - L} < \epsilon$
Let $\epsilon_0 > 0$ be a real number.
From Between two Real Numbers exists Rational Number, there is some rational $\epsilon_0'$ such that $0 < \epsilon_0' < \epsilon_0$.
Then $\size {\map f x - L} < \epsilon_0'$ implies $\size {\map f x - L} < \epsilon_0$.
Thus $\map P {\epsilon,\delta}$ holding for all rational $\epsilon$ implies $\map P {\epsilon,\delta}$ for all real $\epsilon$.

Now suppose $\map P {\epsilon,\delta}$ has been established for some rational $\epsilon$ and some real $\delta_0$.
From Between two Real Numbers exists Rational Number, there is some rational $\delta_0'$ such that $\size {x-c} < \delta_0' < \delta_0$.
Then $\size {x-c} < \delta_0$ is implied by $\size {x-c} < \delta_0'$
This means $\map P {\epsilon,\delta_0'}$ implies $\map P {\epsilon,\delta_0}$ holds.

We conclude:

$\map P {\epsilon,\delta}$ holds for all rational $\epsilon$ and $\delta$ in the interval of interest
is a stronger statement than:

$\map P {\epsilon,\delta}$ holds for all real $\epsilon$ and $\delta$ in the interval of interest.
$\blacksquare$


Also see
Limit with Epsilon Powers of 2




