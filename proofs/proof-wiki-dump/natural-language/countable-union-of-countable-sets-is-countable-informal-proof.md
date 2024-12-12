# 

Source: https://proofwiki.org/wiki/Countable_Union_of_Countable_Sets_is_Countable/Informal_Proof



Theorem
Let the Axiom of Countable Choice be accepted.
Then it can be proved that a countable union of countable sets is countable.


Proof
Consider the countable sets $S_0, S_1, S_2, \ldots$ where $\ds S = \bigcup_{i \mathop \in \N} {S_i}$.
Assume that none of these sets have any elements in common.
Otherwise, we can consider the sets $S_0' = S_0, S_1' = S_1 \setminus S_0, S_2' = S_2 \setminus \paren {S_0 \cup S_1}, \ldots$
All of these are countable by Subset of Countable Set‎ is Countable, and they have the same union $\ds S = \bigcup_{i \mathop \in \N} {S_i'}$.
Now we write the elements of $S_0', S_1', S_2', \ldots$ in the form of a (possibly infinite) table:

$\begin{array} {*{4}c}
{a_{00}} & {a_{01}} & {a_{02}} & \cdots \\
{a_{10}} & {a_{11}} & {a_{12}} & \cdots \\
{a_{20}} & {a_{21}} & {a_{22}} & \cdots \\
\vdots  & \vdots  & \vdots & \ddots \\

\end{array}$

where $a_{ij}$ is the $j$th element of set $S_i$.
This table clearly contains all the elements of $\ds S = \bigcup_{i \mathop \in \N} {S_i}$.
Furthermore, we have that $\phi: S \to \N \times \N, a_{ij} \mapsto \tuple {i, j}$ is an injection.
By Cartesian Product of Countable Sets is Countable, there exists an injection $\psi: \N \times \N \to \N$.
Then $\psi \circ \phi: S \to \N$ is also an injection by Composite of Injections is Injection.
That is to say, $S$ is countable.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice, by way of Choosing infinitely many enumerations (one for each $S_i$).
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


The dependence on a certain axiom has to be clarified.In particular: adding the specific instances of where the ACC is usedTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{AxiomReview}} from the code.
Sources
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 2.2$: Countable sets: Theorem $2$




