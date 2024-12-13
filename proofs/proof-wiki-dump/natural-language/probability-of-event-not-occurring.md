# 

Source: https://proofwiki.org/wiki/Probability_of_Event_not_Occurring



Theorem
Let $\EE$ be an experiment with probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $\map \Pr A$ be the probability of event $A$ occurring.

Then:

$\forall A \in \Sigma: \map \Pr {\Omega \setminus A} = 1 - \map \Pr A$
That is, the probability of event $A$ not occurring is $1$ minus the probability of event $A$ occurring.

Another way of stating this is:

$\map \Pr A + \map \Pr {\Omega \setminus A} = 1$


Proof
From the conditions for $\Pr$ to be a probability measure, we have:

$(1): \quad \forall A \in \Sigma: 0 \le \map \Pr A$
$(2): \quad \map \Pr \Omega = 1$
$(3): \quad \ds \map \Pr {\bigcup_{i \mathop \ge 1} A_i} = \sum_{i \mathop \ge 1} \map \Pr {A_i}$ where all $A_i$ are pairwise disjoint.

Let $A \in \Sigma$ be an event.
Then $\paren {\Omega \setminus A} \in \Sigma$ by definition of Event Space: Axiom $(ES \ 2)$.
From Intersection with Relative Complement is Empty:

$A \cap \paren {\Omega \setminus A} = \O$
From Union with Relative Complement:

$A \cup \paren {\Omega \setminus A} = \Omega$

So:

$\map \Pr A + \map \Pr {\Omega \setminus A} = 1$
from above, and so:

$\map \Pr {\Omega \setminus A} = 1 - \map \Pr A$
$\blacksquare$


Also see
Elementary Properties of Probability Measure


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.3$: Probabilities: Example $10$
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.4$: Probability spaces: $(14)$




