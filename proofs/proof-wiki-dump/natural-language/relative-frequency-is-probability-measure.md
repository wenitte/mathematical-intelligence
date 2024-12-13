# 

Source: https://proofwiki.org/wiki/Relative_Frequency_is_Probability_Measure



Theorem
The relative frequency model is a probability measure.


Proof
We check all the Kolmogorov axioms in turn:


First Axiom
Let $n$ be the number of times a certain event $\omega$ is observed to happen.
Let $n'$ be the number of times $\omega$ is observed not to happen.
By Law of Excluded Middle and Principle of Non-Contradiction, $\omega$ either happened or did not, and not both.
Therefore $n + n'$ is the total number of observations.
It is supposed that at least one observation is actually made, so that $n + n' \ne 0$.
The relative frequency model says that the probability of $\omega$ occurring can be defined as:

$\map \Pr \omega = \dfrac n {n + n'}$
the numerator and denominator of which are positive integers such that $n + n' \ge n$.

If $\omega$ is observed never to happen, then $n = 0$ and $\map \Pr \omega = \dfrac 0 {0 + n'} = 0$. 
If $\omega$ is observed to always happen, then $n' = 0$ and $\map \Pr \omega = \dfrac n {n + 0} = 1$.
Otherwise, if $n, n' \ne 0$, from Mediant is Between:

$0 = \dfrac 0 {0 + n'} <  \dfrac n {n + n'} < \dfrac n {n + 0} = 1$

Thus $\Pr$ is bounded:

$0 \le \map \Pr {\cdot} \le 1$
$\Box$


Second Axiom
By hypothesis:

$\map \Pr \Omega = \dfrac {n + n'} {n + n'} = 1$
$\Box$


Third Axiom
This is a proof by induction.


Basis for the Induction
The case $j = 2$ is verified as follows:
Let $A$ and $B$ be two pairwise disjoint events.
Let $p$ and $q$ be the number of times $A$ and $B$ have been observed, respectively.
Let $n$ be the total number of trials observed. 
By the definition of pairwise disjoint, $A$ and $B$ never happened at the same time.
By the same reasoning as the proof for the first axiom, in all $n$ observations:

$A$ happened $p$ times
$B$ happened $q$ times
$A \lor B$ happened $p + q$ times.

This article needs to be linked to other articles.In particular: There's a result that can be linked to so as to replace all these words. In fact, now I think of it, there's a result which allows us to replace this entire inductive argument, we just need to find it.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
By hypothesis:














\(\ds \map \Pr {A \cup B}\)

\(=\)







\(\ds \dfrac {p + q} n\)




















\(\ds \)

\(=\)







\(\ds \dfrac p n + \dfrac q n\)




















\(\ds \)

\(=\)







\(\ds \map \Pr A + \map \Pr B\)









This is the basis for the induction.


Induction Hypothesis
Let $A_1, A_2, \ldots, A_j$ be $j$ pairwise disjoint events.
By the definition of the relative frequency model, $j$ is finite.
Assume:

$\ds \map \Pr {\bigcup_{i \mathop = 1}^j A_i} = \map \Pr {A_1} + \map \Pr {A_2} + \cdots + \map \Pr {A_j}$
This is our induction hypothesis.


Induction Step
This is our induction step:
Let $A_1, A_2, \ldots, A_j, A_{j + 1}$ be $j+1$ pairwise disjoint events.
Define $C = A_1 \lor A_2 \lor A_3 \lor \cdots \lor A_j$.
Then $C$ and $A_{j + 1}$ are also pairwise disjoint.
By the base case: 

$\map \Pr {C \cup A_{j + 1} } = \map \Pr C + \map \Pr {A_{j + 1} }$
By the definition of $C$, this equation is logically equivalent to:

$\ds \map \Pr {\bigcup_{i \mathop = 1}^{j + 1} A_i} = \sum_{i \mathop = 1}^{j + 1} \map \Pr {A_i}$
By the definition of the relative frequency model, $j + 1$ is finite.
The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Sources
1970: Michael C. Gemignani: Calculus and Statistics: $\S 1.3, \ \S 1.4$




