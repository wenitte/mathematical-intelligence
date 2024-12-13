# 

Source: https://proofwiki.org/wiki/Probability_Measure_is_Monotone



Theorem
Let $\EE$ be an experiment with probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $A, B \in \Sigma$ such that $A \subseteq B$.

Then:

$\map \Pr A \le \map \Pr B$
where $\map \Pr A$ denotes the probability of event $A$ occurring.


Proof 1
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


Proof 2
As by definition a probability measure is a measure, we can directly use the result Measure is Monotone.
$\blacksquare$


Also see
Elementary Properties of Probability Measure




