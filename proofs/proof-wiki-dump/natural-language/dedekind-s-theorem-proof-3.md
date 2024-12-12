# 

Source: https://proofwiki.org/wiki/Dedekind%27s_Theorem/Proof_3



Theorem
Let $\tuple {L, R}$ be a Dedekind cut of the set of real numbers $\R$.

Then there exists a unique real number which is a producer of $\tuple {L, R}$.


Proof
Proof of Uniqueness
Aiming for a contradiction, suppose both $\alpha$ and $\beta$ produce $\tuple {L, R}$.
By the Trichotomy Law for Real Numbers either $\beta < \alpha$ or $\alpha < \beta$.
Suppose that $\beta < \alpha$.
From Real Numbers are Densely Ordered, there exists at least one real number $c$ such that $\beta < c$ and $c < \alpha$.
Because $c < \alpha$, it must be the case that $c \in L$.
Because $\beta < c$, it must be the case that $c \in R$.
That is:

$c \in L \cap R$
But by the definition of Dedekind Cut, $\tuple {L, R}$ is a partition of $\R$.
That is, $L$ and $R$ are disjoint.
That is:

$L \cap R = \O$
This is a contradiction.
Similarly, $\alpha < \beta$ also leads to a contradiction.

It follows that $\alpha$ is unique.
$\Box$


Proof of Existence
Let $\gamma$ be the set of all rational numbers $p$ such that $p \in \alpha$ for some $\alpha \in L$.
It is to be verified that $\gamma$ is a cut.

Because $L$ is not empty, neither is $\gamma$.
Suppose $\beta \in \R$ and $q \notin \beta$.
Then because $\alpha < \beta$, we have that $q \notin \alpha$ for any $\alpha \in L$.
Thus $q \notin \gamma$.
Thus $\gamma$ satisfies criterion $(1)$ for being a cut.

Suppose $p \in \gamma$ and $q < p$.
Then $p \in \alpha$ for some $\alpha \in L$.
Hence $q \in \alpha$.
Hence $q \in \gamma$.
Thus $\gamma$ satisfies criterion $(2)$ for being a cut.

Suppose $p \in \gamma$.
Then $p \in \alpha$ for some $\alpha \in L$.
Hence there exists $q > p$ such that $q \in \alpha$.
Hence $q \in \gamma$.
Thus $\gamma$ satisfies criterion $(3)$ for being a cut.

Thus, by definition of the real numbers by identifying them with cuts, $\gamma$ is a real number.

We have that:

$\alpha \le \gamma$
for all $\alpha \in L$.
Aiming for a contradiction, suppose there exists $\beta \in R$ such that $\beta < \gamma$.
Then there exists some rational number $p \in\ Q$ such that $p \in \gamma$ and $p \notin beta$.
But if $p \in \gamma$ then $p \in \alpha$ for some $\alpha\ in L$.
This implies that $\beta < \alpha$.
But this contradicts the definition of Dedekind cut:

$(3): \quad \forall x \in L: \forall y \in R: x < y$
Thus $\gamma \le \beta$ for all $\beta \in R$.

That is, $\gamma$ is a producer of $\tuple {L, R}$.
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Real Numbers: Proof of Theorem $1.32$




