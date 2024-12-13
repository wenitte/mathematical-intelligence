# 

Source: https://proofwiki.org/wiki/Probability_Measure_is_Monotone/Proof_1

Theorem
Let $A, B \in \Sigma$ such that $A \subseteq B$.

Then:

$\map \Pr A \le \map \Pr B$


Proof
From Set Difference Union Second Set is Union:

$A \cup B = \paren {B \setminus A} \cup A$
From Set Difference Intersection with Second Set is Empty Set:

$\paren {B \setminus A} \cap A = \O$
From the Addition Law of Probability:

$\map \Pr {A \cup B} = \map \Pr {B \setminus A} + \map \Pr A$
From Union with Superset is Superset:

$A \subseteq B \implies A \cup B = B$
Thus:

$\map \Pr B = \map \Pr {B \setminus A} + \map \Pr A$
By definition of probability measure:

$\map \Pr {B \setminus A} \ge 0$
from which it follows that:

$\map \Pr B \ge \map \Pr A$
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.4$: Probability spaces: $(16)$




