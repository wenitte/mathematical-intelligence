# 

Source: https://proofwiki.org/wiki/Condition_for_Relation_to_be_Transitive_and_Antitransitive



Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a relation in $S$.

Then:

$\RR$ is both transitive and antitransitive
if and only if:

$\neg \paren {\exists x, y, z \in S: x \mathrel \RR y \land y \mathrel \RR z}$


Proof
Necessary Condition
Suppose $\neg \paren {\exists x, y, z \in S: x \mathrel \RR y \land y \mathrel \RR z}$.
Then $\RR$ is both transitive and antitransitive vacuously.
$\Box$


Sufficient Condition
Suppose $\RR$ is both transitive and antitransitive.
Aiming for a contradiction, suppose it is not the case that $\neg \paren {\exists x, y, z \in S: x \mathrel \RR y \land y \mathrel \RR z}$.
Then $\exists x, y, z \in S: x \mathrel \RR y \land y \mathrel \RR z$.
By transitivity:

$x \mathrel \RR z$
By antitransitivity:

$\neg \paren {x \mathrel \RR z}$
This is a contradiction.

Hence we must have $\neg \paren {\exists x, y, z \in S: x \mathrel \RR y \land y \mathrel \RR z}$.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $5$ Properties of Relations: Exercise $7 \ \text{(a)}$




