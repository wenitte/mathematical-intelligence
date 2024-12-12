# 

Source: https://proofwiki.org/wiki/Existence_of_Class_Union

Theorem
For any classes $X, Y$, the union $X \cup Y$ exists and is unique.
That is:

$\forall X, Y: \exists! Z: \forall u: u \in Z \iff u \in X \lor u \in Y$
where $X \cup Y := Z$.


Proof
By Existence of Class Complement, there exist unique classes $\overline X, \overline Y$ such that:

$u \in \overline X \iff u \notin X$
$u \in \overline Y \iff u \notin Y$
for all sets $u$.
Then, by Existence of Class Intersection, there is a unique class $\overline X \cap \overline Y$ such that:

$u \in \overline X \cap \overline Y \iff u \in \overline X \land u \in \overline Y$
By the equivalences above:

$u \in \overline X \cap \overline Y \iff u \notin X \land u \notin Y$
Finally, by Existence of Class Complement, there is a unique class $\overline {\overline X \cap \overline Y}$ such that:

$u \in \overline {\overline X \cap \overline Y} \iff u \notin \overline X \cap \overline Y$
By the equivalence above:

$u \in \overline {\overline X \cap \overline Y} \iff \neg \paren {u \notin X \land u \notin Y}$
But then, by De Morgan's Laws:

$u \in \overline {\overline X \cap \overline Y} \iff u \in X \lor u \in Y$
Therefore, $Z := \overline {\overline X \cap \overline Y}$ exists and is unique.
$\blacksquare$





